import { useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import ControlPoint from "../../../layouts/ControlPoint";
import { RigidBody } from "@react-three/rapier";
import Checkpoint from "../../../globals/checkpoint/Checkpoint";
import { Html } from "@react-three/drei";

import { useAuth } from "../../../../context/AuthContext";
import { createUser, readUser, updateUser } from "../../../../db/users-collections";

export default function CheckPointsLlv2(props) {
  const { avatar, setAvatar } = useAvatar(props);
  const [checkPointsData, setCheckPointsData] = useState([
    { position: [-9.5, -4, -2.9], id: 1 },
    { position: [-64, 29, 52], id: 2 }
  ]);

  const auth = useAuth();

  const onCheckPoint = async (id) => {
    try {
      const update = await updateUser(auth.userLogged.email, id, 'checkpoints_level_2');
      setCheckPointsData(checkPointsData.filter((checkPointE) => checkPointE.id !== id));
      setChekPointMsg(true);
      setTimeout(() => {
        setChekPointMsg(false);
      }, 10000);
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
