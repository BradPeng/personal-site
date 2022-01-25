import { Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "aos/dist/aos.css";
import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from '../../images/downarrow.png';
import ProjectCards from './projectcards';
import './projectCarousel.css';
import WorkHistory from './workhistory';
import Link from '@mui/material/Link';

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
                                    <Avatar src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/brad-peng-165206214/">
                                    <Avatar style={{ backgroundColor: 'white' }} src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png' />
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
                    <Link target="_blank" rel="noopener" href='https://gameofapps.org/' gutterBottom variant='h4'>Game of Apps (2020 - Present)</Link>
                    <Typography align='left' variant='body1'>I volunteer at a  asd as asd aslocally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps.</Typography>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Home;
