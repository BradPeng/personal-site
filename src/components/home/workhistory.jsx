import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Container, Typography } from "@mui/material";
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
    paddingRight: 0,
    flex: 1,
  },
  logo: {
    width: "64px",
    height: "64px",
  },
  timelineDate: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    minWidth: "261px",
  },
});

const workHistoryList = [
  {
    title: "Software Development Intern",
    subtitle: "Alida",
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
  const classes = useStyles();

  let workHistory = workHistoryList.map((workHistoryList) => (
    <Card sx={{ maxWidth: 800 }} className={classes.timelineCard}>
      <CardContent key={workHistoryList.title}>
        <Container>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            {workHistoryList.title}
          </Typography>
          <Typography variant="h6">{workHistoryList.subtitle}</Typography>
          <Typography gutterBottom variant="body1">
            {workHistoryList.description}
          </Typography>
          {workHistoryList.bullets && (
            <>
              <Typography sx={{ fontWeight: "bold" }}>Work Summary</Typography>
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
  ));

  useEffect(() => {
    Aos.init({ duration: 1200, delay: 100 });
  }, []);

  return (
    <Container style={{ paddingBottom: "250px" }}>
      <Typography variant="h3" component="h1">
        Work History
      </Typography>
      <Timeline
        position="alternate"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            data-aos="slide-right"
            className={classes.timelineDate}
          >
            <Typography variant="h6">May 2022 - December 2022</Typography>
            <img src={AlidaLogo} className={classes.logo} />
          </TimelineOppositeContent>
          <TimelineSeparator data-aos="fade">
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade">{workHistory[0]}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent data-aos="fade">
            {workHistory[1]}
          </TimelineOppositeContent>
          <TimelineSeparator data-aos="fade">
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            data-aos="slide-right"
            className={classes.timelineDate}
          >
            <Typography variant="h6">September 2021 - April 2022</Typography>
            <img src={BankLogo} className={classes.logo} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            data-aos="slide-right"
            className={classes.timelineDate}
          >
            <Typography variant="h6">July 2020 - August 2020</Typography>
            <img src={GoaLogo} className={classes.logo} />
          </TimelineOppositeContent>
          <TimelineSeparator data-aos="fade">
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent data-aos="fade">{workHistory[2]}</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent data-aos="fade">
            {workHistory[3]}
          </TimelineOppositeContent>
          <TimelineSeparator data-aos="fade">
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            data-aos="slide-right"
            className={classes.timelineDate}
          >
            <Typography variant="h6">July 2018 - August 2018</Typography>
            <img src={GoaLogo} className={classes.logo} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default WorkHistory;
