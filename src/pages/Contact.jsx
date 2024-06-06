import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, HStack, Icon, Input, Textarea, VStack, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} bg="gray.800" color="white">
        <Heading size="md">Contact Us</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      <Container maxW="container.md" py={10}>
        {/* Contact Form */}
        <Heading size="lg" textAlign="center" mb={6}>Get in Touch</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={6} mb={10}>
          <VStack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button colorScheme="teal">Submit</Button>
          </VStack>
        </Box>

        {/* Contact Information */}
        <Heading size="lg" textAlign="center" mb={6}>Our Contact Information</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={6} mb={10}>
          <Text mb={4}><strong>Address:</strong> 123 AI Street, Tech City, TX 12345</Text>
          <Text mb={4}><strong>Phone:</strong> (123) 456-7890</Text>
          <Text mb={4}><strong>Email:</strong> contact@aiadcourse.com</Text>
          <Box mt={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f3f8d1e1!2s123%20AI%20Street%2C%20Tech%20City%2C%20TX%2012345!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>

        {/* Social Media Links */}
        <Heading size="lg" textAlign="center" mb={6}>Connect with Us</Heading>
        <HStack justify="center" spacing={8}>
          <Icon as={FaFacebook} boxSize={8} />
          <Icon as={FaTwitter} boxSize={8} />
          <Icon as={FaInstagram} boxSize={8} />
        </HStack>
      </Container>
    </Box>
  );
};

export default Contact;