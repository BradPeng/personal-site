import { Container, Grid2, Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "aos/dist/aos.css";
import React, { useRef, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from "../../images/downarrow.png";
import GitHubLogo from "../../images/githublogo.png";
import LinkedInLogo from "../../images/linkedinlogo.png";
import ProjectCards from "./projectcards";
import "./projectCarousel.css";
import WorkHistory from "./workhistory";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import Introduction from "./intro";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200, delay: 100 });
  }, []);

  const workHistoryRef = useRef(null);
  const projectCardsRef = useRef(null);
  const volunteerWorkRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Container maxWidth="xl">
          <Introduction />

          <div ref={workHistoryRef}>
            <WorkHistory />
            <Container>
              <Avatar
                src={DownArrow} // Your arrow image
                onClick={() => scrollToSection(projectCardsRef)}
                style={{ marginBottom: "250px" }}
                sx={{
                  padding: "auto",
                  margin: "auto",
                  zIndex: 1000,
                  cursor: "pointer",
                  transition: "0.3s", // Smooth transition for hover effect
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white overlay on hover
                  },
                }}
              />
            </Container>
          </div>

          <div ref={projectCardsRef}>
            <ProjectCards />

            <Container data-aos="fade">
              <Avatar
                src={DownArrow} // Your arrow image
                onClick={() => scrollToSection(volunteerWorkRef)}
                style={{ marginBottom: "250px" }}
                sx={{
                  padding: "auto",
                  margin: "auto",
                  zIndex: 1000,
                  cursor: "pointer",
                  transition: "0.3s", // Smooth transition for hover effect
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white overlay on hover
                  },
                }}
              />
            </Container>
          </div>

          <Container style={{ paddingBottom: "250px" }} ref={volunteerWorkRef}>
            <Typography variant="h3" component="h1">
              Volunteer Work
            </Typography>
            <Link
              target="_blank"
              rel="noopener"
              href="https://gameofapps.org/"
              gutterBottom
              variant="h4"
            >
              Game of Apps (2020 - Present)
            </Link>
            <Typography style={{ paddingTop: 40 }} align="left" variant="body1">
              The Game of Apps program is a course available to public school
              students in the Greater Vancouver Area. The program's mission
              statement is to introduce real-world technology design and
              development to students and create interest in STEM fields. I have
              volunteered in both the senior and junior programs. The senior
              program teaches app design and development through Java and
              Android studio. I scripted and recorded lessons for the students
              and directly mentored one of the teams during the program. The
              junior program is a lot lighter and only teaches programming
              fundamentals. I spend my time during and after lectures answering
              student questions about basic coding principles and the Swift
              language.
            </Typography>
          </Container>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Home;
