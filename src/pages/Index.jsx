import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaPaintBrush, FaVideo } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  { name: "John Doe", text: "This course transformed my career!", rating: 5 },
  { name: "Jane Smith", text: "Highly recommend to anyone in marketing.", rating: 4 },
  { name: "Sam Wilson", text: "A game-changer for advertising professionals.", rating: 5 },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} bg="gray.800" color="white">
        <Heading size="md">AI Ad Course</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/images/hero-background.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Container maxW="container.md">
          <Heading size="2xl" mb={4}>Transform Your Advertising Skills with AI</Heading>
          <Text fontSize="xl" mb={6}>Join the World's First AI-Driven Advertising Course</Text>
          <Button size="lg" colorScheme="teal">Enroll Now</Button>
        </Container>
      </Box>

      {/* Course Highlights */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>What You'll Learn</Heading>
        <HStack spacing={10} justify="center">
          <VStack>
            <Icon as={FaVideo} boxSize={12} color="teal.500" />
            <Text fontSize="lg">AI Commercial Production</Text>
          </VStack>
          <VStack>
            <Icon as={FaPaintBrush} boxSize={12} color="teal.500" />
            <Text fontSize="lg">AI Art Direction & Curation</Text>
          </VStack>
          <VStack>
            <Icon as={FaChalkboardTeacher} boxSize={12} color="teal.500" />
            <Text fontSize="lg">AI Graphic Design & Still Ads</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Instructor Spotlight */}
      <Box as="section" py={20} bg="gray.100" textAlign="center">
        <Heading size="xl" mb={10}>Meet Your Instructors</Heading>
        <HStack spacing={10} justify="center">
          <VStack>
            <Image borderRadius="full" boxSize="150px" src="/images/david-clark.jpg" alt="David Clark" />
            <Text fontSize="lg" fontWeight="bold">David Clark</Text>
            <Text>Expert in AI Commercial Production</Text>
          </VStack>
          <VStack>
            <Image borderRadius="full" boxSize="150px" src="/images/caleb-ward.jpg" alt="Caleb Ward" />
            <Text fontSize="lg" fontWeight="bold">Caleb Ward</Text>
            <Text>Specialist in AI Art Direction</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Testimonials */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>What Our Students Say</Heading>
        <Box>
          <Text fontSize="lg" mb={4}>"{testimonials[currentTestimonial].text}"</Text>
          <Text fontWeight="bold">- {testimonials[currentTestimonial].name}</Text>
          <Button mt={4} onClick={nextTestimonial}>Next</Button>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box as="section" py={20} bg="teal.500" color="white" textAlign="center">
        <Heading size="xl" mb={4}>Ready to Elevate Your Marketing Skills?</Heading>
        <Button size="lg" colorScheme="teal" variant="outline">Join the Course</Button>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} bg="gray.800" color="white">
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <HStack spacing={8}>
              <Button variant="link" color="white">About</Button>
              <Button variant="link" color="white">Courses</Button>
              <Button variant="link" color="white">FAQ</Button>
              <Button variant="link" color="white">Contact</Button>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FaFacebook} boxSize={6} />
              <Icon as={FaTwitter} boxSize={6} />
              <Icon as={FaInstagram} boxSize={6} />
            </HStack>
            <Text>&copy; 2023 AI Ad Course. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;