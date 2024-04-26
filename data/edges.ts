import {Edge} from "reactflow";

const edgeProps: Partial<Edge> = {
    animated: true,
    style: { stroke: '#4caf50', strokeWidth: 4 },
};

const edges: Edge[] = [
    {
        id: 'e1',
        source: 'v1',
        target: 'root',
        ...edgeProps
    },
    {
        id: 'e2',
        source: 'v2',
        target: 'root',
        ...edgeProps
    },
    {
        id: 'e3',
        source: 'v3',
        target: 'root',
        animated: true,
        ...edgeProps
    },
];

export default edges;