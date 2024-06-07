import { useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import ControlPoint from "../../../layouts/ControlPoint";
import { RigidBody } from "@react-three/rapier";
import Checkpoint from "../../../globals/checkpoint/Checkpoint";
import { Html, Sparkles } from "@react-three/drei";
import Swal from "sweetalert2";
import { useAuth } from "../../../../context/AuthContext";
import {
  createUser,
  readUser,
  updateUser,
} from "../../../../db/users-collections";

export default function CheckPointsLlv3(props) {
  const { avatar, setAvatar } = useAvatar(props);
  const [checkPointsData, setCheckPointsData] = useState([
    { position: [-63.5, 0, 38.0], id: 1 },
    { position: [29.0, 0, 38.0], id: 2 },
    { position: [7.5, 0, -87.0], id: 3 },
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
      const touchedCheckpoint = checkPointsData.find(
        (checkPointE) => checkPointE.id === id
      );

      if (touchedCheckpoint) {
        const location = touchedCheckpoint.position;

        console.log(`Checkpoint touched: ${location}`);

        const update = updateUser(
          auth.userLogged.email,
          id,
          "checkpoints_level_2"
        );
        setCheckPointsData(
          checkPointsData.filter((checkPointE) => checkPointE.id !== id)
        );

        Toast.fire({
          icon: "success",
          title: "Checkpoint capturado.",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "No se encontró el checkpoint.",
        });
      }
    } catch (error) {
      console.error("Error updating user:", error);
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
          <Checkpoint scale={1.3} position={checkPointE.position} />
          <Sparkles
            position={checkPointE.position}
            count={80}
            size={50}
            scale={10}
            speed={2}
            color="white"
            fade={true}
          />
        </RigidBody>
      ))}
    </>
  );
}
