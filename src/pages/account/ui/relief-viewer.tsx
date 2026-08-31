import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ReliefData = { nodes: Array<{ x: number; y: number; z: number }>; cells: number[][] };

function RealReliefMesh({ relief }: { relief: ReliefData }) {
  const group = useRef<{ rotation: { y: number } }>(null);
  const geometry = useMemo(() => {
    const bounds = relief.nodes.reduce((result, node) => ({ minX: Math.min(result.minX, node.x), maxX: Math.max(result.maxX, node.x), minY: Math.min(result.minY, node.y), maxY: Math.max(result.maxY, node.y) }), { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity });
    const { minX, maxX, minY, maxY } = bounds;
    const positions = new Float32Array(relief.nodes.length * 3); const colors = new Float32Array(relief.nodes.length * 3);
    relief.nodes.forEach((node, index) => { const depth = Math.max(0, node.z); positions[index * 3] = ((node.x - minX) / (maxX - minX) - 0.5) * 8; positions[index * 3 + 1] = -Math.min(depth / 900, 2.2); positions[index * 3 + 2] = ((node.y - minY) / (maxY - minY) - 0.5) * 5.4; const color = new THREE.Color().setHSL(0.52 - Math.min(depth / 3200, 0.42), 0.82, 0.38 + Math.min(depth / 5000, 0.22)); colors.set([color.r, color.g, color.b], index * 3); });
    const indices = new Uint32Array(relief.cells.flat()); const result = new THREE.BufferGeometry(); result.setAttribute("position", new THREE.BufferAttribute(positions, 3)); result.setAttribute("color", new THREE.BufferAttribute(colors, 3)); result.setIndex(new THREE.BufferAttribute(indices, 1)); result.computeVertexNormals(); return result;
  }, [relief.cells, relief.nodes]);
  useFrame(({ clock }) => { if (group.current) group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.04; });
  return <group ref={group} rotation={[-0.72, 0, 0]}><mesh geometry={geometry}><meshStandardMaterial vertexColors roughness={0.68} metalness={0.08} side={THREE.DoubleSide} /></mesh><lineSegments geometry={new THREE.WireframeGeometry(geometry)}><lineBasicMaterial color="#b6f3ff" transparent opacity={0.5} /></lineSegments></group>;
}

export function ReliefViewer() {
  const [relief, setRelief] = useState<ReliefData | null>(null);
  useEffect(() => { fetch("/data/black-sea-relief.json").then((response) => response.json() as Promise<ReliefData>).then(setRelief); }, []);
  return <div className="relative h-[360px] w-full overflow-hidden rounded-xl bg-[#06151e] sm:h-[460px]">{relief ? <Canvas camera={{ position: [0, 3.9, 5.8], fov: 42 }} dpr={[1, 1.5]}><color attach="background" args={["#06151e"]} /><ambientLight intensity={1.1} /><directionalLight position={[-3, 5, 4]} intensity={3.2} color="#b8f3ff" /><pointLight position={[4, 1, -2]} intensity={2} color="#168aad" /><RealReliefMesh relief={relief} /><OrbitControls enablePan={false} minDistance={3.5} maxDistance={10} autoRotate autoRotateSpeed={0.25} /></Canvas> : <div className="flex h-full items-center justify-center text-sm text-cyan-200">Загрузка сетки 191 766 узлов…</div>}</div>;
}
