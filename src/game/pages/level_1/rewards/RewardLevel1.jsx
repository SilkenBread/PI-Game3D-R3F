import { useState } from "react";
import Reward from "../../../globals/reward/Reward";
import { RigidBody } from "@react-three/rapier";
import Avatar2 from "../../../globals/player/Avatar2";
import { useAvatar } from "../../../../context/AvatarContext";
import { log } from "three/examples/jsm/nodes/Nodes.js";

export default function RewardLevel1(props) {
  const { avatar, setAvatar } = useAvatar();
  const [rewardsData, setRewardsData] = useState([
    { position: [-29.5, 14, -57.5], id: 1 },
    { position: [23, 20, -71], id: 2 }, //[23, 20, -71.5] //Original 23.5, 20, -70.5
    { position: [50.5, 20, -36.5], id: 3 },
    { position: [27.5, 30, -14.5], id: 4 },
    { position: [-48.5, 50, -0.5], id: 5 },
    { position: [-7.9, 55.5, -43], id: 6 }
  ]);

  const onRecolectReward = (id) => {
    setRewardsData(rewardsData.filter((rewardOb) => rewardOb.id !== id));
    setAvatar({ ...avatar, recompensas: avatar.recompensas + 1 });
    console.log(avatar.recompensas);
  };

  return (
    <>
      {rewardsData.map((rewardOb) => (
        <RigidBody
          key={rewardOb.id}
          type="fixed"
          colliders={"trimesh"}
          onCollisionEnter={() => onRecolectReward(rewardOb.id)}
        >
          <Reward scale={0.75} position={rewardOb.position} />
        </RigidBody>
      ))}
    </>
  );
}
