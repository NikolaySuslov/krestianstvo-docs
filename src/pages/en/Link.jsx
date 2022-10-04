/** @jsxImportSource solid-js */

import { onMount } from "solid-js";

export default function PortalLink(props) {

    let span
    onMount(() => {

        span.addEventListener("copy", function (event) {
            event.preventDefault();
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", span.textContent);
                console.log(event.clipboardData.getData("text"))
            }
        });
    })


    function handleClick() {
        console.log("link:", props.linkText)
        document.execCommand("copy");
    }

    return (
        <>
            <a ref={span} onClick={[handleClick, []]}>{props.linkText}</a>
        </>
    )
}