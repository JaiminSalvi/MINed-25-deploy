import React, { useState } from "react";
import { Box, Heading, Text, VStack, Flex, chakra } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";
import Slider from "react-slick";


const hackathonData = {
    "2021": [
      {
        prize: "First ($500)",
        teamName: "Team TechiesGrid",
        university: "Nirma University",
        members: [
          "Yash Thakkar", 
          "Purvansh Shah", 
          "Omkar Agnihotri", 
          "Devansh Suthar", 
          "Chand Vachhani"
        ]
      },
      {
        prize: "Second ($300)",
        teamName: "Team BotRead",
        university: "Ahmedabad Institute of Technology and Ganpat University",
        members: [
          "Kunal Malvi", 
          "Viswash Mehta", 
          "Abhishek Bhatt", 
          "Sunny Kushwaha", 
          "Anil Prajapati"
        ]
      },
      {
        prize: "Third ($200)",
        teamName: "Team RTE",
        university: "Nirma University",
        members: [
          "Savan Patel", 
          "Yash Shah", 
          "Vaibhav Sorathiya", 
          "Deep Menpara"
        ]
      }
    ],
    "2022": [
      {
        prize: "First ($500)",
        teamName: "Tensor Fellows",
        university: "CSE Department, Institute of Technology, Nirma University",
        members: [
          "Manan Davawala", 
          "Harsh Bhatt", 
          "Aayush Gohil", 
          "Jaynil Vaidya", 
          "Harsh Mankodiya"
        ]
      },
      {
        prize: "Second ($300)",
        teamName: "BruteForceforGlory",
        university: "CSE Department, Institute of Technology, Nirma University",
        members: [
          "Neel Shah", 
          "Param Shah", 
          "Smit Shah Jigneshkumar", 
          "Smit Shah Kiran", 
          "Harshwardhan Yadav"
        ]
      },
      {
        prize: "Third ($200)",
        teamName: "Ctl-Alt-Elite",
        university: "Indus University, Ahmedabad",
        members: [
          "Yashas H Majmudar", 
          "Saumya Ramolia", 
          "Khushi Manek", 
          "Ritika Dhall", 
          "Prof Sejal Thakkar (Mentor)"
        ]
      }
    ],
    "2023": [
      {
        prize: "First ($500)",
        teamName: "Team Wingineers",
        university: "Banasthali Vidyapith, Rajasthan",
        members: [
          "Drishti Chauhan", 
          "Ishita Singh Rathore", 
          "Gunjan Chaudhary"
        ]
      },
      {
        prize: "Second ($300)",
        teamName: "Team CypherNerds",
        university: "Nirma University",
        members: [
          "Aryan Pandi", 
          "Dhara Raval", 
          "Inzelabanu Mirza", 
          "Maitri Patel", 
          "Malav Gajera"
        ]
      },
      {
        prize: "Third ($200)",
        teamName: "Team Griffindor",
        university: "Symbiosis Institute of Technology, Pune, Maharashtra",
        members: [
          "Sandeep Vishwakarma", 
          "Sai Bhatkar", 
          "Darshan Rajpurohit", 
          "Satyam Palkar"
        ]
      }
    ],
    "2024": [
      {
        prize: "First ($500)",
        teamName: "Team The Pandavaas",
        university: "Nirma University",
        members: [
          "Dev Patel", 
          "Shukan Panchal", 
          "Helly Upadhyay", 
          "Krisha Darji", 
          "Fenil Ramoliya"
        ]
      },
      {
        prize: "Second ($300)",
        teamName: "Team Unstable Diffusors",
        university: "Nirma University",
        members: [
          "Pranshav Patel", 
          "Prachita Patel", 
          "Dhruv Thakkar", 
          "Kavya Patel", 
          "Hetul Shah"
        ]
      },
      {
        prize: "Third ($200)",
        teamName: "Team Gaussian Guys",
        university: "Pune Institute of Computer Technology",
        members: [
          "Soham Ravindran", 
          "Gaurav Boob", 
          "Kaushal Kulkarni", 
          "Varad Unhale"
        ]
      }
    ]
  };

  const HackathonCarousel = () => {
    const [activeYear, setActiveYear] = useState("2021");
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
          setActiveYear(Object.keys(hackathonData)[next]);
        },
        prevArrow: (
          <div
            className="slick-arrow slick-prev"
            style={{
              fontSize: "36px",
              color: "#FFFFFF",
              background: "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          >
            {"<"}
          </div>
        ),
        nextArrow: (
          <div
            className="slick-arrow slick-next"
            style={{
              fontSize: "36px",
              color: "#FFFFFF",
              background: "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          >
            {">"}
          </div>
        ),
      };
      
      
  
    return (
      <Box
        bg="black"
        color="white"
        py={10}
        minH="100vh"
        position="relative"
        textAlign="center"
        marginTop={"6rem"}
      >
        <chakra.h1 fontSize={48} fontWeight="bold" mb={8} color="blue.500">
          Previous MINeD Winners 
        </chakra.h1>
  
        <Box w="90%" maxW="1200px" mx="auto">
          <Slider {...settings}>
            {Object.keys(hackathonData).map((year) => (
              <Box key={year}>
                <Heading as="h2" size="lg" color="blue.400" mb={4}>
                  {year} Winners
                </Heading>
                <Flex wrap="wrap" justify="center" spacing={4}>
                  {hackathonData[year].map((team, index) => (
                    <Box
                      key={index}
                      p={5}
                      m={4}
                      width={{ base: "100%", sm: "45%", md: "30%" }}
                      bg="gray.800"  // Updated card background
                      borderRadius="lg"
                      boxShadow="xl"  // Stronger shadow for better emphasis
                      minHeight="350px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      transition="transform 0.3s ease-in-out"
                      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}  // Hover effect with shadow
                    >
                      <Heading size="md" color="blue.400" mb={3}>
                        {team.teamName}
                      </Heading>
                      <Text fontSize="md" color="gray.400" mb={2}>  {/* Adjusted text color */}
                        {team.university}
                      </Text>
                      <Text fontSize="lg" color="white" mb={2}>
                        Prize:{" "}
                        <span
                          style={{
                            color: team.prize.includes("First")
                              ? "#FFD700"
                              : team.prize.includes("Second")
                              ? "#C53C3C"
                              : "#6B46C1"
                          }}
                        >
                          {team.prize}
                        </span>
                      </Text>
                      <Text fontSize="md" color="gray.200" mb={2}>
                        Team Members:
                      </Text>
                      <VStack align="start" spacing={1}>
                        {team.members.map((member, idx) => (
                          <Text
                            key={idx}
                            fontSize="sm"
                            color="gray.300"  // Updated color for team members
                            fontWeight="bold"  // Bold text for team members
                            _hover={{ color: "blue.400" }}  // Hover effect to highlight names
                          >
                            • {member}
                          </Text>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  };
  
  export default HackathonCarousel;
  
