import React, { useState } from 'react'

import { Card, CardBody, Heading, HStack, Image, Stack, Text, Button, LightMode, ButtonGroup, CardFooter } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { AiOutlineShoppingCart } from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"
const CourseCard = ({ views, title, src, id, addToPlaylistHandler, creator, description, lectures, type, onOpen, btnRef }) => {

    const options = {
        size: 30,
        value: 4.5,
        isHalf: true,
        edit: false,
        activeColor: "#FF8400",
    };

    return (
        <>
            <Card maxW='xs' className='course-card'>
                <Image
                    src={src}
                    alt='Green double couch with wooden legs'
                    borderRadius='md'
                    objectFit='contain'
                    margin={1}
                />
                <CardBody>
                    <Stack>
                        <Heading size='md' title={title} noOfLines={1}>{title}</Heading>
                        <Text id='des' noOfLines={2} fontSize="14px">{description}</Text>
                        <HStack width={"100%"} spacing={8} >
                            <Text fontSize='1.5xl'>
                                ₹450
                            </Text>
                            <HStack>
                                <ReactStars {...options} />
                                <Text fontWeight={"medium"} >{`  [${" 10 "}]`}</Text>
                            </HStack>
                        </HStack>
                    </Stack>
                    <HStack marginTop={"1"}>
                        <Heading size={"sm"} >Teacher's: </Heading>
                        <Text fontSize={"16px"}>{creator}</Text>
                    </HStack>
                    <HStack marginTop={"1"} spacing='6' >
                        <HStack >
                            <Heading size={"sm"}>Videos: </Heading>
                            <Text fontSize={"16px"}>{lectures}</Text>
                        </HStack>
                        <HStack>

                            <Text fontSize={"16px"}>{views}</Text>
                            <Heading size={"xs"} >Views</Heading>
                        </HStack>
                        <HStack>
                            <Text fontSize={"14px"}>{"6 Days Ago"}</Text>
                        </HStack>
                    </HStack>

                </CardBody>

                {type &&
                    <>
                        <CardFooter marginTop={"-6"}>
                            <ButtonGroup spacing='2'>
                                <LightMode><Button variant='solid' paddingLeft="8" paddingRight="8" colorScheme='teal'>
                                    Buy now
                                </Button></LightMode>
                                <Button variant='ghost' colorScheme='orange'>
                                    <AiOutlineShoppingCart style={{ marginRight: "4px" }} />
                                    Add To Cart
                                </Button>
                            </ButtonGroup>

                        </CardFooter>

                        <HStack mb={2}>
                        <Button variant='ghost' colorScheme='red' marginLeft={2} ref={btnRef} onClick={onOpen}>
                            <AiOutlineShoppingCart style={{ marginRight: "4px" }} />
                            Apply Coupon
                        </Button>
                        
                        <Button variant={"ghost"}  colorScheme='teal' margin={3}>
                            <RiShareForwardLine style={{ marginRight: "4px" }} />
                           Share This!
                        </Button>
                       

                        </HStack>
                    </>
                }



            </Card>
        </>
    )

};
export default CourseCard;