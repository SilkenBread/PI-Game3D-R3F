import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { Html } from "@react-three/drei";
import Reward from "../../../globals/reward/Reward";
import KeyReward from "../../../globals/reward/KeyReward";
import RewardMsg from "../../../layouts/RewardMsg";

export default function RewardLevel3(props) {
  const { avatar, setAvatar } = useAvatar();

  const [rewardsKeyData, setRewardsKeyData] = useState([
    { position: [-32.21, 0, -45.87], id: 301 },
    { position: [43.63, 0, 68.0], id: 302 },
    { position: [39.24, 0, 24.0], id: 303 },
  ]);

  const onRecolectReward = (e, id) => {
    if (e.other.rigidBodyObject.name === "player") {
      setRewardsKeyData(
        rewardsKeyData.filter((rewardKey) => rewardKey.id !== id)
      );
      setAvatar({ ...avatar, keyUtily: avatar.keyUtily + 1 });
      console.log(avatar.keyUtily, id);

      setShowRewardMsg(true);
      setTimeout(() => {
        setShowRewardMsg(false);
      }, 10000); // Oculta la notificación después de 3 segundos
    }
  };

  const [rewardsData, setRewardsData] = useState([
    { position: [-50.0, 2, -5.0], id: 1 },
    { position: [-13.0, 2, -66.0], id: 2 },
    { position: [23.0, 2, 6.0], id: 3 },
    { position: [0, 2, 60], id: 4 },
    { position: [-74.0, 2, 0], id: 5 },
    { position: [-25.0, 2, 70.0], id: 6 },
    { position: [-38.0, 2, 33.0], id: 7 },
    { position: [30.0, 2, 75.0], id: 8 },
    { position: [50.0, 2, 30.0], id: 9 },
    { position: [32.0, 2, 15.0], id: 10 },
    { position: [52.0, 2, -30.0], id: 11 },
    { position: [2.0, 2, -42.0], id: 12 },
  ]);

  const onRecolectReward1 = (e, id) => {
    if (e.other.rigidBodyObject.name === "player") {
      console.log(e, id);
      setRewardsData(
        rewardsData.filter((rewardOb) => rewardOb.id !== id),
        setAvatar({ ...avatar, recompensas: avatar.recompensas + 1 })
      );
      setShowRewardMsg(true);
      setTimeout(() => {
        setShowRewardMsg(false);
      }, 10000); // Oculta la notificación después de 3 segundos
    }
  };

  const [showRewardMsg, setShowRewardMsg] = useState(false);

  return (
    <>
      {rewardsKeyData.map((rewardKey) => (
        <RigidBody
          key={rewardKey.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={(e) => onRecolectReward(e, rewardKey.id)}
        >
          <KeyReward scale={1.3} position={rewardKey.position} />
        </RigidBody>
      ))}
      {rewardsData.map((rewardOb) => (
        <RigidBody
          key={rewardOb.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={(e) => onRecolectReward1(e, rewardOb.id)}
        >
          <Reward scale={2} position={rewardOb.position} />
        </RigidBody>
      ))}
      {showRewardMsg && (
        <Html
          fullscreen={true}
          center={true}
          distanceFactor={100}
          position={[-10, 25, -30]}
          style={{ pointerEvents: "none" }}
        >
          <RewardMsg />
        </Html>
      )}
    </>
  );
}
