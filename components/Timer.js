import { Box, Text } from "@chakra-ui/react";
import React from "react";
import NoSSR from "./NoSSR";
import { useCountdown } from "./Timerhook";

const ExpiredNotice = () => {
  return (
    <Box zIndex={100} bgColor="white" bgGradient="linear(90deg, hsla(0, 100%, 67%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)" className="expired-notice">
      <span>Hackathon is ended!!!</span>
    </Box>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div
      className={isDanger ? "countdown danger" : "countdown"}
      style={{
        fontSize:"20px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <span>:</span>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <span>:</span>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <span>:</span>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <Box position={"fixed"} bottom="0" right="0">
        <ExpiredNotice />
      </Box>
    );
  } else {
    return (
      <NoSSR>
        <Box
        bgGradient="linear(90deg, hsla(210, 90%, 80%, 1) 0%, hsla(212, 93%, 49%, 1) 100%)"
          position={"fixed"}
          bottom="0"
          right="0"
          height={"8vw"}
          minHeight={"100px"}
          maxHeight={"110px"}
          p="1"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor="blue.200"
        //   p="4"
          width={"full"}
          zIndex="1000"
        >
          <Text align="center" className="our-timer" fontSize={"20px"} fontWeight="black">
            Hackathon starts in
          </Text>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </Box>
      </NoSSR>
    );
  }
};

export default CountdownTimer;
