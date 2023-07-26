import * as React from "react";
import { PlaneGeometry, MeshStandardMaterial, DoubleSide } from "three";

export default function Cube({
  size = 2,
  position,
  rotation,
}) {
  const planeGeometry = new PlaneGeometry(size, size);
  const standardMaterial = new MeshStandardMaterial({ color: "white", side: DoubleSide });

  return (
    <group position={position.toArray()} rotation={rotation.toArray()}>
      <mesh geometry={planeGeometry} material={standardMaterial} receiveShadow />
      <mesh geometry={planeGeometry} material={standardMaterial} receiveShadow />
      <mesh geometry={planeGeometry} material={standardMaterial} receiveShadow />
      <mesh geometry={planeGeometry} receiveShadow>
        <meshStandardMaterial color={"white"} side={DoubleSide} transparent />
      </mesh>
      <mesh geometry={planeGeometry} material={standardMaterial} receiveShadow />
      <mesh geometry={planeGeometry} material={standardMaterial} receiveShadow />
    </group>
  );
}
