import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function CallToActionWithVideo() {
  const [isOpened, setOpened] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={8}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text as={"span"} fontSize={["lg", "xl"]} color={"blue.400"} fontWeight="black">
              5th edition of
            </Text>
            <Text
              fontSize={"5xl"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              MINeD Hackathon 2025
            </Text>
            <br />
            <Text as={"span"} fontSize={["lg", "xl"]} fontWeight="black">
              Participate and win exciting prizes
            </Text>
          </Heading>
          <Text fontSize={"lg"} fontWeight="medium" color="gray.100" display={"flex"} alignItems={"center"} gap={"10px"}>
            <Image src="/icons_icon.png" height={"2.5rem"}/>
            January 30 - February 01, 2025
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          ></Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"100%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.50", "blue.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"top"}
              w={"100%"}
              h={"100%"}
              src={"/h3.jpeg"}
            />
          </Box>
        </Flex>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay />
        <ModalContent
          bg="white"
          borderRadius="2xl"
          boxShadow="2xl"
          color="black"
          p={6}
          textAlign="center"
        >
          <ModalCloseButton color="black" _hover={{ color: "blue.500" }} />
          <ModalBody fontSize="lg" py={6}>
            <p>
              🚀<strong>Discord link will be activated soon!</strong> Stay tuned
              for updates.
            </p>
            <Button
              mt={4}
              size="md"
              bg="blue.500"
              _hover={{
                bg: "blue.600",
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
              color="white"
              rounded="full"
              onClick={onClose}
            >
              Got it!
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
