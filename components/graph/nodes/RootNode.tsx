import React, {ComponentType} from 'react';

import {Handle, NodeProps, Position} from "reactflow";

import {Card, Image, Text, VStack} from "@chakra-ui/react";

import {rootNodeHeight, rootNodeWidth} from "@/data/nodes";

import {RootNode as RootNodeType} from "@/types/RootNode";

const RootNode: ComponentType<NodeProps<RootNodeType>> = ({ data, selected }) => {
    return (
        <>
            <Handle
                type={"target"}
                position={Position.Bottom}
            />
            <Card
                borderColor={'brand.500'}
                transition={'all 0.2s ease-in-out'}
                _hover={{
                    borderColor: 'brand.500',
                    shadow: 'md'
                }}
                h={`${rootNodeHeight}px`}
                w={`${(rootNodeWidth)}px`}
                p={0}
                px={2}
                borderWidth={4}
                justifyContent={'center'}
            >
                <VStack
                    w={'100%'}
                    spacing={0}
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        boxSize={24}
                    />
                    <Text
                        fontSize={'4xl'}
                        fontWeight={'bold'}
                        color={'brand.500'}
                    >
                        {data.title}
                    </Text>
                    <Text
                        fontSize={'md'}
                        fontWeight={'semibold'}
                    >
                        {data.slogan}
                    </Text>
                    <Text
                        fontSize={'sm'}
                        color={'gray.500'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                    >
                        {data.description}
                    </Text>
                </VStack>
            </Card>
        </>
    );
};

export default RootNode;
