/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tamminen (https://sketchfab.com/tamminen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sharpnels-467ec11eae2d48fbac92313f240b132b
Title: Sharpnels
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/sharpnels/scene.gltf");
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions.Animation.play();
  },[]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="EffectBall_8">
                <group name="Icosphere_0">
                  <mesh
                    name="mesh_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_0.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Icosphere001_1"
                  rotation={[-0.848, -0.727, -0.629]}
                >
                  <mesh
                    name="mesh_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_1.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_1.morphTargetInfluences}
                  />
                </group>
                <group name="Icosphere002_2" rotation={[0.027, -1.024, 0.008]}>
                  <mesh
                    name="mesh_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_2.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
                  />
                </group>
                <group name="Icosphere003_3" rotation={[-2.377, 0.253, -2.629]}>
                  <mesh
                    name="mesh_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_3.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_3.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_3.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Icosphere004_4"
                  rotation={[-0.398, -0.495, -0.34]}
                  scale={0.97}
                >
                  <mesh
                    name="mesh_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_4.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_4.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_4.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Icosphere005_5"
                  rotation={[-1.676, -0.671, -1.409]}
                  scale={0.97}
                >
                  <mesh
                    name="mesh_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_5.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_5.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_5.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Icosphere006_6"
                  rotation={[-1.708, -1.286, -1.496]}
                  scale={0.97}
                >
                  <mesh
                    name="mesh_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_6.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_6.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_6.morphTargetInfluences}
                  />
                </group>
                <group
                  name="Icosphere007_7"
                  rotation={[-2.594, 0.828, -2.804]}
                  scale={0.97}
                >
                  <mesh
                    name="mesh_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh_7.geometry}
                    material={materials.effectBall_mat}
                    morphTargetDictionary={nodes.mesh_7.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_7.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/sharpnels/scene.gltf");