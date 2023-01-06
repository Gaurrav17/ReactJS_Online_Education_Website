import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Heading, LightMode, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, withDefaultVariant } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CourseCard from '../courses/CourseCard'
import Thumbnail from "../../assets/images/thumbnail.png"
import "./payment.css"
const Subscribe = ({ setIsHeader }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = useState('inside')
  const [courseArr, setCourseArr] = useState([]);
  const courses = [
    { title:"DataStructure & Algorithms",lec: [1, 2, 3, 4, 5, 6, 7] },
    { title:"Operating System",lec: [8, 9, 10, 11, 12, 13, 14] },
    { title:"Full Stack Development",lec: [15, 16, 17, 18, 19, 20] },
    { title:"DBMS",lec: [21, 22, 23, 24, 25, 26, 27, 28] },
    { title:"Computer Networks",lec: [29, 30,] },
    { title:"Problem Solving Skils",lec: [31] },
    { title:"Java SpringBoot",lec: [32] },
  ];
  useEffect(()=>{
    setCourseArr(courses);
  },[courses])

  const btnRef = useRef(null)
  setIsHeader(true);
  const addToPlaylistHandler = (id) => {

  }
  return (
    <div className="ProductDetails">
      <div>
        <div className="detailsBlock-1">
          <Heading className='heading' fontSize={"2xl"} >{"Java Complete BootCamp 2023"}</Heading>
          <Text className='text' mt={2} >{"Learn java from beginer to advanced, From this course you can learn and relate with real life application."}</Text>
          <Heading fontSize={"md"} mt={4} >{"What You Will Learn !"}</Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            {courseArr?.map((e) => {
              return (

                <AccordionItem border={"none"} mt={4} >
                  <h2>
                    <AccordionButton border={"1px"} borderColor="gray.400" borderRadius={"lg"} _expanded={{ bg: 'orange.500', color: 'white' }}>
                      <Box as="span" flex='1' textAlign='left'>
                       {e?.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {e?.lec.map((item)=>{
                    return(
                      <AccordionPanel pb={4} ><LightMode><Button variant={"link"} color="teal" >Lec : {item}</Button></LightMode></AccordionPanel>
                    )
                  })}
                  
                </AccordionItem>

              )
            })}

          </Accordion>
        </div>
      </div>

      <div>
        <Box className="rBox">
          <CourseCard
            title={"Java Complete BootCamp 2023"}
            id={"id"}
            src={Thumbnail}
            creator={"Saurav Saxena"}
            lectures={2}
            views={23}
            description={"Learn java from beginer to advanced, From this course you can learn and relate with real life application."}
            addToPlaylistHandler={addToPlaylistHandler}
            type={true}

            onOpen={onOpen}

            btnRef={btnRef}
          />
        </Box>
      </div>


      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        isCentered
      >
        <ModalOverlay />
        <ModalContent justifyContent={"center"} >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            LOLA
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default Subscribe