import {Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, FormLabel, Heading, HStack,  Input, LightMode,  VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo';
import "./login.css"
const Login = ({ setIsHeader }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    setIsHeader(false);
    return (
        <div className="LoginSignUpContainer" style={{ flexDirection: "column" }}>


            <Card maxW='md' className='auth-card'  >
                <CardHeader >
                    <Center><Heading size={"sm"} alignItems="center" color={"orange.500"} >{"Nice! To Have You Again."}</Heading></Center>
                </CardHeader>
                <CardBody>
                    <Container>
                        <form>


                            <FormLabel htmlFor='email'>Username Or Email Address</FormLabel>
                            <Input
                                required
                                id='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="saurav__s7 or example@gmail.com"
                                type={'text'}
                                focusBorderColor="teal.500"
                                border="1px"
                                borderColor={"gray.400"}


                            />


                            <FormLabel mt={6} htmlFor='email'>Password</FormLabel>
                            <Input
                                required
                                id='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                type={"password"}
                                focusBorderColor="teal.500"

                                border="1px"
                                borderColor={"gray.400"}

                            />
                            <LightMode>
                                <Link to="/forgot/password">
                                    <Button mt={4} variant={"link"} fontSize="sm" colorScheme={"teal"} >Forgot Password ?</Button>
                                </Link>
                            </LightMode>


                            <LightMode> <Button width={"full"} my={4} colorScheme={"teal"} type="submit" >Sign In</Button></LightMode>


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
            <HStack spacing={2} marginTop={"5"} >
                <LightMode><Button variant={"link"} colorScheme="teal" >Privacy & Security</Button></LightMode>
                <LightMode><Button variant={"link"} colorScheme="teal" >Terms</Button></LightMode>
                <LightMode><Button variant={"link"} colorScheme="orange" >Contact Trie</Button></LightMode>
            </HStack>
            <VStack marginTop={5} >
                <Logo />
            </VStack>
        </div >


    )
}

export default Login