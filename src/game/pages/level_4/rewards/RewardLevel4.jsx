import { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { useAvatar } from "../../../../context/AvatarContext";
import { Html } from "@react-three/drei";
import RewardMsg from "../../../layouts/RewardMsg";
import FlowerReward from "../../../globals/reward/FlowerReward";

export default function RewardLevel4(props) {
    const { avatar, setAvatar } = useAvatar();
    const [showRewardMsg, setShowRewardMsg] = useState(false);
    const [rewardsData, setRewardsData] = useState([
        { position: [-17.00, 0.00, -8.00], id: 1 },
        { position: [-8.50, 15.00, -62.50], id: 2 },
        { position: [42.00, 20.00, -46.50], id: 3 },
        { position: [10.00, 20.00, -72.50], id: 4 },
        { position: [-1.50, 27.00, -96.50], id: 5 },
        { position: [-1.50, 34.00, -173.5], id: 6 },
        { position: [-1.50, 40.00, -224.50], id: 7 },
        { position: [0.00, 44.00, -290.50], id: 8 },
        { position: [0.00, 40.00, -400.50], id: 9 }
      ]);

      const onRecolectReward = (e, id) => {
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

    return(
        <>
        {rewardsData.map((rewardOb) => (
        <RigidBody
          key={rewardOb.id}
          type="fixed"
          colliders={"cuboid"}
          onCollisionEnter={(e) => onRecolectReward(e, rewardOb.id)}
        >
          <FlowerReward scale={0.15} position={rewardOb.position}/>
        </RigidBody>
      ))}
      {showRewardMsg && (
        <Html
          fullscreen={true}
          center={true}
          distanceFactor={300}
          position={[0, 80, -580]}
          style={{ pointerEvents: "none" }}
        >
          <RewardMsg />
        </Html>
      )}
        </>
    )
      
      
}