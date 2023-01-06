import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, FormLabel,  HStack, Input, LightMode, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo';
import "./login.css"

const Register = ({ setIsHeader }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imagePrev,setImagePrev]=useState('https://bit.ly/sage-adebayo');
    const [image,setImage]=useState();

    setIsHeader(false);

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend= ()=>{
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    return (
        <div className="LoginSignUpContainer" style={{ flexDirection: "column" }}>



            <Card maxW='lg' className='auth-card' paddingLeft={10} paddingRight={10}  >
                <CardHeader >
                    <Center style={{ flexDirection: "column" }} >
                        <Logo/>
                        <Text mt={4} color="orange.500" >Let's Begin Your Journey With Us.</Text>
                    </Center>

                </CardHeader>
                <CardBody marginTop={-10} >
                    <Container>
                        <form>

                            <FormLabel htmlFor='text'>Username</FormLabel>
                            <Input
                                required
                                id='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="saurav__s7"
                                type={'text'}
                                focusBorderColor="teal.500"
                                border="1px"
                                borderColor={"gray.400"}


                            />





                            <FormLabel mt={2} htmlFor='email'>Name</FormLabel>
                            <Input
                                required
                                id='name'
                                value={""}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Saurav Saxena"
                                type={'text'}
                                focusBorderColor="teal.500"
                                border="1px"
                                borderColor={"gray.400"}


                            />


                            <FormLabel mt={2} htmlFor='text'>Email Address</FormLabel>
                            <Input
                                required
                                id='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="exp@gmail.com"
                                type={'email'}
                                focusBorderColor="teal.500"
                                border="1px"
                                borderColor={"gray.400"}


                            />


                            <FormLabel mt={2} htmlFor='email'>Password</FormLabel>
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

                            <HStack spacing={4} mt="2" >
                                <Avatar  name='Segun Adebayo' src={imagePrev} />
                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    className='file-input'
                                    onChange={changeImageHandler}
                                    border="1px"
                                    borderColor={"gray.400"}
    
                                />

                            </HStack>



                            <LightMode> <Button width={"full"} my={4} colorScheme={"teal"} type="submit" >Sign Up</Button></LightMode>


                        </form>
                    </Container>

                </CardBody>


                <CardFooter >

                    <Container mt={-10} >
                        <Box>
                            Alredy Associated To Trie ? <LightMode>
                                <Link to={"/signin"}>
                                    <Button variant={"link"} color={"orange.500"} >
                                        Sign In Here.
                                    </Button>{" "}

                                </Link>
                            </LightMode>
                        </Box>
                        <Center>
                            <HStack spacing={2} marginTop={5}>
                                <LightMode><Button variant={"link"} colorScheme="teal" >Privacy & Security</Button></LightMode>
                                <LightMode><Button variant={"link"} colorScheme="teal" >Terms</Button></LightMode>
                                <LightMode><Link to={"/Contact"}><Button variant={"link"} colorScheme="orange" >Contact Trie</Button> </Link></LightMode>
                            </HStack>
                        </Center>
                    </Container>
                </CardFooter>

            </Card>


        </div >

    )
}

export default Register