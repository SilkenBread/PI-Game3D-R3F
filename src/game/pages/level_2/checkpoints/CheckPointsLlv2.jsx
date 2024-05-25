import { useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import ControlPoint from "../../../layouts/ControlPoint";
import { RigidBody } from "@react-three/rapier";
import Checkpoint from "../../../globals/checkpoint/Checkpoint";
import { Html } from "@react-three/drei";
import Swal from 'sweetalert2'
import { useAuth } from "../../../../context/AuthContext";
import { createUser, readUser, updateUser } from "../../../../db/users-collections";

export default function CheckPointsLlv2(props) {
  const { avatar, setAvatar } = useAvatar(props);
  const [checkPointsData, setCheckPointsData] = useState([
    { position: [-9.5, -4, -2.9], id: 1 },
    { position: [-64, 29, 52], id: 2 }
  ]);

  const auth = useAuth();

  const onCheckPoint = (id) => {
    try {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      // Encuentra el checkpoint tocado
      const touchedCheckpoint = checkPointsData.find(checkPointE => checkPointE.id === id);

      if (touchedCheckpoint) {
        const location = touchedCheckpoint.position;

        console.log(`Checkpoint touched: ${location}`);

        const update = updateUser(auth.userLogged.email, id, 'checkpoints_level_2');
        setCheckPointsData(checkPointsData.filter((checkPointE) => checkPointE.id !== id))

        Toast.fire({
          icon: "success",
          title: "Checkpoint capturado.",
        });
      }
      else {
        Toast.fire({
          icon: "error",
          title: "No se encontró el checkpoint.",
        });
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      {checkPointsData.map((checkPointE) => (
        <RigidBody
          key={checkPointE.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={() => onCheckPoint(checkPointE.id)}
        >
          <Checkpoint scale={0.8} position={checkPointE.position} />
        </RigidBody>
      ))}
    </>
  );
}
