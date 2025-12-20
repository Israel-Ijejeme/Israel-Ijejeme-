import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Target stand base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Target stand pole */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 16]} />
        <meshStandardMaterial color="#444444" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Target board - outer ring (red) */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
      {/* Target board - middle ring (white) */}
      <mesh position={[0, 1, 0.03]}>
        <cylinderGeometry args={[0.55, 0.55, 0.05, 32]} />
        <meshStandardMaterial color="#f1faee" />
      </mesh>
      {/* Target board - inner ring (red) */}
      <mesh position={[0, 1, 0.06]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color="#e63946" />
      </mesh>
      {/* Target board - bullseye (white) */}
      <mesh position={[0, 1, 0.09]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
        <meshStandardMaterial color="#f1faee" />
      </mesh>
    </group>
  );
};

export default Target;
