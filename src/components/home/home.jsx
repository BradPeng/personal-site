import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { CardActionArea, Container, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from '../../images/downarrow.png';
import ARPG0 from '../../project-images/adventurerpg_images/ARPG_img_0.png';
import ARPG1 from '../../project-images/adventurerpg_images/ARPG_img_1.png';
import ARPG2 from '../../project-images/adventurerpg_images/ARPG_img_2.png';
import ARPG3 from '../../project-images/adventurerpg_images/ARPG_img_3.png';
import ARPG4 from '../../project-images/adventurerpg_images/ARPG_img_4.png';
import ARPG5 from '../../project-images/adventurerpg_images/ARPG_img_5.png';
import ARPG6 from '../../project-images/adventurerpg_images/ARPG_img_6.png';
import BPP1 from '../../project-images/brucepewpewimages/BPP_img_1.png';
import BPP2 from '../../project-images/brucepewpewimages/BPP_img_2.png';
import BPP3 from '../../project-images/brucepewpewimages/BPP_img_3.png';
import GOA1 from '../../project-images/GOA1_images/GOA1_img_1.png';
import GOA2 from '../../project-images/GOA1_images/GOA1_img_2.png';
import GOA3 from '../../project-images/GOA1_images/GOA1_img_3.png';
import GOA4 from '../../project-images/GOA1_images/GOA1_img_4.png';
import GOA5 from '../../project-images/GOA1_images/GOA1_img_5.png';
import GOA6 from '../../project-images/GOA1_images/GOA1_img_6.JPG';
import PS1 from '../../project-images/personal_site_images/personalSite_img_1.png';
import './projectCarousel.css';
import ProjectCards from './projectcards'
import WorkHistory from './workhistory'


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

const workHistoryList = [
    {
        title: 'Web Developer Intern',
        subtitle: 'Bank of Canada',
        description: 'As part of the front-end web team at the Bank of Canada, I was responsible for tasks regarding the six internal and external-facing sites used by the Bank of Canada. As an intern, I was allowed to work on any jobs that came up in our sprint boards, including implementation tasks and quality assurance testing. I was well known in the team to be an excellent peer reviewer, as my review process had uncovered many vulnerabilities and bugs. This saved a lot of time for the senior developers who reviewed pull requests. I also wrote many automated test scripts that ensured everything would behave as expected. In addition to minor bug fixes, I got the opportunity to implement various quality of life changes to the sites, such as adding a search feature to our drop-down menus or adding additional attributes to our components for increased customizability.',
    },
    {
        title: 'Web Developer Intern',
        subtitle: 'Institute of Applied Design and Technology Education Society',
        description: "This was my second time interning for this company. Like my previous internship with them, I was on a team that started development from scratch. Being a brand new project, we first started creating the base React components from which the site was constructed. The components were written in TypeScript and styled using the Styled Components library. Each component was also documented using React Storybook. Other developers could easily see each component in action and how its props affected its appearance and behaviour. After the base components and a few compound components were created, we assembled the site according to the design mocked up by our design team.",
    },
    {
        title: 'iOS Developer Intern',
        subtitle: 'Institute of Applied Design and Technology Education Society',
        description: "My first internship was with the Institute of Applied Design and Technology Education Society, a new non-profit hosting a mobile app development course and competition. I was on the team tasked with developing and launching the first version of the companion app for students to use while taking their course. I created a few screens, which involved creating views through Xcode's Storyboard functionality and wrote the associated code. I also did bug testing on various supported iOS devices throughout the development process. As we neared completion of the app, I also spent some time writing scripts that would populate and manage our Google Firebase backend with test data.",
    }
]

function Home() {


    useEffect(() => {
        Aos.init({ duration: 1200, delay: 100 });
    }, []);

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
                                <a target="_blank" href="https://github.com/BradPeng">
                                    <Avatar src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                                </a>
                            </Grid>
                            <Grid item>
                                <a target="_blank" href="https://www.linkedin.com/in/brad-peng-165206214/">
                                    <Avatar style={{ backgroundColor: 'white' }} src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png' />
                                </a>
                            </Grid>
                        </Grid>

                        <div style={{ width: 50, textAlign: 'center', position: 'absolute', bottom: 50, right: 0, left: 0, marginLeft: 'auto', marginRight: 'auto', cursor: "pointer" }}>
                            <a onClick={() => { handleScroll(workSectionRef) }}>
                                <Avatar src={DownArrow} />
                            </a>
                        </div>
                    </div>

                    <div ref={workSectionRef} style={{ paddingTop: 75 }} id="work" />

                    <WorkHistory />

                    <Container style={{ paddingBottom: '250px' }}>
                        <Typography gutterBottom variant='h3' component='h1'>Personal Projects</Typography>
                        <Grid
                            justifyContent="flex-start"
                            alignItems="center"
                            container spacing={12}
                            rowSpacing={6}
                        >
                            <ProjectCards />
                        </Grid>
                    </Container>
                </Container>

                <Container style={{ paddingBottom: '250px' }}>
                    <Typography variant='h3' component='h1'>Volunteer Work</Typography>
                    <Typography gutterBottom variant='h4' component='h1'>Game of Apps (2020 - Present)</Typography>
                    <Typography align='left' variant='body1'>I volunteer at a  asd as asd aslocally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps. I volunteer at a locally based non-profit that runs a program called the Game of Apps.</Typography>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Home;
