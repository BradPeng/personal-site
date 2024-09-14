import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AlidaLogo from "./work_logos/Alida_logo.jpg";
import BankLogo from "./work_logos/bank_logo.jpg";
import GoaLogo from "./work_logos/goa_logo.jpg";

const useStyles = makeStyles({
  timelineCard: {
    "&:hover": {
      transition: "transform .2s ease-in-out",
      transform: "scale(1.03)",
    },
  },
  logo: {
    width: "64px",
    height: "64px",
  },
});

const workHistoryList = [
  {
    title: "Software Development Intern",
    subtitle: "Alida",
    date: "May 2022 - December 2022",
    logo: AlidaLogo,
    dotColor: "error",
    isLast: false,
    description:
      "During my time at Alida, I primarily worked on the team's Foundation Effort, which focused on breaking down our monolithic application architecture into a microservices-driven approach. This internship was where I first gained hands-on experience with REST and backend web infrastructure.",
    bullets: [
      "Rerouted data processing from a monolithic ASP.NET C# application to microservices by implementing RESTful APIs, reducing load and improving scalability.",
      "Ensured stateless authentication on microservices with JWT validation, providing secure API access.",
      "Developed integration tests to ensure data synchronization between the monolith's MSSQL database and the microservices' PostgreSQL databases to ensure smooth deployments.",
      "Enhanced debugging with error and information logging to Kibana, improving system visibility and problem resolution.",
    ],
  },
  {
    title: "Web Development Intern",
    subtitle: "Bank of Canada",
    date: "September 2021 - April 2022",
    logo: BankLogo,
    dotColor: "warning",
    isLast: false,
    description:
      "As a part of the front-end web team at the Bank of Canada, I contributed to the development and maintenance of six internal and external-facing sites. This internship provided valuable learning opportunities, allowing me to collaborate with experienced developers and solve challenges alongside fellow interns.",
    bullets: [
      "Assisted in migrating from amCharts 3 to amCharts 4 by updating WordPress components, ensuring seamless functionality and introducing new features.",
      "Developed and executed BDD test cases with Behat, ensuring the functionality of web components.",
      "Helped enable economists to visualize data on a web app using amCharts 4, facilitating research and data analysis.",
      "Improved UX and resolved bugs, enhancing site functionality.",
      "Achieved significant time savings in code review by identifying bugs through thorough quality assurance procedures.",
    ],
  },
  {
    title: "Web Development Intern",
    subtitle: "Institute of Applied Design and Technology Education Society",
    date: "July 2020 - August 2020",
    logo: GoaLogo,
    dotColor: "success",
    isLast: false,
    description:
      "Similar to my previous internship, I joined a team tasked with building a project from the ground up—this time, a React-based website. It was during this internship that I first gained experience with both React and TypeScript, laying the foundation for my front-end development skills.",
    bullets: [
      "Developed and documented 10+ core React components, enhancing the website's flexibility with user-adjustable props for diverse use cases.",
      "Assembled webpages using customizable React components and styled them with the Styled Components library.",
      "Improved code coverage for React components, ensuring functionality was preserved during future updates.",
      "Collaborated with the design team to ensure accurate implementation of design mockups.",
    ],
  },
  {
    title: "iOS Development Intern",
    subtitle: "Institute of Applied Design and Technology Education Society",
    date: "July 2018 - August 2018",
    logo: GoaLogo,
    dotColor: "info",
    isLast: true,
    description:
      "My first internship was with the Institute of Applied Design and Technology Education Society, a new non-profit hosting a mobile app development course and competition. I was part of the team responsible for developing and launching the first iOS version of the companion app for students. I contributed to the development of key app views and wrote scripts to manage our Google Firebase backend.",
    bullets: [
      "Created a parallax scrolling method that was applied to most views.",
      "Brought design mockups to life using XVode's Storyboard functionality",
      "Ensured layouts functioned on all current iOS devices through software and hardware testing",
      "Wrote scripts that populated and managed our Firestore DB with mock data for development purposes.",
    ],
  },
];

function WorkHistory() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  let workHistory = workHistoryList.map((workHistoryList) => (
    <TimelineItem key={workHistoryList.date}>
      {!isSmallScreen && (
        <TimelineOppositeContent data-aos="slide-right">
          <Typography
            sx={{
              display: "inline-block",
              verticalAlign: "top", // Aligns text to the top of the container
              lineHeight: "normal", // Adjust line height to avoid space
            }}
            variant="h6"
          >
            {workHistoryList.date}
          </Typography>
          <img src={workHistoryList.logo} className={classes.logo} alt={workHistoryList.title} />
        </TimelineOppositeContent>
      )}
      <TimelineSeparator >
        <TimelineDot color={workHistoryList.dotColor} />
        {!workHistoryList.isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent data-aos="fade">
        {isSmallScreen && (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",

              justifyContent: "space-between",
            }}
          >
            {/* Date */}
            <Typography
              sx={{
                display: "inline-block",
                verticalAlign: "top", // Aligns text to the top of the container
                lineHeight: "normal", // Adjust line height to avoid space
              }}
              variant="h6"
              style={{ marginRight: "16px" }}
            >
              {workHistoryList.date}
            </Typography>
            {/* Logo */}
            <img
              src={workHistoryList.logo}
              className={classes.logo}
              alt={`${workHistoryList.title} logo`}
            />
          </div>
        )}
        <Card className={classes.timelineCard}>
          <CardContent>
            <Container>
              <Typography sx={{ fontWeight: "bold" }} variant="h5">
                {workHistoryList.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {workHistoryList.subtitle}
              </Typography>
              <Typography gutterBottom variant="body1">
                {workHistoryList.description}
              </Typography>
              {workHistoryList.bullets && (
                <>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Work Summary
                  </Typography>
                  <ul>
                    {workHistoryList.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </>
              )}
            </Container>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  ));

  useEffect(() => {
    Aos.init({ duration: 1200, delay: 100 });
  }, []);

  return (
    <Container style={{ }}>
      <Typography variant="h3" component="h1">
        Work Experience
      </Typography>
      <Timeline
        sx={
          isSmallScreen
            ? {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }
            : {
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.2,
                },
              }
        }
      >
        {workHistory}
      </Timeline>
    </Container>
  );
}

export default WorkHistory;
