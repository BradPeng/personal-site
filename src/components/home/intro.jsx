import { Container, Grid2, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from "../../images/downarrow.png";
import GitHubLogo from "../../images/githublogo.png";
import LinkedInLogo from "../../images/linkedinlogo.png";
import "./projectCarousel.css";

function Introduction() {
  const workHistoryRef = useRef(null);
  const [showScrollButton] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position <= 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToWorkHistory = () => {
    if (workHistoryRef.current) {
      window.scrollTo({
        top: workHistoryRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
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
            you'll find some information about my past work experiences and some
            of the projects I made while learning about different tech stacks.
            Some of my projects even have convenient web demos available, so
            make sure to check them out if you get a chance!
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
              <Avatar style={{ backgroundColor: "white" }} src={LinkedInLogo} />
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
      <div ref={workHistoryRef}></div>
    </Container>
  );
}

export default Introduction;
