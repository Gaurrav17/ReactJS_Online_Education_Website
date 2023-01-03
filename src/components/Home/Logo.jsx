import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logoo from "../../assets/images/logo.svg"
const Logo = ({onClose}) => {
    return (
        <Link onClick={onClose} to="/">
            <HStack>
                <Image src={Logoo} objectFit="contain" />
                <Text fontFamily={"cursive"} color="teal.500" children="LffyEd." />
            </HStack>
        </Link>
    )
}

export default Logo