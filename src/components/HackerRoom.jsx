/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: david.campuzano (https://sketchfab.com/david.campuzano)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hacker-room-stylized-a0cfe6edf2dd494c8a95addf6bb13a10
Title: Hacker Room - Stylized
*/

import {useGLTF, useTexture} from '@react-three/drei'
import PropTypes from 'prop-types'

const HackerRoom = (props) => {
    const { nodes, materials } = useGLTF('/models/hacker-room.glb')

    const monitorTexture = useTexture('textures/desk/monitor.png')
    const screenTexture = useTexture('textures/desk/screen1.png')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_computer_mat_0.geometry}
                material={materials.computer_mat}
            >
                <meshMatcapMaterial map={monitorTexture}/>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.server_server_mat_0.geometry}
                material={materials.server_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
                material={materials.vhsPlayer_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.shelf_stand_mat_0.geometry}
                material={materials.stand_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard_mat_mat_mat_0.geometry}
                material={materials.mat_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.arm_arm_mat_0.geometry}
                material={materials.arm_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tv_tv_mat_0.geometry}
                material={materials.tv_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table_table_mat_0.geometry}
                material={materials.table_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cables_cables_mat_0.geometry}
                material={materials.cables_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.props_props_mat_0.geometry}
                material={materials.props_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screen_screens_0.geometry}
                material={materials.screens}
            >
                <meshMatcapMaterial map={screenTexture}/>
                {/*<meshMatcapMaterial map={monitorTexture}/>*/}
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screen_glass_glass_0.geometry}
                material={materials.glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ground_ground_mat_0.geometry}
                material={materials.ground_mat}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.peripherals_key_mat_0.geometry}
                material={materials.key_mat}
            />
        </group>
    )
}

useGLTF.preload('/models/hacker-room.glb')

HackerRoom.propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.arrayOf(PropTypes.number),
}

export default HackerRoom
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: david.campuzano (https://sketchfab.com/david.campuzano)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hacker-room-stylized-a0cfe6edf2dd494c8a95addf6bb13a10
Title: Hacker Room - Stylized
*/

