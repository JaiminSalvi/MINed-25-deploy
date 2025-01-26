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
            <Image src="https://aisolutions.cactusglobal.com/assets/home/dark-bg-labs-logo.svg" alt="Cactus Global" background={"black"}
              height={"10rem"} 
              padding={"1rem"}
              // width={"25rem"}
            />
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
          <Link href="https://www.jklakshmicement.com/" target="">
            <Image src="/jklakshmi_logo.jpg" alt="JK Lakshmi Cement" />
          </Link>
        </GridItem>
        


        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Link href="#" target="">
            <Image src="/WhatsApp Image 2025-01-22 at 12.09.06_829cad59.jpg" alt="AI City" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          background={"black"}
        >
          <Link href="https://www.glitchover.com/" target="">
            <Image src="/Glitchover_logo_new_Stacked.png" alt="GlitchOver" />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          // background={"black"}
        >
          <Link href="https://www.crestdata.ai/" target="">
            <Image src="https://static1.squarespace.com/static/65e76fb59ac8851284f606e6/t/66330e336badcd10b5800caa/1714622009606/Crest+Data+Systems+Logo+for+Blog+Post.png?format=1500w" alt="GlitchOver" />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
