import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Flex, Heading } from "@chakra-ui/react";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HackathonHistory = () => {
  const [fontSize, setFontSize] = useState(12); // Set initial font size

  // Adjust font size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newFontSize = Math.max(10, Math.min(16, (width / 1000) * 16)); // Adjust based on screen width
      setFontSize(newFontSize);
    };

    window.addEventListener("resize", handleResize);

    // Set initial font size on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Year Wise Participants Data
  const yearWiseData = {
    labels: ["2021 (Feb)", "2022 (Mar)", "2023 (Mar)", "2024 (Feb-Mar)"],
    datasets: [
      {
        label: "Participants",
        data: [180, 340, 980, 1180],
        backgroundColor: "rgba(66, 153, 225, 0.9)", // Soft blue
        borderColor: "rgba(66, 153, 225, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(66, 153, 225, 1)",
        borderRadius: 10, // Rounded corners
        barThickness: "flex", // Responsive bar thickness
      },
    ],
  };

  // States Data
  const stateData = {
    labels: ["2021 (Feb)", "2022 (Mar)", "2023 (Mar)", "2024 (Feb-Mar)"],
    datasets: [
      {
        label: "States",
        data: [3, 3, 16, 20],
        backgroundColor: "rgba(245, 158, 11, 0.9)", // Soft orange
        borderColor: "rgba(245, 158, 11, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(245, 158, 11, 1)",
        borderRadius: 10,
        barThickness: "flex",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white", // Legend text color
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 18,
          weight: "bold",
        },
      },
      datalabels: {
        color: "white",
        anchor: "end",
        align: "top",
        font: {
          size: 12,
        },
        formatter: Math.round,
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // No grid lines on X-axis
        },
        ticks: {
          color: "white",
          font: {
            size: fontSize, // Dynamically set font size
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "white", // White grid lines
          lineWidth: 0.5,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Flex
      textAlign={"center"}
      pt={10}
      bottom={40}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <div style={styles.container}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={"bold"}
          color={useColorModeValue("blue.500")}
        >
          Hackathon History
        </chakra.h1>

        {/* Charts in a Single Div */}
        <Flex justify="space-between" gap="10px" flexWrap="wrap">
          {/* Participants Chart with Heading */}
          <Box style={styles.chart}>
            <Heading as="h3" size="lg" color="white" marginBottom={"10px"}>
              Year Wise Participants
            </Heading>
            <Bar
              data={yearWiseData}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: "" }, // Removing default title
                },
              }}
            />
          </Box>

          {/* States Chart with Heading */}
          <Box style={styles.chart}>
            <Heading as="h3" size="lg" color="white" marginBottom={"10px"}>
              States
            </Heading>
            <Bar
              data={stateData}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { ...options.plugins.title, text: "" }, // Removing default title
                },
              }}
            />
          </Box>
        </Flex>
      </div>
    </Flex>
  );
};

// Styles for the chart container
const styles = {
  container: {
    padding: "5px",
    gap: "17px",
  },
  chart: {
    width: "100%",
    maxWidth: "600px",
    height: "400px",
    padding: "20px",
    backgroundColor: "rgba(43, 39, 39, 0.5)", // Dark background for chart container
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(38, 37, 37, 0.3)",
  },
};

export default HackathonHistory;
