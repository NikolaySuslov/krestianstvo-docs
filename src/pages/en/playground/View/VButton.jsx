
import { onMount } from 'solid-js';

export default function VButton(props) {

    let thisDiv;

    onMount(() => { 

    })

    return (
        <Switch>
            <Match when={props.color == "green" && (!props.size ||  props.size == "large")}>
                <button class="m1 bg-green-200 hover:bg-green-300 text-sm text-black font-mono font-light py-2 px-4 rounded border-2 border-green-200" onClick={props.onClick}>{props.children}</button>
            </Match>
            <Match when={props.color == "green" && props.size == "small"}>
                <button class="m1 bg-green-200 hover:bg-green-300 text-sm text-black font-mono font-light py-1 px-2 rounded border-2 border-green-200" onClick={props.onClick}>{props.children}</button>
            </Match>
            <Match when={props.color == "red" && props.size == "large"}>
                <button class="m1 bg-red-200 hover:bg-red-300 text-sm text-black font-mono font-light py-2 px-4 rounded border-2 border-red-200" onClick={props.onClick}>{props.children}</button>
            </Match>
            <Match when={props.color == "red" && props.size == "small"}>
                <button class="m1 bg-red-200 hover:bg-red-300 text-sm text-black font-mono font-light py-1 px-2 rounded border-2 border-red-200" onClick={props.onClick}>{props.children}</button>
            </Match>
            <Match when={props.color == "grey" && props.size == "large"}>
                <button class= "m1 bg-grey-200 hover:bg-grey-300 text-sm text-black font-mono font-light py-2 px-4 rounded border-2 border-grey-200" onClick={props.onClick}>{props.children}</button>
            </Match>

           
        </Switch>

    )

}
