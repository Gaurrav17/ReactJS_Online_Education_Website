import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, FormLabel, Heading, HStack, Input, LightMode, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Logo from '../Home/Logo';
import "./login.css"

const ResetPassword = ({ setIsHeader }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const params = useParams();
    console.log(params.token);

    setIsHeader(false);
    return (
        <div className="LoginSignUpContainer" style={{ flexDirection: "column" }}>


            <Card maxW='md' className='auth-card' mt={20}  >
                <CardHeader >
                    <Center><Heading size={"sm"} alignItems="center" color={"orange.500"} >{"Resert Your Password."}</Heading></Center>
                </CardHeader>
                <CardBody>
                    <Container>
                        <form>


                            <FormLabel htmlFor='email'>Old Password</FormLabel>
                            <Input
                                required
                                id='password'
                                value={oldPassword}
                                onChange={e => setOldPassword(e.target.value)}
                                placeholder="Password"
                                type={"password"}
                                focusBorderColor="teal.500"

                                border="2px"
                                borderColor={"teal.400"}
                            />

                            <FormLabel mt={2} htmlFor='email'>New Password</FormLabel>
                            <Input
                                required
                                id='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                type={"password"}
                                focusBorderColor="teal.500"

                                border="2px"
                                borderColor={"teal.400"}
                            />

                            <FormLabel mt={2} htmlFor='email'>Confirm Password</FormLabel>
                            <Input
                                required
                                id='password'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Password"
                                type={"password"}
                                focusBorderColor="teal.500"

                                border="2px"
                                borderColor={"teal.400"}
                            />

                            <LightMode> <Button width={"full"} my={4} colorScheme={"teal"} type="submit" >Confirm</Button></LightMode>


                        </form>
                    </Container>

                </CardBody>


                <CardFooter >

                   
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

export default ResetPassword