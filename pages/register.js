import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container } from "@chakra-ui/react";
import RegisterForm from "../components/RegisterForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Registration - MINeD 2025 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16} maxW={"full"} marginInline={"auto"}>
          <RegisterForm />
        </Box>
        <Footer />
      </Container>
    </>
  );
}
