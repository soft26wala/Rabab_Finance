'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useColorMode,
  Tag,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiBox,
  FiCheck,
  FiCode,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi';
import React, { useEffect, useRef, useState } from 'react';
import { RiArrowRightLine, RiCloseLine } from "react-icons/ri"

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import testimonials from '#data/testimonials'
import Callback from '#components/Callback'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      {/* Calculator Section with Heading */}
      <Container maxW="container.xl" py="20">
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading size="2xl">EMI Calculator</Heading>
          <Text color="muted" fontSize="lg">Apne loan ki mahana qist (EMI) ka andaza lagayein.</Text>
        </VStack>
        <LoanCalculator />
      </Container>

      {/* Rates Table Section */}
      <Container maxW="container.xl" py="20">
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading size="2xl">Rates & Charges</Heading>
          <Text color="muted" fontSize="lg">Market mein sabse kam sood ki sharah aur shafaf charges.</Text>
        </VStack>
        <RatesTable />
      </Container>

      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </Box>
  )
}

// --- HERO SECTION ---
const HeroSection: React.FC = () => {
  const [iscbUpOpen, setIsCbUpOpen] = useState(false);
  const brandColor = useColorModeValue("primary.500", "primary.300");

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Rabab Finance <Br />
                <Text as="span" color={brandColor}>Your Dream, Our Fuel</Text>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Rabab Finance offers <Em>Premium Car & Bike Loans</Em> with hassle-free processing. 
                Get tailored repayment plans and quick disbursement to drive home your dream vehicle today.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} pt="8">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Get Started
                </ButtonLink>
                <Button 
                  size="lg"
                  onClick={() => setIsCbUpOpen(true)}
                  variant="outline"
                  rightIcon={<RiArrowRightLine />}
                >
                  Request Callback
                </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          
          <Box
            height="500px"
            position="relative"
            display={{ base: 'none', lg: 'block' }}
            width="50%"
          >
            <FallInPlace delay={1}>
                <Image
                  src="/image/rababfin.png"
                  width={600}
                  height={500}
                  alt="Rabab Finance Car"
                  objectFit="contain"
                  priority
                />
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      {/* CALLBACK MODAL */}
      <Modal isOpen={iscbUpOpen} onClose={() => setIsCbUpOpen(false)} isCentered size="md">
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent borderRadius="2xl" p={4}>
          <ModalCloseButton />
          <ModalBody py={10}>
            <Callback signUpOpen={(val: boolean) => setIsCbUpOpen(val)} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

