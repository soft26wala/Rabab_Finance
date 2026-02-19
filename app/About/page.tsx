'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  AspectRatio,
  Divider,
} from '@chakra-ui/react'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  const brandMaroon = "#90164D";
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <>
    <Header />
    <Box position="relative" overflow="hidden">
      {/* Background Effect */}
      
      <BackgroundGradient height="100%" zIndex="-1" />

      <Container maxW="container.xl" pt={{ base: 40, lg: 48 }} pb="20">
        {/* Section 1: Introduction & Image */}
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={12} align="center" mb={20}>
          <VStack align="start" spacing={6} flex="1">
            <Heading size="2xl" color={brandMaroon}>
              About Rabab Finance
            </Heading>
            <Text fontSize="lg" color="muted">
              Rabab Finance ek bharosemand naam hai jo aapke khwabon ko haqeeqat banane mein madad karta hai. 
              Hum car aur bike loans ke liye aasaan, tez, aur kam sood wali maliyati saholiyat faraham karte hain. 
              Hamara maqsad hai ke har shakhs apni pasand ki sawari bina kisi pareshani ke hasil kar sake.
            </Text>
            <Text fontSize="md" color="muted">
              10 saal se zyada ke tajurbe ke saath, humne hazaron logon ko unki dream car tak pohanchaya hai. 
              Hamara loan process bilkul shafaf (transparent) hai aur koi hidden charges nahi hain.
            </Text>
          </VStack>

          <Box flex="1" position="relative" borderRadius="2xl" overflow="hidden" shadow="2xl">
            {/* Image ki jagah - aap yahan apni picture laga sakte hain */}
            <Box h="400px" w="full" bg="gray.200" position="relative">
               <Image 
                 src="/image/about-finance.jpg" // Apni image ka path yahan dein
                 alt="Our Office"
                 fill
                 style={{ objectFit: 'cover' }}
               />
               {/* Agar image nahi hai toh placeholder dikhega */}
               {!true && <Flex h="full" align="center" justify="center"><Text>Office Photo Here</Text></Flex>}
            </Box>
          </Box>
        </Stack>

        <Divider mb={20} />

        {/* Section 2: Contact Info & Map */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          
          {/* Left: Contact Details */}
          <VStack align="start" spacing={8}>
            <Heading size="lg">Get in Touch</Heading>
            
            <VStack align="start" spacing={5} w="full">
              <ContactItem 
                icon={FiMapPin} 
                title="Our Location" 
                detail="loacation itha aao gi" 
              />
              <ContactItem 
                icon={FiPhone} 
                title="Phone Number" 
                detail="+91 99836 62895" 
              />
              <ContactItem 
                icon={FiMail} 
                title="Email Address" 
                detail="customercare@rababfin.com" 
              />
              <ContactItem 
                icon={FiClock} 
                title="Working Hours" 
                detail="Mon - Sat: 09:00 AM - 06:00 PM" 
              />
            </VStack>
          </VStack>

          {/* Right: Map Integration */}
          <Box borderRadius="2xl" overflow="hidden" shadow="lg" border="1px solid" borderColor="gray.200">
            <AspectRatio ratio={16 / 9} h="full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5525.680449774087!2d73.43804363931142!3d29.659057700479206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1771507246877!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </AspectRatio>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>

    <Footer />
    </>

  )
}

// Helper Component for Contact Info
const ContactItem = ({ icon, title, detail }: any) => {
  const brandMaroon = "#90164D";
  return (
    <HStack spacing={4} p={4} bg={useColorModeValue("white", "whiteAlpha.50")} borderRadius="lg" w="full" shadow="sm">
      <Icon as={icon} boxSize={6} color={brandMaroon} />
      <Box>
        <Text fontWeight="bold" fontSize="sm">{title}</Text>
        <Text color="muted" fontSize="sm">{detail}</Text>
      </Box>
    </HStack>
  )
}

import { HStack } from '@chakra-ui/react'
import { Header } from '#components/layout/header'
import { Footer } from '#components/layout/footer'

export default AboutUs