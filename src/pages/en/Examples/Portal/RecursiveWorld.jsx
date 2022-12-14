/** @jsxImportSource solid-js */
import { genID, createLocalStore } from "krestianstvo";
import { createEffect, createSignal } from "solid-js";

import DefaultAvatar from "../../playground/DefaultAvatar"

export default function App(props) {

    const path = import.meta.url

    const [local, setLocal] = createLocalStore({
        data: {
            type: "App",
            nodeID: props.nodeID,
            properties: {
                dc: props.parameters ? props.parameters : 10,
                scale: props.scale ? props.scale : 1,
                angle: props.angle ? props.angle : 0,
                color: props.color ? props.color : 0,
                move: props.move ? props.move : 0,
                dir: true,
                ticking: false,
                initialized: false
            },
            dynamic: [],
            dynamicSelo: [],
        }
    }, props)


    const initialize = () => {
        props.selo.future(props.nodeID, "anim", 0, [])
    }

    createEffect(() => {
        if (local.data.properties.move >= 10) {
            setLocal("data", "properties", "dir", true)
        } else if (local.data.properties.move <= -10) {
            setLocal("data", "properties", "dir", false)
        }
    })

    const anim = () => {

        setLocal("data", "properties", "move", (a) => {
            let m = local.data.properties.dir ? a - 0.2 : a + 0.2
            return m
        })
        setLocal("data", "properties", "angle", (a) => {
            let m = local.data.properties.dir ? a - 0.03 : a + 0.03
            return m
        })

        props.selo.future(props.nodeID, "anim", 0.05, [])
    }

    props.selo.createAction(props.nodeID, "initialize", initialize)
    props.selo.createAction(props.nodeID, "anim", anim)

    const [el, setEl] = createSignal(null);

    const colorI = 18

    return (props.deep > local.data.properties.dc) ? null : (
        <>
            <div ref={setEl} class="bg-blend-color relative p2 m2 flex-h"
                style={{
                    transform: `scale(${props.scale}) rotate(${props.angle}deg) translate(${props.move ? props.move : 0}px, -10px)`,
                    width: "fit-content",
                    height: "fit-content",
                   // border: "1px solid grey",
                    "background-color": `rgba(${255 - props.deep*colorI}, ${255 - props.deep*colorI}, ${255 - props.deep*colorI}, 0.7)`
                }}>
                <Show when={!props.noAvatar}>
                    <DefaultAvatar
                        {...props}
                        el={el}
                        scale={0.5}
                    />
                </Show>
                Tick: {Math.round(props.selo.storeNode.tick)}
                <br />
                <App
                    nodeID={props.nodeID}
                    deep={props.deep + 1}
                    selo={props.selo}
                    scale={local.data.properties.scale - 0.1}
                    angle={local.data.properties.angle }
                    move={local.data.properties.move}
                    //noAvatar={true}
                />
            </div>
        </>
    )
}