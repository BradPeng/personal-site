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
    description: "Yaba gaba goo",
  },
  {
    title: "Web Development Intern",
    subtitle: "Bank of Canada",
    description:
      "As part of the front-end web team at the Bank of Canada, I was responsible for tasks regarding the six internal and external-facing sites used by the Bank of Canada. As an intern, I was allowed to work on any jobs that came up in our sprint boards, including implementation tasks and quality assurance testing. I was well known in the team to be an excellent peer reviewer, as my review process had uncovered many vulnerabilities and bugs. This saved a lot of time for the senior developers who reviewed pull requests. I also wrote many automated test scripts that ensured everything would behave as expected. In addition to minor bug fixes, I got the opportunity to implement various quality of life changes to the sites, such as adding a search feature to our drop-down menus or adding additional attributes to our components for increased customizability.",
  },
  {
    title: "Web Development Intern",
    subtitle: "Institute of Applied Design and Technology Education Society",
    description:
      "This was my second time interning for this company. Like my previous internship with them, I was on a team that started development from scratch. Being a brand new project, we first started creating the base React components from which the site was constructed. The components were written in TypeScript and styled using the Styled Components library. Each component was also documented using React Storybook. Other developers could easily see each component in action and how its props affected its appearance and behaviour. After the base components and a few compound components were created, we assembled the site according to the design mocked up by our design team.",
  },
  {
    title: "iOS Development Intern",
    subtitle: "Institute of Applied Design and Technology Education Society",
    description:
      "My first internship was with the Institute of Applied Design and Technology Education Society, a new non-profit hosting a mobile app development course and competition. I was on the team tasked with developing and launching the first version of the companion app for students to use while taking their course. I created a few screens, which involved creating views through Xcode's Storyboard functionality and wrote the associated code. I also did bug testing on various supported iOS devices throughout the development process. As we neared completion of the app, I also spent some time writing scripts that would populate and manage our Google Firebase backend with test data.",
  },
];

function WorkHistory() {
  const classes = useStyles();

  let workHistory = workHistoryList.map((workHistoryList) => (
    <Card sx={{ maxWidth: 800 }} className={classes.timelineCard}>
      <CardContent key={workHistoryList.title}>
        <Container>
          <Typography variant="h5">{workHistoryList.title}</Typography>
          <Typography variant="h6">{workHistoryList.subtitle}</Typography>
          <Typography variant="body1">{workHistoryList.description}</Typography>
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
