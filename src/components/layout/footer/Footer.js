import { Box, Heading, HStack, LightMode} from '@chakra-ui/react'
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
          <Logo />
          <p>High Quality Is Our First Priority</p>
          <p>Copyrights 2021 &copy; orginonature</p>
        </div>
        <div className="rightFooter">
          <Heading fontSize={20} >Follow Us On</Heading>
          <HStack spacing={4} fontSize="20" mt={5}>
          
          <a href="https://www.linkedin.com/in/gaurav-srivastava-4855871bb/" target={"blank"}><FaLinkedin/></a>
          
          </HStack>
        </div>


      </footer>
    </Box>
    </LightMode>
  )
}

export default Footer