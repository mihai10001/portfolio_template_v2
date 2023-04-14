import Sky from './Sky';

export default function CanvasContent() {

  return (
    <group>
      <Environment preset="sunset" />
      <Sky />
    </group>
  )
}
