import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, LightMode, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { RiDashboardFill, RiLoginBoxLine, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { GiRamProfile } from "react-icons/gi"
import { Link } from 'react-router-dom'
import { SiTheregister } from "react-icons/si"
import { FaUserSecret } from "react-icons/fa"
import Logo from '../../Home/Logo'

const LinkButton = ({ url = "/", title = "HOME", onClose }) => {
    return (
        <Link onClick={onClose} to={url}><Button variant={"ghost"}  >{title}</Button></Link>
    )
}
const Header = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const isAuthenticated = true;
    return (
        <>
            <ColorModeSwitcher />

            <LightMode>
                <Button
                    colorScheme={'teal'}
                    width="12"
                    height="12"
                    rounded={"base"}
                    position={"fixed"}
                    top="8"
                    left={"8"}
                    onClick={onOpen}
                >
                    <RiMenu5Fill />
                </Button>
            </LightMode>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(0.2px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>
                       <Logo onClose={onClose} />
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={"3"} alignItems="flex-start">
                            <LinkButton onClose={onClose} url='/' title='Home' />
                            <LinkButton onClose={onClose} url='/courses' title='Brouse Courses' />
                            <LinkButton onClose={onClose} url='/request' title='Request A Courses' />
                            <LinkButton onClose={onClose} url='/Contact' title='Contact' />
                            <LinkButton onClose={onClose} url='/About' title='About' />
                            <Link to={"/Admin/porfolio/saurav-saxena"} onClick={onClose} ><Button colorScheme={"messenger"} variant={"ghost"}><FaUserSecret style={{ marginRight: "6px" }} /> Admin Porfolio</Button></Link>
                            <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">

                                {isAuthenticated ?
                                    (
                                        <>
                                            <VStack>
                                                <HStack>
                                                    <Link onClick={onClose} to={"/profile"}><Button colorScheme={"teal"} variant={"ghost"}><GiRamProfile style={{ marginRight: "6px" }} /> Your Porfolio</Button></Link>
                                                    <Button colorScheme={"red"} variant={"ghost"}>
                                                        <RiLogoutBoxLine style={{ marginRight: "4px" }} />
                                                        Logout
                                                    </Button>
                                                </HStack>

                                                <Link onClick={onClose} to={"admin/dashboard"}>
                                                    <Button colorScheme={"whatsapp"} variant={"ghost"}><RiDashboardFill style={{ margin: "4px" }} /> DashBoard</Button>
                                                </Link>
                                            </VStack>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <Link onClick={onClose} ><Button colorScheme={"teal"} variant={"ghost"}><RiLoginBoxLine style={{ marginRight: "4px" }} /> Login</Button></Link>
                                            <p>OR</p>
                                            <Link onClick={onClose} ><Button colorScheme={"teal"} variant={"ghost"}><SiTheregister style={{ marginRight: "4px" }} />Register</Button></Link>
                                        </>
                                    )}

                            </HStack>

                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header