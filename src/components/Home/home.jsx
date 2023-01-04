import React from 'react'

import { Heading, Stack, VStack,Text,Button, Box, Image,Input, HStack, LightMode} from "@chakra-ui/react"
import "./home.css"
import { Link } from 'react-router-dom'
import {CgGoogle,CgYoutube} from "react-icons/cg";
import {DiAws} from "react-icons/di"
import vg from "../../assets/images/coursess.png"
import VerticalSlidingTextAnime from '../animation/verticalSlidingTextAnime';

const home = ({setIsHeader}) => {
    const course = [
        "DataStructure & Algorithms",
        "Operating System",
        "Full Stack Development",
        "DBMS",
        "Computer Networks",
        "Problem Solving Skils",
        "Java SpringBoot",
    ];
    setIsHeader(true);
    return (
        <section className='home'>
            <div className='container'>
                <Stack
                direction={['row']}
                justifyContent={['center']}
                alignItems="center"
                padding={"1"}
                width="100%"
                
                >
                <Input placeholder='Please Write Your Desires...' size={'lg'} border="2px" borderColor={"teal.400"} focusBorderColor={"teal.500"} width="60%" />
                <LightMode><Button size={"lg"} colorScheme="teal">Find</Button></LightMode>
                </Stack>
                <Stack
                    direction={['column', 'row']}
                    height="100%"
                    marginLeft={["0","100"]}
                    marginTop={["14","0"]}
                    justifyContent={['left', 'space-between']}
                    alignItems="center"
                    spacing={['16', '56']}
                    className="left-part"
                >
                    <VStack width={"full"} alignItems={["center","flex-start"]}>
                        <Heading className='heading' children="LEARN FROM EXPERTS" size={"2xl"} />
                        
                        <Text className='text' fontSize={"20px"} fontFamily={"monospace"} align={["left","left"]} children="Find Valueable Content At Reasonable Price"/>
                        <Link to="/courses">
                            <LightMode ><Button size={"lg"} marginTop="30" colorScheme="teal" marginRight={["14","0"]}>Explore Courses</Button></LightMode>
                        </Link>
                        <VerticalSlidingTextAnime list={course}  />
                       
                    </VStack>  

                    <Image className='vector-graphics' boxSize={'sm'} src={vg} objectFit="contain"/>                

                    
                    
                </Stack>


            </div>
           
            <Box padding={"8"} bg="blackAlpha.800">
                <Heading children="OUR BRANDS" textAlign={'center'} fontFamily="body" color={'purple.400'}/>
                <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop="4" >
                    <CgGoogle/>
                    <CgYoutube/>
                    <DiAws/>
                </HStack>
            </Box>

        </section>
    )
}

export default home