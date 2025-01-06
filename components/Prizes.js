import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Prizes() {
  return (
    <>
      <Box>
        <Heading color={"#4299E1"} textAlign={["center", "start"]}>
          Grand Prizes sponsored by SUNY Binghamton University
        </Heading>
        <Grid
          h="auto"
          templateRows={{ sm: "repeat(3, 1fr)", md: "repeat(1, 1fr)" }}
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          marginBlock={8}
        >
          <GridItem order={[2, 1]}
          _hover={{
            bgColor:"silver.50",
          }}>
            <PrizeCard
              imgUrl={"/silver.svg"}
              money={450}
              text={"1st Runner-Up"}
              mgtop={16}
              order={2}
              
            />
          </GridItem>
          <GridItem order={[1, 2]}
          _hover={{
            bgColor:"gold.50",
          }}
          >
            <PrizeCard
              imgUrl={"/gold.svg"}
              money={750}
              text={"Winner"}
              order={1}
              />
              
          </GridItem>
          <GridItem order={[3, 3]}
          _hover={{
            bgColor:"#cd7f32.50",
          }}>
            <PrizeCard
              imgUrl={"/bronze.svg"}
              money={300}
              text={"2nd Runner-Up"}
              mgtop={20}
              order={3}
              />
              
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

function PrizeCard({ imgUrl, money, text, mgtop }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"2xl"}
      paddingBlock={8}
      borderRadius={"lg"}
      marginTop={[0, mgtop]}
      _hover={{ bgColor: "blue.300", 
      transition: "background-color 1s",
    }}
    _hoverout={{
      bgColor: "transparent", // Set to the background color you want when leaving
      transition: "background-color 1s ease-in-out",
    }}
    
      cursor={"pointer"}
    >
      <Image src={imgUrl}></Image>
      <Heading fontSize={"4xl"}>${money}</Heading>
      <Text fontSize={"2xl"} fontWeight={"white"}>
        {text}
      </Text>
    </Box>
  );
}
