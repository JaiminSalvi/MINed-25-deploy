import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import TeamCard from "../components/TeamCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team - MINeD 2025 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16}>
          <Heading
            paddingBlock={8}
            textAlign={["center"]}
            textDecoration="underline"
          >
            Meet Our Team
          </Heading>
          <Heading
            size={"lg"}
            color={"blue.400"}
            textAlign={["center"]}
            paddingBlock={4}
          >
            Advisors
          </Heading>
          <Advisor />
          <Heading
            size={"lg"}
            color={"blue.400"}
            textAlign={["center"]}
            paddingBlock={4}
          >
            Coordinators
          </Heading>
          <Coordinators />
          <Heading
            size={"lg"}
            color={"blue.400"}
            textAlign={["center"]}
            paddingBlock={4}
          >
            Team Members
          </Heading>
          <Developers />
        </Box>
        <Footer />
      </Container>
    </>
  );
}

function Coordinators() {
  const coordinators = [
    {
      name: "Dr Sapan H Mankad",
      image: "/sapan_mankad.jpg",
      linkedIn: "https://www.linkedin.com/in/sapan-mankad-4815601a/",
    },
    {
      name: "Dr Vishal Parikh",
      image: "/vishal_parikh.jpg",
      linkedIn: "https://technology.nirmauni.ac.in/author/vishalparikh/",
    },
    {
      name: "Dr Rupal Kapdi",
      image: "/rupal_kapdi.jpeg",
      linkedIn: "https://www.linkedin.com/in/dr-rupal-kapdi-474620256",
    },
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {coordinators.map((ad) => (
        <GridItem
          _hover={{
            border: "1px solid transparent", // Set initial border to transparent
            boxShadow:
              "0 0 6px 1.5px white, 0 0 20px 6px white, 0 0 15px 6px white", // Glowing effect
            transition: "box-shadow 0.5s ease-in-out",
            borderRadius: "30px",
            // bgColor: "white",
            color: "white",
          }}
        >
          <TeamCard
            url={ad.image}
            name={ad.name}
            description={""}
            link={ad.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
function Advisor() {
  const advisors = [
    {
      name: "Dr R N Patel",
      designation: "Director",
      image: "/dr_rn_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/rajesh-patel-b5144256/",
    },
    {
      name: "Dr Himanshu Soni",
      designation: "Director",
      image: "/dr_himanshu_soni.jpeg",
      linkedIn: "https://www.linkedin.com/in/dr-himanshu-soni-4358916/",
    },
    {
      name: "Dr Sudeep Tanwar",
      designation: "HOD",
      image: "/dr_sudeep_tanwar.jpeg",
      linkedIn: "https://www.linkedin.com/in/sudeep-tanwar-7a898324/",
    },
    {
      name: "Dr Sangwon Yoon",
      image: "/dr_yoon.jpg",
      linkedIn: "https://www.linkedin.com/in/sang-won-yoon-bb886722/",
    },
    {
      name: "Dr Priyank Thakkar",
      image: "/priyank_thakkar.jpg",
      linkedIn: "https://www.linkedin.com/in/priyank-thakkar-4701689b/",
    },
    {
      name: "Dr Swati Jain",
      image: "/swati_jain.jpg",
      linkedIn: "https://www.linkedin.com/in/swati-jain-54845311/",
    },
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {advisors.map((ad) => (
        <GridItem
          _hover={{
            border: "1px solid transparent", // Set initial border to transparent
            boxShadow:
              "0 0 6px 1.5px white, 0 0 20px 6px white, 0 0 15px 6px white", // Glowing effect
            transition: "box-shadow 0.5s ease-in-out",
            borderRadius: "30px",
            // bgColor: "white",
            color: "white",
          }}
        >
          <TeamCard
            url={ad.image}
            name={ad.name}
            description={ad.designation ?? "Advisor"}
            link={ad.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

function Developers() {
  const developers = [
    {
      name: "Vanshil Vaghasiya",
      image: "/Vanshil.jpeg",
      linkedIn: "https://www.linkedin.com/in/vanshilpatel/",
    },
    {
      name: "Kajal Lochab",
      image: "/Kajal_Lochab.jpg",
      linkedIn: "https://www.linkedin.com/in/kajal-lochab",
    },
    {
      name: "Kiran Kher",
      image: "/kiran_kher.jpg",
      linkedIn: "https://www.linkedin.com/in/kiran-kher-a517b9225",
    },
    {
      name: "Shubh Patel",
      image: "/shubh_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/shubh26",
    },
    {
      name: "Priyang Desai",
      image: "/priyang.jpeg",
      linkedIn: "https://www.linkedin.com/in/priyang-desai1310",
    },
    {
      name: "Jaimin Salvi",
      image: "/jaimin.jpeg",
      linkedIn:
        "https://www.linkedin.com/in/jaimin-salvi-6786442a6/?trk=contact-info",
    },
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {developers.map((dev) => (
        <GridItem
          _hover={{
            border: "1px solid transparent", // Set initial border to transparent
            boxShadow:
              "0 0 6px 1.5px white, 0 0 20px 6px white, 0 0 15px 6px white", // Glowing effect
            transition: "box-shadow 0.5s ease-in-out",
            borderRadius: "30px",
            // bgColor: "white",
            color: "white",
          }}
        >
          <TeamCard
            url={dev.image}
            name={dev.name}
            description={""}
            link={dev.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
