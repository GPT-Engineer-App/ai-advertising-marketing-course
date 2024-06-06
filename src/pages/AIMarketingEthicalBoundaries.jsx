import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  { name: "John Doe", text: "Success story with ethical AI tools", rating: 5 },
  { name: "Jane Smith", text: "Result improvements using advanced but ethical techniques", rating: 4 },
];

const AIMarketingEthicalBoundaries = () => {
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
      <Box as="section" bgImage="url('/images/futuristic-ai.jpg')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Container maxW="container.md">
          <Heading size="2xl" mb={4}>AI Marketing: Cutting-Edge Tools and Ethical Boundaries</Heading>
          <Text fontSize="xl" mb={6}>Navigating the Thin Line Between Advantage and Ethics</Text>
          <Button size="lg" colorScheme="teal">Learn More</Button>
        </Container>
      </Box>

      {/* Introduction */}
      <Container maxW="container.lg" py={10}>
        <Heading size="lg" mb={4}>The Future of AI in Marketing</Heading>
        <Text mb={6}>
          Artificial Intelligence is revolutionizing marketing, enabling brands to innovate and connect with audiences like never before. While AI offers powerful tools to enhance marketing strategies, it's crucial to navigate its capabilities responsibly.
        </Text>

        {/* Advanced AI Marketing Tools */}
        <Heading size="lg" mb={4}>Cutting-Edge AI Marketing Tools</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
          <Box>
            <Heading size="md" mb={2}>AI-Driven Content Generators</Heading>
            <Text>Automates content creation, optimizing for SEO and engagement.</Text>
            <Text fontSize="sm" mt={2}>Example: Use cases and benefits.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>Predictive Analytics Platforms</Heading>
            <Text>Analyzes consumer behavior to forecast trends and optimize campaigns.</Text>
            <Text fontSize="sm" mt={2}>Example: Case studies and outcomes.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>Personalized Ad Generators</Heading>
            <Text>Creates highly personalized ads, increasing engagement and conversion rates.</Text>
            <Text fontSize="sm" mt={2}>Example: Success stories and tools like ChatGPT or Gemini.</Text>
          </Box>
        </SimpleGrid>

        {/* Exploring the Gray Area */}
        <Heading size="lg" mb={4}>The Gray Area of AI Marketing</Heading>
        <Text mb={4}>
          Discussing the ethical boundaries and the thin line between innovation and manipulation.
        </Text>
        <Box as="ul" pl={5} mb={10}>
          <Box as="li" mb={2}>Ad Quality vs. Ad Fraud</Box>
          <Box as="li">Personalization vs. Privacy Invasion</Box>
        </Box>

        {/* Black Hat Strategies */}
        <Heading size="lg" mb={4}>Black Hat Strategies: Risks and Rewards</Heading>
        <Text mb={4}>
          Brief overview of black hat methods and their implications.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
          <Box>
            <Heading size="md" mb={2}>Automated Lead Generators</Heading>
            <Text>Generates high-volumes of leads, often skirting terms of service.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>Advanced Spamming Tools</Heading>
            <Text>Automates email spamming, risking severe penalties and reputation damage.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={2}>Fake Engagement Generators</Heading>
            <Text>Implements false clicks, likes, and follows, which may lead to account bans and legal actions.</Text>
          </Box>
        </SimpleGrid>

        {/* CPA Greed */}
        <Heading size="lg" mb={4}>CPA Greed: Ethical Affiliate Marketing</Heading>
        <Text mb={4}>
          Overview of the CPA Greed method as an example of leveraging advanced techniques while maintaining ethics.
        </Text>
        <Box mb={10}>
          <Heading size="md" mb={2}>White Hat Techniques</Heading>
          <Text>Using legitimate advertising methods funded by previous black hat earnings to discover high-performing traffic sources.</Text>
          <Heading size="md" mt={4} mb={2}>Ethical Considerations</Heading>
          <Text>Importance of maintaining ethical standards despite the competitive edge.</Text>
        </Box>

        {/* Client Success Stories */}
        <Heading size="lg" mb={4}>Special Client Success Stories</Heading>
        <Box textAlign="center" mb={10}>
          <Text fontSize="lg" mb={4}>"{testimonials[currentTestimonial].text}"</Text>
          <Text fontWeight="bold">- {testimonials[currentTestimonial].name}</Text>
          <Button mt={4} onClick={nextTestimonial}>Next</Button>
        </Box>

        {/* Call to Action */}
        <Heading size="lg" textAlign="center" mb={4}>Ready to Innovate Ethically?</Heading>
        <Box textAlign="center" mb={10}>
          <Button size="lg" colorScheme="teal">Get Started</Button>
        </Box>
      </Container>

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

export default AIMarketingEthicalBoundaries;