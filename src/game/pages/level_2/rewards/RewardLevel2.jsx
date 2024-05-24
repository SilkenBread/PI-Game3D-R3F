import { useState } from "react";
import Reward from "../../../globals/reward/Reward";
import { RigidBody } from "@react-three/rapier";
import { useAvatar } from "../../../../context/AvatarContext";
import RewardMsg from "../../../layouts/RewardMsg";
import { Html } from "@react-three/drei";
import KeyReward from "../../../globals/reward/KeyReward";

export default function RewardLevel2(props) {
  const { avatar, setAvatar } = useAvatar();
  const [rewardsData, setRewardsData] = useState([
    { position: [-74.5, -1.6, 3.9], id: 7 },
    { position: [-61.6, -2.3, -12.9], id: 8 },
    { position: [-58, -1, 2.8], id: 9 },
    { position: [-26, -1.3, 50], id: 10 },
    { position: [-26, -2, 0], id: 11 },
    { position: [-50.7, 29.7, 62, 7], id: 12 },
  ]);

  const [rewardsKeyData, setRewardsKeyData] = useState([
    { position: [-63.4, -0.6, -1.3], id: 101 },
    { position: [-11.9, -1, 78.3], id: 102 },
  ]);

  const [showRewardMsg, setShowRewardMsg] = useState(false);

  const onRecolectReward = (id) => {
    setRewardsData(rewardsData.filter((rewardOb) => rewardOb.id !== id));
    setRewardsKeyData(rewardsKeyData.filter((rewardKey) => rewardKey.id !== id));
    setAvatar({ ...avatar, recompensas: avatar.recompensas + 1 });
    setShowRewardMsg(true);
    setTimeout(() => {
      setShowRewardMsg(false);
    }, 30000); // Oculta la notificación después de 3 segundos
    
  };

  return (
    <>
      {rewardsData.map((rewardOb) => (
        <RigidBody
          key={rewardOb.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={() => onRecolectReward(rewardOb.id)}
        >
          <Reward scale={0.75} position={rewardOb.position} />
        </RigidBody>
      ))}
      {rewardsKeyData.map((rewardKey) =>(
        <RigidBody
        key={rewardKey.id}
        type="fixed"
        colliders={"cuboid"}
        onCollisionEnter={() => onRecolectReward(rewardKey.id)}
      >
        <KeyReward scale={1} position={rewardKey.position}/>
      </RigidBody>
      ))}
      {showRewardMsg && (
        <Html fullscreen = {true} center = {true} >
          <RewardMsg />
        </Html>
      )}
    </>
  );
}
