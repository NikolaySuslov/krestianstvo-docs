/** @jsxImportSource solid-js */

import Simple from "./playground/Simple";
import Painter from "./playground/Painter";
import EmptyWorld from "./playground/EmptyWorld";
import Counter from "./playground/Objects/Counter";
import Portal from "./playground/Objects/Portal";
import { default as Action } from "./Examples/Action/App";
import { default as RWorld } from "./Examples/Portal/RecursiveWorld";

import { default as RSelo } from "./Examples/Portal/RecursiveSelo";

import PortalLink from './Link'

import { Selo } from "krestianstvo";
import { REFLECTOR_HOST } from '../../config';


let params = (new URL(document.location)).searchParams
let namespace_id = params.get('k') ? params.get('k') : "_docs_"

let worlds = {
	simple: Simple,
	painter: Painter,
	emptyWorld: EmptyWorld,
	counter: Counter,
	portal: Portal,
	action: Action,
	rworld: RWorld,
	rselo: RSelo
}

export default function Start(props) {

	let textLink = props.nodeID + "?k=" + namespace_id + props.seloID

	return (
		<>
			<Show when={props.link}>
				<PortalLink client:idle linkText={textLink} />
			</Show>
			<Selo
				nodeID={props.nodeID}
				seloID={namespace_id + props.seloID}
				info={false}
				component={props.nodeID ? worlds[props.nodeID] ? worlds[props.nodeID] : EmptyWorld : EmptyWorld}
				worlds={worlds}
				fallbackWorld={EmptyWorld}
				reflectorHost={REFLECTOR_HOST}
			/>
		</>
	)
}