import React, {ComponentType} from 'react';

import {Handle, NodeProps, Position} from "reactflow";

import {Card, Image, Text, VStack} from "@chakra-ui/react";

import {appNodeHeight, appNodeWidth} from "@/data/nodes";

import {App} from "@/types/App";
import Link from "next/link";

const AppNode: ComponentType<NodeProps<App>> = ({ data, selected }) => {
    return (
        <>
            <Handle
                type={"source"}
                position={Position.Top}
            />
            <Link
                href={data.href}
                passHref
                target={'_blank'}
            >
                <Card
                    borderColor={'brand.500'}
                    transition={'all 0.2s ease-in-out'}
                    _hover={{
                        borderColor: 'brand.500',
                        shadow: 'md'
                    }}
                    borderWidth={4}
                    h={`${appNodeHeight}px`}
                    w={`${appNodeWidth}px`}
                    p={0}
                    px={2}
                    justifyContent={'center'}
                >
                    <VStack
                        w={'100%'}
                        spacing={0}
                    >
                        <Image
                            src={data.image}
                            alt={data.name}
                            boxSize={16}
                            mb={2}
                        />
                        <Text
                            fontSize={'2xl'}
                            fontWeight={'bold'}
                            color={'brand.500'}
                        >
                            {data.name}
                        </Text>
                        <Text
                            fontSize={'md'}
                            color={'black'}
                            fontWeight={'bold'}
                        >
                            {data.focus}
                        </Text>
                        <Text
                            fontSize={'xs'}
                            color={'gray.500'}
                            textAlign={'center'}
                            fontWeight={'semibold'}
                        >
                            {data.slogan}
                        </Text>
                    </VStack>
                </Card>
            </Link>
        </>
    );
};

export default AppNode;
