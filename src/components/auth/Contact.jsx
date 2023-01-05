import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Container, FormLabel, Heading, HStack, Input, LightMode, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PhoneNumberInput from '../phoneNumberInput/PhoneNumberInput';
import Logo from '../Home/Logo';
import "./login.css"
import { COUNTRIES } from "../phoneNumberInput/countries";
const Contact = ({ setIsHeader }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const countryOptions = COUNTRIES.map(({ name, iso }) => ({
        label: name,
        value: iso
    }));
    const [value, setValue] = useState("");




    setIsHeader(true);
    return (
        <div className="LoginSignUpContainer" style={{ flexDirection: "column" }}>
            <Card maxW='lg' className='auth-card' paddingLeft={10} paddingRight={10}  >
                <CardHeader >
                    <Center style={{ flexDirection: "column" }} >
                        <Heading mt={4} fontSize="sm" color="orange.500" >Contact Trie</Heading>
                    </Center>
                </CardHeader>
                <CardBody marginTop={-10} >
                    <Container>
                        <form>




                            <FormLabel mt={2} htmlFor='name'>Name</FormLabel>
                            <Input
                                required
                                id='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                            <FormLabel mt={2} htmlFor='text'>Phone Number</FormLabel>
                            <PhoneNumberInput
                                value={value}
                                options={countryOptions}
                                placeholder="Enter phone number"
                                onChange={value => setValue(value)}
                            />

                            <FormLabel mt={2} htmlFor='text'>Message</FormLabel>
                            <Textarea
                                placeholder='Here is a sample placeholder'
                                focusBorderColor="teal.500"
                                border="1px"
                                borderColor={"gray.400"}


                            />



                            <LightMode> <Button width={"full"} my={4} colorScheme={"teal"} type="submit" >Contact Trie</Button></LightMode>


                        </form>
                    </Container>

                </CardBody>

            </Card>


        </div >

    )
}

export default Contact