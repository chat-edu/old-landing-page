import {V1, V2, V3} from "@/data/apps";
import root from "@/data/root";

import {Node} from "reactflow";
import {NodeTypes} from "@/types/NodeTypes";

export const appNodeHeight = 200;
export const appNodeWidth = 200;

export const rootNodeHeight = 300;
export const rootNodeWidth = 300;

const nodes: Node[] = [
    {
        id: 'v1',
        type: NodeTypes.AppNode,
        data: V1,
        position: { x: -(appNodeWidth + 25), y: 0 },
    },
    {
        id: 'v2',
        type: NodeTypes.AppNode,
        data: V2,
        position: { x: 0, y: 0 },
    },
    {
        id: 'v3',
        type: NodeTypes.AppNode,
        data: V3,
        position: { x: (appNodeWidth + 25), y: 0 },
    },
    {
        id: 'root',
        type: NodeTypes.RootNode,
        position: { x: -(appNodeWidth * 3 / 2), y: -(rootNodeHeight + 25) },
        data: root,
    },
]

export default nodes;