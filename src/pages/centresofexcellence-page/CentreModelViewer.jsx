import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";
import styles from "./centres_of_excellence.module.css";

const departmentColors = ["#7d2529", "#147d83", "#4666a5", "#9a6a22", "#694b91"];

const organModels = [
  { pattern: /brain|neuro|neurolog/i, organ: "brain" },
  { pattern: /heart|cardio|cardiac/i, organ: "heart" },
  {
    pattern: /lung|pulmon|respirat|chest|critical care|anaesthes/i,
    organ: "lungs",
  },
  { pattern: /kidney|renal|nephro/i, organ: "kidneys" },
  { pattern: /liver|hepato/i, organ: "liver" },
  {
    pattern: /gastro|digest|intestin|laparoscopic|general surgery/i,
    organ: "intestines",
  },
  { pattern: /stomach/i, organ: "stomach" },
  { pattern: /pancrea|diabet|endocrin/i, organ: "pancreas" },
  { pattern: /spleen/i, organ: "spleen" },
  { pattern: /gallbladder/i, organ: "gallbladder" },
  { pattern: /bladder|urolog/i, organ: "bladder" },
  { pattern: /eye|ophthalm/i, organ: "eye" },
  { pattern: /\bent\b|laryn|throat/i, organ: "larynx" },
  { pattern: /esophag/i, organ: "esophagus" },
];

function getOrganModel(title) {
  return organModels.find(({ pattern }) => pattern.test(title))?.organ;
}

function getDepartmentColor(title) {
  const hash = Array.from(title).reduce(
    (value, character) => value + character.charCodeAt(0),
    0,
  );
  return departmentColors[hash % departmentColors.length];
}

function OrganModel({ organ }) {
  const { scene } = useGLTF(`/organs/${organ}.glb`);
  const model = useMemo(() => {
    const clone = scene.clone(true);
    const bounds = new THREE.Box3().setFromObject(clone);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = 1.8 / Math.max(size.x, size.y, size.z);

    return {
      clone,
      scale,
      position: [-center.x * scale, -center.y * scale, -center.z * scale],
    };
  }, [scene]);

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.25}>
      <group scale={model.scale} position={model.position}>
        <primitive object={model.clone} />
      </group>
    </Float>
  );
}

function MedicalEmblem({ color }) {
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
      <group>
        <mesh castShadow>
          <boxGeometry args={[0.38, 1.35, 0.38]} />
          <meshStandardMaterial color={color} roughness={0.28} metalness={0.18} />
        </mesh>
        <mesh castShadow>
          <boxGeometry args={[1.35, 0.38, 0.38]} />
          <meshStandardMaterial color={color} roughness={0.28} metalness={0.18} />
        </mesh>
        <mesh rotation={[Math.PI / 2.8, 0.2, 0.35]}>
          <torusGeometry args={[1.08, 0.035, 12, 96]} />
          <meshStandardMaterial color="#d5aa62" metalness={0.65} roughness={0.3} />
        </mesh>
        <mesh rotation={[0.5, 0.8, 0]}>
          <torusGeometry args={[1.28, 0.018, 8, 96]} />
          <meshStandardMaterial color="#ffffff" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.95, 0.72, 0.12]} castShadow>
          <icosahedronGeometry args={[0.13, 1]} />
          <meshStandardMaterial color="#d5aa62" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[-0.96, -0.62, -0.12]} castShadow>
          <icosahedronGeometry args={[0.1, 1]} />
          <meshStandardMaterial color="#ffffff" metalness={0.4} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export default function CentreModelViewer({ title, image }) {
  const color = getDepartmentColor(title);
  const organ = getOrganModel(title);

  return (
    <figure
      className={styles.coeModelViewer}
      aria-label={`Interactive 3D medical illustration for ${title}`}
    >
      {image && <img src={image} alt="" aria-hidden="true" />}
      <Canvas
        className={styles.coeModelCanvas}
        camera={{ position: [0, 0, 4], fov: 42 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 4, 5]} intensity={3} />
        <pointLight position={[-3, -2, 3]} color={color} intensity={18} />
        <Suspense fallback={null}>
          {organ ? (
            <OrganModel organ={organ} />
          ) : (
            <MedicalEmblem color={color} />
          )}
        </Suspense>
        <OrbitControls enablePan={false} minDistance={3} maxDistance={6} />
      </Canvas>
      <figcaption className={styles.coeModelCaption}>
        {organ ? `3D ${organ} model` : "Interactive 3D medical illustration"}
        <span>Drag to explore</span>
      </figcaption>
    </figure>
  );
}
