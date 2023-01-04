import {Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, FormLabel, Heading, HStack,  Input, LightMode,  Text,  VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo';
import "./login.css"

const ForgotPassword = ({setIsHeader}) => {
 
    const [email, setEmail] = useState("");
    
    setIsHeader(false);
    return (
        <div className="LoginSignUpContainer" style={{ flexDirection: "column" }}>


            <Card maxW='md' className='auth-card'  >
                <CardHeader >
                <Center><Heading size={"sm"} alignItems="center" color={"orange.500"} >{"Resert Your Password."}</Heading></Center>
                    <Center><Text mt={6} >Enter your user account's verified email address and we will send you a password reset link.</Text></Center>
                </CardHeader>
                <CardBody>
                    <Container>
                        <form>


                            <FormLabel htmlFor='email'>Email Address</FormLabel>
                            <Input
                                required
                                id='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="example@gmail.com"
                                type={'text'}
                                focusBorderColor="teal.500"
                                border="2px"
                                borderColor={"teal.400"}

                            />

                            <LightMode> <Button width={"full"} my={4} colorScheme={"teal"} type="submit" >Send Password Reset Link</Button></LightMode>


                        </form>
                    </Container>

                </CardBody>


                <CardFooter >

                    <Container mt={-10} >
                        <Box>
                            New To Trie? <LightMode>
                                <Link to={"/register"} >
                                <Button variant={"link"} color={"orange.500"} >
                                    Regiter Here.
                                </Button>{" "}
                                </Link>

                            </LightMode>
                        </Box>
                    </Container>
                </CardFooter>
            </Card>
            <HStack spacing={2} marginTop={"10"} >
                <LightMode><Button variant={"link"} colorScheme="teal" >Privacy & Security</Button></LightMode>
                <LightMode><Button variant={"link"} colorScheme="teal" >Terms</Button></LightMode>
                <LightMode><Button variant={"link"} colorScheme="orange" >Contact Trie</Button></LightMode>
            </HStack>
            <VStack marginTop={10} >
                <Logo />
            </VStack>
        </div >


    )
  
}

export default ForgotPassword