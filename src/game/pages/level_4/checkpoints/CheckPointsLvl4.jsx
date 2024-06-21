import { useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import ControlPoint from "../../../layouts/ControlPoint";
import { RigidBody } from "@react-three/rapier";
import Checkpoint from "../../../globals/checkpoint/Checkpoint";
import { Html, Sparkles } from "@react-three/drei";
import Swal from "sweetalert2";
import { useAuth } from "../../../../context/AuthContext";
import { createUser, readUser, updateUser } from "../../../../db/users-collections";

export default function CheckPointsLlv4(props) {
  const [checkPointsData, setCheckPointsData] = useState([
    { position: [-22.00, 11.50, -58.00], id: 1 ,scale: 1},
    { position: [0.00, 24.20, -112.5], id: 2 , scale: 1.5 },
    { position: [-3.50, 40.50, -318.50], id: 3 ,scale: 1.5},
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
        let location = touchedCheckpoint.position;
        location[2] = location[2] + 4;

        console.log(`Checkpoint touched: ${location}`);

        const update = updateUser(
          auth.userLogged.email,
          id,
          'level_4',
          location
        );
        setCheckPointsData(
          checkPointsData.filter((checkPointE) => checkPointE.id !== id)
        );

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
          <Checkpoint scale={checkPointE.scale} position={checkPointE.position} />
          <Sparkles
            position={checkPointE.position}
            count={80}
            size={50}
            scale={10}
            speed={2}
            color="#0083ff"
            fade={true}
          />
        </RigidBody>
      ))}
    </>
  );
}