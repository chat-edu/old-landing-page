import React from 'react';

import {Box} from "@chakra-ui/react";

import {Background, Controls, ReactFlow} from "reactflow";

import nodeTypes from "@/components/graph/nodes/nodeTypes";
import nodes from "@/data/nodes";
import edges from "@/data/edges";

import 'reactflow/dist/style.css';
import {getGraphLayout} from "@/services/layout";

const layout = getGraphLayout(nodes, edges);

const Graph = () => {

    return (
        <Box
            h={'100vh'}
            w={'100vw'}
        >
            <ReactFlow
                nodes={layout.nodes}
                edges={layout.edges}
                fitView
                nodeTypes={nodeTypes}
                zoomOnPinch={false}
                zoomOnScroll={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={false}
            />
        </Box>
    );
};

export default Graph;
