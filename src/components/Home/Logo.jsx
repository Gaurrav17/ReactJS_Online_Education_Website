import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logoo from "../../assets/images/logo.svg"
const Logo = ({onClose}) => {
    return (
        <Link onClick={onClose} to="/">
            <HStack>
                <Image src={Logoo} objectFit="contain" />
                <Text fontFamily={"sans-serif"} fontWeight="bold" color="teal.500" children="Trie.com" />
            </HStack>
        </Link>
    )
}

export default Logo