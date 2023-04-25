import RotatingStars from './RotatingStars';
import Sky from './Sky';

export default function CanvasContent() {

  return (
    <group>
      <Environment preset="sunset" />
      <RotatingStars />
      <Sky />
    </group>
  )
}
