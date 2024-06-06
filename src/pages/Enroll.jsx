import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const courses = [
  { id: 1, title: "AI Advertising | An AI Commercial Production and Creative Marketing Course" },
  // Add more courses as needed
];

const Enroll = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} bg="gray.800" color="white">
        <Heading size="md">Enroll Now</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      <Container maxW="container.md" py={10}>
        {/* Course Selection */}
        <Heading size="lg" textAlign="center" mb={6}>Select Your Course</Heading>
        <FormControl id="course" mb={6}>
          <FormLabel>Course</FormLabel>
          <Select placeholder="Select course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>{course.title}</option>
            ))}
          </Select>
        </FormControl>

        {/* Enrollment Form */}
        <Heading size="lg" textAlign="center" mb={6}>Enrollment Details</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="address">
                <FormLabel>Address</FormLabel>
                <Input type="text" name="address" value={formData.address} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea name="message" value={formData.message} onChange={handleInputChange} />
              </FormControl>
              <Button colorScheme="teal" type="submit">Submit</Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Enroll;