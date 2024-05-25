import { useState } from "react";
import Reward from "../../../globals/reward/Reward";
import { RigidBody } from "@react-three/rapier";
import { useAvatar } from "../../../../context/AvatarContext";
import RewardMsg from "../../../layouts/RewardMsg";
import { Html } from "@react-three/drei";
import KeyReward from "../../../globals/reward/KeyReward";
import { StrictMode } from "react";
import { OrbitControls } from "@react-three/drei";

export default function RewardLevel2(props) {
  const { avatar, setAvatar } = useAvatar();
  const [rewardsData, setRewardsData] = useState([
    { position: [-74.5, -1.6, 3.9], id: 1 },
    { position: [-61.6, -2.3, -12.9], id: 2 },
    { position: [-58, -1, 2.8], id: 3 },
    { position: [-26, -1.3, 50], id: 5 },
    { position: [-26, -2, 0], id: 6 },
    { position: [-50.7, 29.7, 62, 7], id: 7 },
  ]);

  const [rewardsKeyData, setRewardsKeyData] = useState([
    { position: [-11.9, -1, 78.3], id: 101 },
    { position: [-63.4, -1.4, -1.3], id: 102 },
    { position: [-61, -1, 34.5], id: 103}
  ]);

  const [showRewardMsg, setShowRewardMsg] = useState(false);

  const onRecolectReward = (id) => {
    setRewardsKeyData(
      rewardsKeyData.filter((rewardKey) => rewardKey.id !== id),
      setAvatar({...avatar, keyUtily: avatar.keyUtily + 1})
    );

    setShowRewardMsg(true);
    setTimeout(() => {
      setShowRewardMsg(false);
    }, 10000); // Oculta la notificación después de 3 segundos
  };

  const onRecolectReward1 = (id) => {
    setRewardsData(
      rewardsData.filter((rewardOb) => rewardOb.id !== id),
      setAvatar({ ...avatar, recompensas: avatar.recompensas + 1 })
    );
    setShowRewardMsg(true);
    setTimeout(() => {
      setShowRewardMsg(false);
    }, 10000); // Oculta la notificación después de 3 segundos
  }

  return (
    <>
      {rewardsData.map((rewardOb) => (
        <RigidBody
          key={rewardOb.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={() => onRecolectReward1(rewardOb.id)}
        >
          <Reward scale={0.75} position={rewardOb.position} />
        </RigidBody>
      ))}
      {rewardsKeyData.map((rewardKey) => (
        <RigidBody
          key={rewardKey.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={() => onRecolectReward(rewardKey.id)}
        >
          <KeyReward scale={1} position={rewardKey.position} />
        </RigidBody>
      ))}
      {showRewardMsg && (
        <Html fullscreen={true} center={true} distanceFactor={100} position={[-10,25,-30]} style={{ pointerEvents: 'none' }} >
          <RewardMsg  />
        </Html>
      )}
    </>
  );
}
