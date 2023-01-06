import { Button,   Container, Heading, HStack,  Input, LightMode,  Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import Thumbnail from "../../assets/images/thumbnail.png"
import CourseCard from './CourseCard';
const Courses = ({ setIsHeader }) => {
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
                <Link to={`/course/subscription/${1234567890}`} >
                    <CourseCard
                        title={"Java Complete BootCamp 2023"}
                        id={"id"}
                        src={Thumbnail}
                        creator={"Saurav Saxena"}
                        lectures={2}
                        views={23}
                        description={"Learn java from beginer to advanced, From this course you can learn and relate with real life application."}
                        type={false}
                    />
                </Link>

            </Stack>
        </Container>
    )
}

export default Courses