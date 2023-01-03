import { Box, Heading, HStack, LightMode, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../Home/Logo'
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaGithub, FaYoutube } from "react-icons/fa"
import "./footer.css"
const Footer = () => {
  return (
    <LightMode>
      <Box padding={4} className="footer" bg={"teal.900"} minH={"20vh"} >
      <footer id="footer">
        <div className="midFooter">
          <h1 className="rx"><Logo /></h1>
          <p>High Quality Is Our First Priority</p>
          <p>Copyrights 2021 &copy; orginonature</p>
        </div>
        <div className="rightFooter">
          <Heading fontSize={20} >Follow Us On</Heading>
          <HStack spacing={4} fontSize="20" mt={5}>
          <a href="https://www.instagram.com/orginonature/"><FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=100007532081967"><FaFacebookSquare/></a>
          <a href="https://www.instagram.com/orginonature/"><FaLinkedin/></a>
          <a href="https://www.instagram.com/orginonature/"><FaGithub/></a>
          <a href="https://www.instagram.com/orginonature/"><FaYoutube/></a>
          </HStack>
        </div>


      </footer>
    </Box>
    </LightMode>
  )
}

export default Footer