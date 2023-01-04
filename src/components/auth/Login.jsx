import { Box, Button, Card, CardBody, Container, FormLabel, Heading, HStack, Input, LightMode, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo';

const Login = ({ setIsHeader }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    setIsHeader(false);
    return (
        <Stack height={"100vh"} justifyContent="center" width={"full"} alignItems="center" >
            <Container className='auth-container' >
                <Card justifyContent="center" alignItems={"center"} className='course-card'>
                    <CardBody margin={10} alignItems="center" padding={10}>


                        
                        <form className='auth-form'>
                        <Heading size="sm" color="teal.500" >{"Nice! To Have You Again."}</Heading>
                            <Box my={4} >
                                <FormLabel htmlFor='email'>Email Address</FormLabel>
                                <Input
                                    required
                                    id='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="example@gmail.com"
                                    type={'email'}
                                    focusBorderColor="teal.500"
                                    size={'lg'} border="2px"
                                    borderColor={"teal.400"}

                                />
                            </Box>

                            <Box my={4}>
                                <FormLabel htmlFor='email'>Password</FormLabel>
                                <Input
                                    required
                                    id='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Password"
                                    type={"password"}
                                    focusBorderColor="teal.500"
                                    size={'lg'} border="2px"
                                    borderColor={"teal.400"}
                                />
                            </Box>
                            <Box>
                                <LightMode><Link to="/forgotpassword"><Button variant={"link"} fontSize="sm" colorScheme={"teal"} >Forgot Password ?</Button></Link></LightMode>
                            </Box>
                            <LightMode> <Button my={4} width={"40vh"} colorScheme={"teal"} type="submit" >Sign In</Button></LightMode>

                            <Box>
                                New To Trie? <LightMode>
                                    <Button variant={"link"} colorScheme="teal" >
                                        Regiter Here.
                                    </Button>{" "}

                                </LightMode>
                            </Box>
                        </form>


                    </CardBody>
                </Card>

            </Container>
            <Container justifyContent={"center"} alignItems="center" width={"100"}>
                <HStack spacing={2}>
                    <LightMode><Button variant={"link"} colorScheme="teal" >Privacy & Security</Button></LightMode>
                    <LightMode><Button variant={"link"} colorScheme="teal" >Terms</Button></LightMode>
                    <LightMode><Button variant={"link"} colorScheme="orange" >Contact Trie</Button></LightMode>
                </HStack>

            </Container>
            <Logo />
        </Stack>
    )
}

export default Login