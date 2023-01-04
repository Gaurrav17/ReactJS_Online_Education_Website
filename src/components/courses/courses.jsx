import { Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, HStack, Image, Input, LightMode, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Courses = ({setIsHeader}) => {
    const [keyWord, setKeyWord] = useState("");
    const [category, setCategory] = useState("")
    const courses = [
        "DataStructure & Algorithms",
        "Operating System",
        "Full Stack Development",
        "DBMS",
        "Computer Networks",
        "Problem Solving Skils",
        "Java SpringBoot",
    ];
    setIsHeader(true)
    const addToPlaylistHandler = (id) => {

    }

    const Course = ({ views, title, src, id, addToPlaylistHandler, creator, description, lectures }) => {

        return (
            <Card maxW='xs' className='course-card'>
                <CardBody>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='2'>
                        <Heading size='md' noOfLines={1}>{title}</Heading>
                        <Text noOfLines={2} fontSize="14px">{description}</Text>
                        <Text  color='teal.500' fontSize='2xl'>
                        ₹450
                        </Text>
                    </Stack>
                    <HStack marginTop={"1"}>
                        <Heading size={"sm"} color="teal.500">Teacher's: </Heading>
                        <Text fontSize={"16px"}>{creator}</Text>
                    </HStack>
                    <HStack marginTop={"1"}  spacing='6' >
                    <HStack >
                        <Heading size={"sm"} color="teal.500">Videos: </Heading>
                        <Text fontSize={"16px"}>{lectures}</Text>
                    </HStack>
                    <HStack>
                        <Heading size={"sm"} color="teal.500">Views: </Heading>
                        <Text fontSize={"16px"}>{views}</Text>
                    </HStack>
                    <HStack>
                        <Text fontSize={"14px"}>{"6 Days Ago"}</Text>
                    </HStack>
                    </HStack>
                   
                </CardBody>
               
                <CardFooter marginTop={"-6"}>
                    <ButtonGroup spacing='2'>
                        <LightMode><Button variant='solid' colorScheme='teal'>
                            Watch now
                        </Button></LightMode>
                        <Button variant='ghost' colorScheme='teal'>
                            Add To PlayList
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        )

    }

    return (
        <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
            <Heading children="Your Desirable Camp Is Here !!! " marginTop={"10"} />
            <Stack
                direction={['row']}
                justifyContent={['center']}
                alignItems="center"
                padding={"1"}
                width="100%"
                marginTop={"10"}

            >
                <Input placeholder='Please Write Your Desires...' size={'lg'} border="2px" borderColor={"teal.400"} focusBorderColor={"teal.400"} onChange={e => setKeyWord} />
                <LightMode><Button size={"lg"} colorScheme="teal">Find</Button></LightMode>
            </Stack>

            <HStack overflowX={"auto"} paddingY="8" css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                }

            }}>
                {courses?.map((e, index) => {
                    return (
                        <Button onClick={() => setCategory(e)} minW={'60'} key={index} border="2px" borderColor={"cyan.700"} ><Text children={e} /></Button>
                    )
                })}
            </HStack>

            <Stack
                flexWrap={"wrap"}
                direction={["column", "row"]}
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}
            >
                <Course
                    title={"sample"}
                    id={"id"}
                    src={"https://picsum.photos/200"}
                    creator={"sample"}
                    lectures={2}
                    views={23}
                    description={"lola ! How Are You? ya ya fine and what about you? ya i know you are gonna pay"}
                    addToPlaylistHandler={addToPlaylistHandler}
                />

            </Stack>

        </Container>
    )
}

export default Courses