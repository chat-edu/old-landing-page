import dagre from "dagre";

import {Edge, Node, Position} from "reactflow";
import {NodeTypes} from "@/types/NodeTypes";
import {appNodeHeight, appNodeWidth, rootNodeHeight, rootNodeWidth} from "@/data/nodes";

export const getGraphLayout = (nodes: Node[], edges: Edge[]) => {

    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    dagreGraph.setGraph({ rankdir: 'BT' });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {
            width: getNodeWidth(node.type as NodeTypes),
            height: getNodeHeight(node.type as NodeTypes)
        });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = Position.Top;
        node.sourcePosition = Position.Bottom;

        node.position = {
            x: nodeWithPosition.x - getNodeWidth(node.type as NodeTypes) / 2,
            y: nodeWithPosition.y - getNodeHeight(node.type as NodeTypes) / 2,
        };

        return node;
    });

    return {
        nodes,
        edges
    }
}

export const getNodeWidth = (nodeType: NodeTypes) => {
    return nodeType === NodeTypes.AppNode ? appNodeWidth : rootNodeWidth;
}

export const getNodeHeight = (nodeType: NodeTypes) => {
    return nodeType === NodeTypes.AppNode ? appNodeHeight : rootNodeHeight;
}