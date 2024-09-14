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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Home() {
  const workHistoryRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToWorkHistory = () => {
    if (workHistoryRef.current) {
      window.scrollTo({
        top: workHistoryRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200, delay: 100 });
  }, []);

  useEffect(() => {
    if (showScrollButton) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setTimeout(() => setIsVisible(false), 50);
    }
  }, [showScrollButton]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Hide button if any part of WorkHistory is visible
        setShowScrollButton(!entry.isIntersecting);
      },
      {
        root: null, // Observe based on the viewport
        threshold: 0, // Trigger when any part of the component is visible
      }
    );

    if (workHistoryRef.current) {
      observer.observe(workHistoryRef.current);
    }

    // Clean up observer when component unmounts
    return () => {
      if (workHistoryRef.current) {
        observer.unobserve(workHistoryRef.current);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Container maxWidth="xl">
          <div
            style={{
              height: "100vh",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" component="h1">
              Brad Peng
            </Typography>

            <Typography gutterBottom variant="h5">
              Computer Science, The University of British Columbia (2019 - 2024)
            </Typography>
            <Container style={{ paddingBottom: "16px" }}>
              <Typography variant="body1" align="left">
                Hi, I'm Brad, a Computer Science graduate from the University of
                British Columbia. This website outlines my software development
                journey, which has focused on web and game development. Below,
                you'll find some information about my past work experiences and
                some of the projects I made while learning about different tech
                stacks. Some of my projects even have convenient web demos
                available, so make sure to check them out if you get a chance!
              </Typography>
            </Container>
            <Grid2 justifyContent="center" container spacing={1}>
              <Grid2>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/BradPeng"
                >
                  <Avatar src={GitHubLogo} />
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/brad-peng-165206214/"
                >
                  <Avatar
                    style={{ backgroundColor: "white" }}
                    src={LinkedInLogo}
                  />
                </Link>
              </Grid2>
            </Grid2>
            {isVisible && (
              <Container data-aos="fade">
                <Avatar
                  src={DownArrow} // Your arrow image
                  onClick={handleScrollToWorkHistory} // Scroll down to WorkHistory when clicked
                  sx={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    cursor: "pointer",
                    transition: "0.3s", // Smooth transition for hover effect
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight white overlay on hover
                    },
                  }}
                />
              </Container>
            )}
          </div>
          {/* WorkHistory section */}
          <div ref={workHistoryRef}>
            <WorkHistory />
          </div>

          <ProjectCards />
        </Container>

        <Container style={{ paddingBottom: "250px" }}>
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
            program teaches app design and development through Java and Android
            studio. I scripted and recorded lessons for the students and
            directly mentored one of the teams during the program. The junior
            program is a lot lighter and only teaches programming fundamentals.
            I spend my time during and after lectures answering student
            questions about basic coding principles and the Swift language.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Home;