// --- LOAN CALCULATOR (Dark Mode Ready) ---
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1859000);
  const [interestRate, setInterestRate] = useState(9.2);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const brandColor = "#90164D";
  const cardBg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emiCalc = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiCalc));
    setTotalInterest(Math.round(emiCalc * n - loanAmount));
  }, [loanAmount, interestRate, tenure]);

  const totalPayable = loanAmount + totalInterest;
  const interestRatio = (totalInterest / totalPayable) * 100;

  return (
    <Box p={{ base: 4, md: 10 }} bg={useColorModeValue("gray.50", "whiteAlpha.50")} borderRadius="3xl" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.700")}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
        <VStack spacing={10} align="stretch">
          <CalculatorInput label="Loan Amount" value={loanAmount} min={100000} max={10000000} onChange={setLoanAmount} symbol="₹" />
          <CalculatorInput label="Interest Rate" value={interestRate} min={7} max={18} step={0.1} onChange={setInterestRate} symbol="%" />
          <CalculatorInput label="Tenure" value={tenure} min={1} max={8} onChange={setTenure} symbol="Y" />
          
          <Flex justify="space-between" align="center" bg={cardBg} p={6} borderRadius="2xl" shadow="xl">
            <Box>
              <Text fontSize="sm" color="muted">Monthly EMI</Text>
              <Text fontSize="3xl" fontWeight="bold" color={brandColor}>₹{emi.toLocaleString()}</Text>
            </Box>
            <Button bg={brandColor} color="white" size="lg" _hover={{ opacity: 0.8 }}>Apply Now</Button>
          </Flex>
        </VStack>

        <Flex direction="column" justify="center" align="center" bg={cardBg} p={8} borderRadius="3xl" shadow="inner">
          <Box position="relative" w="240px" h="240px">
             <svg width="100%" height="100%" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={useColorModeValue("#EDF2F7", "#2D3748")} strokeWidth="4"></circle>
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={brandColor} strokeWidth="4" strokeDasharray={`${100 - interestRatio} ${interestRatio}`} strokeDashoffset="25"></circle>
             </svg>
             <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
                <Text fontSize="xs" color="muted">Total Payable</Text>
                <Text fontSize="xl" fontWeight="bold">₹{totalPayable.toLocaleString()}</Text>
             </Box>
          </Box>
          <HStack spacing={10} mt={10}>
             <VStack align="start" spacing={0}>
                <HStack><Box w={3} h={3} bg={brandColor} borderRadius="full"/><Text fontSize="xs">Principal</Text></HStack>
                <Text fontWeight="bold">₹{loanAmount.toLocaleString()}</Text>
             </VStack>
             <VStack align="start" spacing={0}>
                <HStack><Box w={3} h={3} bg="gray.400" borderRadius="full"/><Text fontSize="xs">Interest</Text></HStack>
                <Text fontWeight="bold">₹{totalInterest.toLocaleString()}</Text>
             </VStack>
          </HStack>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

const CalculatorInput = ({ label, value, min, max, step = 1, onChange, symbol }: any) => {
  return (
    <Box>
      <Flex justify="space-between" mb={4}>
        <Text fontWeight="bold">{label}</Text>
        <Tag size="lg" variant="subtle" colorScheme="gray">{symbol === "₹" ? "₹" : ""}{value}{symbol === "Y" ? " Years" : (symbol === "%" ? "%" : "")}</Tag>
      </Flex>
      <Slider value={value} min={min} max={max} step={step} onChange={onChange}>
        <SliderTrack h={2} borderRadius="full"><SliderFilledTrack bg="#90164D" /></SliderTrack>
        <SliderThumb boxSize={6} border="3px solid" borderColor="#90164D" />
      </Slider>
    </Box>
  );
};

// --- RATES TABLE (Mobile Scroll + Glass Design) ---
const RatesTable = () => {
  const brandMaroon = "#90164D";
  const glassBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.50");
  const glassBorder = useColorModeValue("gray.200", "whiteAlpha.200");

  const rows = [
    { name: "3-year MCLR", upTo36: "8.85%", over36: "-" },
    { name: "Spread Over MCLR", upTo36: "0.00% - 2.90%", over36: "-" },
    { name: "Effective ROI Range", upTo36: "8.85% - 11.75%", over36: "8.85% - 11.75%" },
    { name: "Processing Fee", upTo36: "₹3,500 - ₹12,000", over36: "₹3,500 - ₹12,000" },
    { name: "Documentation Charges", upTo36: "₹700", over36: "₹700" },
  ];

  return (
    <TableContainer 
      borderRadius="2xl" 
      border="1px solid" 
      borderColor={glassBorder} 
      backdropFilter="blur(10px)" 
      bg={glassBg}
      boxShadow="2xl"
    >
      <Table variant="simple">
        <Thead bg={brandMaroon}>
          <Tr>
            <Th color="white" py={6} whiteSpace="normal" minW="150px">Rates and Charges</Th>
            <Th color="white" py={6} whiteSpace="normal" minW="200px">Tenure Up to 36 months</Th>
            <Th color="white" py={6} whiteSpace="normal" minW="200px">Tenure over 36 months</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i} _hover={{bg: useColorModeValue("blackAlpha.50", "whiteAlpha.50")}}>
              <Td fontWeight="bold" whiteSpace="normal">{row.name}</Td>
              <Td>{row.upTo36}</Td>
              <Td>{row.over36}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

// --- ADDITIONAL SECTIONS (Keeping Template Structure) ---
const FeaturesSection = () => (
  <Features
    id="features"
    title={<Heading size="xl" textAlign="left">Why Choose Rabab Finance?</Heading>}
    description="We provide the fastest and most transparent loan processing in the industry."
    columns={[1, 2, 3]}
    features={[
      { title: 'Quick Approval', icon: FiCheck, description: 'Get your loan approved within 24 hours.', variant: 'inline' },
      { title: 'Low Interest', icon: FiTrendingUp, description: 'Competitive rates starting from 8.85%.', variant: 'inline' },
      { title: 'Zero Hidden Fees', icon: FiLock, description: 'Complete transparency in all charges.', variant: 'inline' },
    ]}
  />
)

const TestimonialsSection = () => (
  <Testimonials title="Customer Stories" columns={[1, 2, 3]}>
    {testimonials.items.map((t, i) => <Testimonial key={i} {...t} />)}
  </Testimonials>
)

const FaqSection = () => <Faq id="faq" {...faq} />

export default Home