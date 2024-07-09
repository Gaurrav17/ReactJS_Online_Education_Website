import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Input, LightMode, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, withDefaultVariant } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CourseCard from '../courses/CourseCard'
import Thumbnail from "../../assets/images/thumbnail2.png"
import "./payment.css"
import { FiStar } from "react-icons/fi"
import { FaLanguage } from "react-icons/fa"

const Subscribe = ({ setIsHeader }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = useState('inside')
  const [courseArr, setCourseArr] = useState([]);
  const [coupen, setCoupen] = useState("");
  const [isError, setIsError] = useState(false);

  const courses = [
    { title: "DataStructure & Algorithms", lec: [1, 2, 3, 4, 5, 6, 7] },
    { title: "Operating System", lec: [8, 9, 10, 11, 12, 13, 14] },
    { title: "Full Stack Development", lec: [15, 16, 17, 18, 19, 20] },
    { title: "DBMS", lec: [21, 22, 23, 24, 25, 26, 27, 28] },
    { title: "Computer Networks", lec: [29, 30,] },
    { title: "Problem Solving Skils", lec: [31] },
    { title: "Java SpringBoot", lec: [32] },
  ];
  useEffect(() => {
    setCourseArr(courses);
  }, [courses])

  const btnRef = useRef(null)
  setIsHeader(true);
  const options = {
    size: 30,
    value: 4.5,
    isHalf: true,
    edit: false,
    activeColor: "#FF8400",
  };
  const addToPlaylistHandler = (id) => {

  }
  const applyCouponSubmitHandler = (e) => {
    e.preventDefault();
    if (coupen === '') {
      setIsError(true);
    }
  }
  return (
    <div className="ProductDetails">
      <div>
        <div className="detailsBlock-1">

          <Heading className='heading' fontSize={"2xl"} >{"Java Complete BootCamp 2023"}</Heading>
          <Text className='text' mt={2} >{"Learn java from beginer to advanced, From this course you can learn and relate with real life application."}</Text>
          <HStack width={"100%"} spacing={6} mt={2} className="lola" >
            <HStack spacing={2}>
              <Text>{"100"}</Text>
              <Text fontWeight={"medium"} color="orange.500" >Enrolls</Text>
            </HStack>
            <HStack spacing={2}>
              <FiStar />
              <Text>{"09/2022"}</Text>
              <Text fontWeight={"medium"} color="orange.500" >Last Updated</Text>
            </HStack>
            <HStack spacing={2}>
              <FaLanguage style={{ fontSize: "30px" }} />
              <Text fontWeight={"medium"} color="orange.500" >{"English"}</Text>
            </HStack>
          </HStack>
          <Heading fontSize={"md"} mt={4} >{"What You Will Learn !"}</Heading>
          <Accordion allowMultiple>
            {courseArr?.map((e) => {
              return (
                <AccordionItem border={"none"} mt={4} >
                  <h2>
                    <AccordionButton border={"1px"} borderColor="teal" borderRadius={"lg"} _expanded={{ bg: 'teal.500', color: 'white' }}>
                      <Box as="span" flex='1' textAlign='left'>
                        {e?.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  {e?.lec.map((item) => {
                    return (
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
          <ModalHeader>Apply Coupon !</ModalHeader>
          <ModalBody>
            <form id='myForm' onSubmit={applyCouponSubmitHandler}>
              <FormControl isInvalid={isError}>
                <Input type='text' value={coupen} placeholder="Enter the copon code..."
                  focusBorderColor="teal.500"
                  border="1px"
                  borderColor={"gray.400"} onChange={e => setCoupen(e.target.value)} />
                {!isError ? (
                  <FormHelperText> 
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Give us some coupon code...</FormErrorMessage>
                )}
              </FormControl>

            </form>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              <LightMode><Button colorScheme={"teal"} onClick={applyCouponSubmitHandler}>Apply</Button></LightMode>
              <LightMode><Button colorScheme={"red"}
                onClick={() => {
                  setIsError(false);
                  setCoupen("")
                  onClose();
                }}>Close</Button></LightMode>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default Subscribe