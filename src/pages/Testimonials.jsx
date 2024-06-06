import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  { name: "John Doe", text: "This course transformed my career!", rating: 5 },
  { name: "Jane Smith", text: "Highly recommend to anyone in marketing.", rating: 4 },
  { name: "Sam Wilson", text: "A game-changer for advertising professionals.", rating: 5 },
];

const projects = [
  { id: 1, image: "/images/project1.jpg", title: "Project 1" },
  { id: 2, image: "/images/project2.jpg", title: "Project 2" },
  { id: 3, image: "/images/project3.jpg", title: "Project 3" },
];

const Testimonials = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} bg="gray.800" color="white">
        <Heading size="md">Testimonials</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      <Container maxW="container.lg" py={10}>
        {/* Student Success Stories */}
        <Heading size="xl" textAlign="center" mb={10}>Our Students' Success Stories</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={6} textAlign="center">
              <Text fontSize="lg" mb={4}>"{testimonial.text}"</Text>
              <Text fontWeight="bold">- {testimonial.name}</Text>
              <HStack justify="center" mt={4}>
                {Array(testimonial.rating).fill("").map((_, i) => (
                  <Icon key={i} as={FaStar} color="teal.500" />
                ))}
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Featured Work */}
        <Heading size="xl" textAlign="center" mt={20} mb={10}>Student Projects</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project) => (
            <Box key={project.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={project.image} alt={project.title} />
              <Box p={6}>
                <Heading size="md" mb={4}>{project.title}</Heading>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;