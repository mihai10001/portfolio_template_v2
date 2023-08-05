import * as React from "react";
import { PlaneGeometry, MeshStandardMaterial, DoubleSide } from "three";
import { a } from "@react-spring/three";

export default function Cube({
  size = 2,
  spring,
  start,
  middle,
  end, 
  position,
  rotation,
  scaleStart = 0,
  scaleEnd = 1 
}) {
  const aScale = spring.to([0, start, middle, 20], [scaleStart, scaleStart, scaleEnd, scaleEnd]);
  const aPositionY = spring.to([0, start, middle, 20], [2, 2, 0, 0]);
  const aPositionY_2 = spring.to([0, start, middle, 20], [-6, -6, -size / 2, -size / 2]);
  const aRotation = spring.to([0, start, middle, 20], [Math.PI / 2, Math.PI / 2, 0, 0]);
  const aRotation_2 = spring.to([0, start, middle, 20], [Math.PI / 2, Math.PI / 2, Math.PI, Math.PI]);
  const aRotation_3 = spring.to([0, start, middle, 20], [Math.PI * 5, Math.PI * 5, -Math.PI / 2, -Math.PI / 2]);
  const aOpacity = spring.to([0, middle, end, 20], [0, 0, 0.6, 0.6]);
  const planeGeometry = new PlaneGeometry(size, size);
  const standardMaterial = new MeshStandardMaterial({ color: "white", side: DoubleSide });

  return (
    <group position={position.toArray()} rotation={rotation.toArray()}>
      <a.mesh geometry={planeGeometry} material={standardMaterial} scale={aScale} position-y={aPositionY} position-z={size / 2} rotation-x={aRotation} receiveShadow />
      <a.mesh geometry={planeGeometry} material={standardMaterial} scale={aScale} position-y={aPositionY} position-z={-size / 2} rotation-x={aRotation_2} receiveShadow />
      <a.mesh geometry={planeGeometry} material={standardMaterial} scale={aScale} position-y={aPositionY_2} rotation-x={Math.PI / 2} rotation-z={aRotation_3} receiveShadow />
      <a.mesh geometry={planeGeometry} scale={aScale} position-y={size / 2} rotation-x={Math.PI / 2} receiveShadow>
        <a.meshStandardMaterial color={"white"} side={DoubleSide} transparent opacity={aOpacity} />
      </a.mesh>
      <a.group scale={aScale} position-x={size / 2} position-y={aPositionY} rotation-z={aRotation_2}>
        <a.mesh geometry={planeGeometry} material={standardMaterial} rotation-y={Math.PI / 2} receiveShadow />
      </a.group>
      <a.group scale={aScale} position-x={-size / 2} position-y={aPositionY} rotation-z={aRotation}>
        <a.mesh geometry={planeGeometry} material={standardMaterial} rotation-y={Math.PI / 2} receiveShadow></a.mesh>
      </a.group>
    </group>
  );
}
