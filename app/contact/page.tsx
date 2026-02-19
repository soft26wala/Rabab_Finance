'use client'
import {
  Container,
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { Footer } from '#components/layout/footer'
import { Header } from '#components/layout/header'

export default function ContactUs() {
  return (
    <>
    <Header />
    <Container maxW="container.lg" py={{ base: 20, md: 28 }}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={10} align="flex-start">
        
        {/* Left Side: Contact Info */}
        <VStack flex={1} spacing={8} align="flex-start">
          <Heading as="h1" size="2xl">Get in Touch</Heading>
          <Text color="gray.500" fontSize="lg">
            Humein khushi hogi aapki car ya bike loan mein madad karke. 
            Niche diye gaye details par humse sampark karein.
          </Text>

          <VStack spacing={4} align="flex-start" w="full">
            <ContactInfoCard 
              icon={<MdPhone color="#24ac3a" size="20px" />}
              title="Phone Number"
              detail="+91 99836 62895"
            />
            <ContactInfoCard 
              icon={<MdEmail color="#8952e0" size="20px" />}
              title="Email Address"
              detail="customercare@rababfin.com"
            />
            <ContactInfoCard 
              icon={<MdLocationOn color="#24ac3a" size="20px" />}
              title="Our Location"
              detail="Gajsinghpur, Rajasthan, India"
            />
          </VStack>
        </VStack>

        {/* Right Side: Contact Form */}
        <Box
          flex={1}
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="lg"
          p={8}
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          shadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <VStack spacing={5}>
            <FormControl id="name">
              <FormLabel>Aapka Naam</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input type="text" placeholder="Full Name" />
              </InputGroup>
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input type="email" placeholder="Email Address" />
              </InputGroup>
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Aapki query yahan likhein..."
                rows={5}
                resize="none"
              />
            </FormControl>

            <Button
              colorScheme="whatsapp"
              bg="#24ac3a"
              color="white"
              _hover={{ bg: '#1e8e30' }}
              w="full"
              size="lg"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Container>
    <Footer />
    </>

  )
}

// Helper Component for Info Cards
function ContactInfoCard({ icon, title, detail }: any) {
  return (
    <HStack
      p={4}
      spacing={4}
      bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
      borderRadius="md"
      w="full"
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      {icon}
      <Box>
        <Text fontWeight="bold" fontSize="sm">{title}</Text>
        <Text fontSize="md">{detail}</Text>
      </Box>
    </HStack>
  )
}