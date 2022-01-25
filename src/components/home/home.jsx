import { Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "aos/dist/aos.css";
import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from '../../images/downarrow.png';
import GitHubLogo from '../../images/githublogo.png';
import LinkedInLogo from '../../images/linkedinlogo.png';
import ProjectCards from './projectcards';
import './projectCarousel.css';
import WorkHistory from './workhistory';

const handleScroll = ref => {
    window.scrollTo({
        behavior: "smooth",
        top: ref.current.offsetTop
    });
};

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Home() {
    const workSectionRef = useRef();
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Container maxWidth='xl'>
                    <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "center" }}>
                        <Typography variant='h3' component='h1'>Brad Peng</Typography>
                        <Typography gutterBottom variant='h5'>Computer Science, The University of British Columbia (2019 - 2024)</Typography>
                        <Grid justifyContent="center" container spacing={1}>
                            <Grid item>
                                <Link target="_blank" rel="noopener" href="https://github.com/BradPeng">
                                    <Avatar src={GitHubLogo} />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/brad-peng-165206214/">
                                    <Avatar style={{ backgroundColor: 'white' }} src={LinkedInLogo} />
                                </Link>
                            </Grid>
                        </Grid>

                        <div style={{ width: 50, textAlign: 'center', position: 'absolute', bottom: 50, right: 0, left: 0, marginLeft: 'auto', marginRight: 'auto', cursor: "pointer" }}>
                            <Link onClick={() => { handleScroll(workSectionRef) }}>
                                <Avatar src={DownArrow} />
                            </Link>
                        </div>
                    </div>

                    <div ref={workSectionRef} style={{ paddingTop: 75 }} id="work" />

                    <WorkHistory />

                    <ProjectCards />

                </Container>

                <Container style={{ paddingBottom: '250px' }}>
                    <Typography variant='h3' component='h1'>Volunteer Work</Typography>
                    <Link  target="_blank" rel="noopener" href='https://gameofapps.org/' gutterBottom variant='h4'>Game of Apps (2020 - Present)</Link>
                    <Typography style={{paddingTop: 40}} align='left' variant='body1'>The Game of Apps program is a course available to public school students in the Greater Vancouver Area. The program's mission statement is to introduce real-world technology design and development to students and create interest in STEM fields. I have volunteered in both the senior and junior programs. The senior program teaches app design and development through Java and Android studio. I scripted and recorded lessons for the students and directly mentored one of the teams during the program. The junior program is a lot lighter and only teaches programming fundamentals. I spend my time during and after lectures answering student questions about basic coding principles and the Swift language.

</Typography>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Home;
