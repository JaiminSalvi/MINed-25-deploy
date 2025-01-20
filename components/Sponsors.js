import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <Box marginBlock={16} id="sponsors">
      <Heading color="#4299E1" marginBlock={8} textAlign="center">
        Sponsors
      </Heading>
      <Grid
        templateRows={{ sm: "repeat(5, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{
          sm: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={8}
        bg="white"
        borderRadius="30px"
        padding={8}
      >
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Link href="https://cactusglobal.com/" target="_blank">
            <Image src="/cactus.png" alt="Cactus Global" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Link href="https://theintechgroup.com/" target="_blank">
            <Image src="/intech.png" alt="Intech Group" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Link href="#" target="">
            <Image src="/jklakshmi.png" alt="JK Lakshmi Cement" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Link href="#" target="">
            <Image src="/ai_city.png" alt="AI City" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          background={"black"}
        >
          <Link href="#" target="">
            <Image src="/Glitchover_logo_new_Stacked.png" alt="GlitchOver" />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
