import { useState } from "react";
import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaPaintBrush, FaVideo } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "AI Advertising | An AI Commercial Production and Creative Marketing Course",
    description: "Learn how to leverage AI for commercial production and creative marketing.",
    image: "/images/course1.jpg",
    syllabus: "Course syllabus details...",
    instructor: "David Clark",
    pricing: "$499",
    enrollment: "Open"
  },
  // Add more courses as needed
];

const faqs = [
  { question: "What is the duration of the course?", answer: "The course lasts for 12 weeks." },
  { question: "Do I need prior experience?", answer: "No prior experience is required." },
  // Add more FAQs as needed
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" p={4} bg="gray.800" color="white">
        <Heading size="md">Our Courses</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">About</Button>
          <Button variant="link" color="white">Courses</Button>
          <Button variant="link" color="white">Testimonials</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      <Container maxW="container.lg" py={10}>
        {/* Course Offerings */}
        <Heading size="xl" textAlign="center" mb={10}>Available Courses</Heading>
        <Flex wrap="wrap" justify="center" spacing={10}>
          {courses.map((course) => (
            <Box key={course.id} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} maxW="sm">
              <Image src={course.image} alt={course.title} />
              <Box p={6}>
                <Heading size="md" mb={4}>{course.title}</Heading>
                <Text mb={4}>{course.description}</Text>
                <Button colorScheme="teal" onClick={() => handleCourseClick(course)}>Learn More</Button>
              </Box>
            </Box>
          ))}
        </Flex>

        {/* Course Details */}
        {selectedCourse && (
          <Box mt={10} p={6} borderWidth="1px" borderRadius="lg">
            <Heading size="lg" mb={4}>{selectedCourse.title}</Heading>
            <Text mb={4}><strong>Instructor:</strong> {selectedCourse.instructor}</Text>
            <Text mb={4}><strong>Syllabus:</strong> {selectedCourse.syllabus}</Text>
            <Text mb={4}><strong>Pricing:</strong> {selectedCourse.pricing}</Text>
            <Text mb={4}><strong>Enrollment:</strong> {selectedCourse.enrollment}</Text>
            <Button colorScheme="teal">Enroll Now</Button>
          </Box>
        )}

        {/* FAQ */}
        <Heading size="xl" textAlign="center" mt={20} mb={10}>Frequently Asked Questions</Heading>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default Courses;