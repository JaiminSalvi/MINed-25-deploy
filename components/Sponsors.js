import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <Box  marginBlock={16} id="sponsors">
      <Heading color={"#4299E1"}  marginBlock={"8"}>Sponsors</Heading>
      <Grid
        h="min-content"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={15}
        bg={"white"}
        borderRadius={"30px"}
      >
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://cactusglobal.com/"} target="_blank">
            <Image src="/cactus.png" scale={1.5} 
            // filter="brightness(00%)"
            
            />
          </Link>
        </GridItem>


       
        
        <br/>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
          marginRight="20"
        >
          <Link href={"https://theintechgroup.com/"} target="_blank">
            <Image src="/intech.png"
            // filter="brightness(150%)"
            // bg="white"
            
            />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          sm:marginLeft={"-70px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"#"} target="">
            <Image src="/jklakshmi.png" height="48" 
                marginBottom={"10px"}
            />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          marginLeft={"-30px"}
          marginTop={"10px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"#"} target="">
            <Image src="/ai_city.png" height="48" 
                marginBottom={"10px"}
            />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
