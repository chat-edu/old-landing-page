import RootNode from "@/components/graph/nodes/RootNode";
import AppNode from "@/components/graph/nodes/AppNode";

import {NodeTypes as NodeTypesEnum} from "@/types/NodeTypes";
import {NodeTypes} from "reactflow";

const nodeTypes: NodeTypes = {
    [NodeTypesEnum.RootNode]: RootNode,
    [NodeTypesEnum.AppNode]: AppNode,
}

export default nodeTypes;