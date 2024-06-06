import { Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  { name: "John Doe", text: "This course transformed my career!", rating: 5 },
  { name: "Jane Smith", text: "Highly recommend to anyone in marketing.", rating: 4 },
  { name: "Sam Wilson", text: "A game-changer for advertising professionals.", rating: 5 },
];

const projects = [
  { src: "/images/project1.jpg", alt: "Project 1" },
  { src: "/images/project2.jpg", alt: "Project 2" },
  { src: "/images/project3.jpg", alt: "Project 3" },
];

const Testimonials = () => {
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

      {/* Page Title */}
      <Box as="section" textAlign="center" py={10} bg="gray.100">
        <Heading size="2xl">Testimonials</Heading>
      </Box>

      {/* Student Success Stories */}
      <Box as="section" py={20} textAlign="center">
        <Heading size="xl" mb={10}>Our Students' Success Stories</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Text fontSize="lg" mb={4}>"{testimonial.text}"</Text>
              <Text fontWeight="bold">- {testimonial.name}</Text>
              <HStack justify="center" mt={4}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon key={i} as={FaStar} color="teal.500" />
                ))}
              </HStack>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Featured Work */}
      <Box as="section" py={20} textAlign="center" bg="gray.100">
        <Heading size="xl" mb={10}>Student Projects</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10}>
          {projects.map((project, index) => (
            <Image key={index} src={project.src} alt={project.alt} borderRadius="md" />
          ))}
        </Grid>
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

export default Testimonials;