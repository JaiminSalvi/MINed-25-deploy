import { Grid, GridItem } from "@chakra-ui/react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Mentors() {
    const mentors = [
        {
            name: "Parth Agrawal",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQHlxg_aqschFQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720855229750?e=1743033600&v=beta&t=NDsuqOSe9L8VDoKLZFujX1x7dlfuFEZA6pfcHnQqbvs",
            linkedIn: "https://www.linkedin.com/in/htrap94/",
            designation: "Associate Director, ML and AI",
            company: "Cactus Communications",
        },
        {
            name: "Jimit Tank",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQEH8RYcLtNl2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677688701257?e=1743033600&v=beta&t=sl2tx2JN9ay0fCDi7npuLNAdcqpDaTo9c03gLoL5Sf8",
            linkedIn: "https://www.linkedin.com/in/jimit-tank-0072a745/",
            designation: "Architect",
            company: "INTECH",
        },
        {
            name: "Loveneet Ahuja",
            // image: "/bhargav_modha.jpeg",
            linkedIn: "https://www.linkedin.com/in/ahujaloveneet/",
            designation: "Director",
            company: "Glitch Over",
        },
        {
            name: "KrishnaKumar Mishra",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQFytynmhVhNmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729001576169?e=1743033600&v=beta&t=_D3voS_p9YoBSkvZA-IgSkQi8Gkn9asXCIzC9jq74ZY",
            linkedIn:
                "https://www.linkedin.com/in/krishnakumar-mishra-a03278b9/",
            designation: "Manager, ML",
            company: "Cactus Communications",
        },
        {
            name: "Kunal Sawhney",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQG3-FLQVE49IA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686388279914?e=1743033600&v=beta&t=EJJMkJMFKd0REwC1uUHK290DtVX16qal6EMf_8q66jk",
            linkedIn: "https://www.linkedin.com/in/kunal-sawhney-607aa3bb/",
            designation: "Senior Manager, Engineering",
            company: "Cactus Communications",
        },
        {
          name: "Chaitanya Malhotra",
          image: "https://media.licdn.com/dms/image/v2/C5603AQFGd5_6FXzvNg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1589962545206?e=1743033600&v=beta&t=Zrn2elp31KpOcA7SmvFA1O8raWT-vJZsclmySaSmLpM",
          linkedIn:
          "https://www.linkedin.com/in/chaitanya-malhotra-05973013b/",
          designation: "Software Engineer",
          company: "Cactus Communications",
        },
        {
          name: "Ritik Malik",
          image: "https://media.licdn.com/dms/image/v2/C4D03AQGHVe_H1fFIjQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653328695010?e=1743033600&v=beta&t=HB0pdwmPrKrqkMKS_dDcyLzS2F4SafgX8XOyl_kGCvA",
          linkedIn: "https://www.linkedin.com/in/ritik-malik-406",
          designation: "Software Engineer",
          company: "Cactus Communications",
        },
        {
          name: "Paras Jain",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQHs5S8eO3ejRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704625176122?e=1743033600&v=beta&t=wG0ifzOSfWblCVUYuyaWLROieLTH2Z7Bw13nEKGbA6c",
          linkedIn: "https://www.linkedin.com/in/jainparas386/",
          designation: "AI/ML Engineer",
          company: "INTECH",
        },
        {
          name: "Vishal Jadeja",
          image: "https://media.licdn.com/dms/image/v2/D5603AQGsElqGfh6dig/profile-displayphoto-shrink_400_400/B56ZRurR2yGsAg-/0/1737023627146?e=1743033600&v=beta&t=r47rF1gXC6SxQoCW3Zath6FiW-l8J2TopN8zUUZjJbA",
          linkedIn: "https://www.linkedin.com/in/vishal-jadeja/",
          designation: "Full Stack Developer Intern",
          company: "Glitch Over",
        },
        {
          name: "Krunal Lodha",
          image: "/krunal.jpeg",
          linkedIn: "https://www.linkedin.com/in/krunal-lodha-90393a257/",
          designation: "Full Stack Developer Intern",
          company: "Glitch Over",
        },
        {
          name: "Bhargav Modha",
          image: "https://media.licdn.com/dms/image/v2/D4D03AQEgbSmupx1-9Q/profile-displayphoto-shrink_400_400/B4DZP97o7rHMAg-/0/1735132090859?e=1743033600&v=beta&t=W8gMEZ7qmFg1vHgD_jLxUTpN_068rYLDve0U_XTkWdk",
            linkedIn: "https://www.linkedin.com/in/bhargav-modha/",
            designation: "Machine Learning Engineer",
            company: "Cactus Communications",
        },
        {
            name: "Fenil Ramoliya",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQFylvFTP2h-Yw/profile-displayphoto-shrink_400_400/B4DZSE.YCWG8Ao-/0/1737397732489?e=1743033600&v=beta&t=YldZ1Z7SFpbQJ55GMQOFRa3xPvm5tV_7ruL7sLnPr3c",
            linkedIn: "https://www.linkedin.com/in/fenilramoliya210/",
            designation: "ML Intern",
            company: "Cactus Communications",
        },
    ];
    return (
        <Box marginBlock={16} id="mentors">
            <Heading color={"#4299E1"} marginBlock={"8"}>
                {" "}
                Past Mentors
            </Heading>
            <Grid
                alignItems="center"
                templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
                gap={4}
                marginBottom={8}
            >
                {mentors.map((dev) => (
                    <GridItem
                        key={dev.name}
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
                        <MentorCard
                            url={dev.image}
                            name={dev.name}
                            link={dev.linkedIn}
                            designation={dev.designation}
                            company={dev.company}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
}

function MentorCard(props) {
    return (
        <Center>
            <Box
                boxShadow="md"
                rounded="lg"
                p={6}
                textAlign={"center"}
                minW="xs"
                border="2px solid transparent" // Set an initial border
                _hover={{
                    border: "white.400", // Change the border on hover
                }}
            >
                <Avatar size={"2xl"} src={props.url} alt={props.name} mb={4} />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                    {props.name}
                </Heading>
                <Text textAlign={"center"} px={3} mt={4}>
                    {props.designation}
                </Text>

                <Text textAlign={"center"}>{props.company}</Text>

                <Stack
                    mt={8}
                    direction={"row"}
                    spacing={4}
                    justifyContent={"center"}
                >
                    <Button
                        fontSize={"md"}
                        paddingInline={8}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                            bg: "blue.500",
                        }}
                        _focus={{
                            bg: "blue.500",
                        }}
                        as={"a"}
                        href={props.link}
                        leftIcon={<FaLinkedinIn />}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        Connect
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}
