import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Organizers from "../components/Organizers";
import { Box, Heading, Container } from "@chakra-ui/react";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonial";
import HackathonHistory from "@/components/Hackathon_History";

export default function Home() {
  return (
    <>
      <Head>
        <title>MINeD 2025 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16}>
          <Banner />
          <Organizers />
          <HackathonHistory />
          <Testimonials />
          <Faqs />
        </Box>
        <Footer />
      </Container>
    </>
  );
}
