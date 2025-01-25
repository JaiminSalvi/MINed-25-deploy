import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function Tracks() {
  return (
    <Box marginBlock={16} id="tracks">
      <Heading color={"#4299E1"} marginBlock={"8"}>Tracks</Heading>
      <Grid
        gridAutoRows="1fr"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        boxShadow="2xl"
      >
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_webp/1918c967-5c8d-4d1e-9dca-4a4eee0e03bc"
            trackName="Playpulse AI-Powered Hightlight Extraction and Player Tracking"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_webp/280c2973-c142-45f5-8c57-193bbbd4d229"
            trackName="Academic Research Remix"
          />
        </GridItem>
        
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_webp/19971cd7-4fdf-4bc0-a084-09979f7c38ec"
            trackName="Smart Route Optimizer"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_webp/27b01d46-fcb2-4e35-806d-0cfccea1319f"
            trackName="Manufacturing Use Case Solution With AI "
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_webp/4d303f3d-8c9b-4066-bcea-03a63824e75a"
            trackName="Efficient Data Extraction From Financial Reports"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

function TrackCard({ imageUrl, trackName }) {
  return (
    <Card
      boxShadow="base"
      position="relative"
      borderRadius="md"
      overflow="hidden"
    >
      <Image height={"400px"} width={""} src={imageUrl}></Image>
      <CardBody
        width="full"
        position="absolute"
        bottom="0"
        py="2.5"
        color="white"
        boxShadow="inset 0 0 1000px black"
      >
        {trackName}
      </CardBody>
    </Card>
  );
}
