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
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DownArrow from '../images/downarrow.png';
import ARPG0 from '../project-images/adventurerpg_images/ARPG_img_0.png';
import ARPG1 from '../project-images/adventurerpg_images/ARPG_img_1.png';
import ARPG2 from '../project-images/adventurerpg_images/ARPG_img_2.png';
import ARPG3 from '../project-images/adventurerpg_images/ARPG_img_3.png';
import ARPG4 from '../project-images/adventurerpg_images/ARPG_img_4.png';
import ARPG5 from '../project-images/adventurerpg_images/ARPG_img_5.png';
import ARPG6 from '../project-images/adventurerpg_images/ARPG_img_6.png';
import BPP1 from '../project-images/brucepewpewimages/BPP_img_1.png';
import BPP2 from '../project-images/brucepewpewimages/BPP_img_2.png';
import BPP3 from '../project-images/brucepewpewimages/BPP_img_3.png';
import GOA1 from '../project-images/GOA1_images/GOA1_img_1.png';
import GOA2 from '../project-images/GOA1_images/GOA1_img_2.png';
import GOA3 from '../project-images/GOA1_images/GOA1_img_3.png';
import GOA4 from '../project-images/GOA1_images/GOA1_img_4.png';
import GOA5 from '../project-images/GOA1_images/GOA1_img_5.png';
import GOA6 from '../project-images/GOA1_images/GOA1_img_6.JPG';
import PS1 from '../project-images/personal_site_images/personalSite_img_1.png';
import './projectCarousel.css';

const useStyles = makeStyles({
    timelineCard: {
        '&:hover': {
            transition: "transform .2s ease-in-out",
            transform: "scale(1.03)"
        },
    },

    projectCard: {
        '&:hover': {
            transition: "transform .2s ease-in-out",
            transform: "scale(1.05)"
        },
    },
    projectCarousel: {
    },
});

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

const projectList = [
    {
        title: '2D Platforming RPG (Game Maker)',
        subtitle: 'Fall 2021',
        description: 'Jump around, destroy enemies and explore in this 2D platforming RPG!',
        descriptionLong: "This game was the result of my second adventure with Game Maker Studio 2. I've always wanted to make an rpg style game, and a 2D platforming approach seemed like the perfect way to tackle my ideas, as well as learn some new game development tricks. The most important aspect of a platformer is the player movement. I wanted to have multiple attacks and precise movement, so I had to find a clever way to write maintainable code. That's where the player states come in. Every movement the player can do is associated with a so-called player state. In each specific state, the player can only perform certain actions. This way, I isolate movement of the player depending on the state, allowing for my to easily code the specific movements I want. I also had the opportunity to play with some simple math functions while coding the enemy AI. I was able to implement very basic parabolas into the spider's arched movements, as well as do some basic trig to make the bat enemy fly at the player at a constant speed.",
        thumbnail: ARPG0,
        images: [ARPG0, ARPG1, ARPG2, ARPG3, ARPG4, ARPG5, ARPG6]

    },
    {
        title: 'Bruce Pew Pew (Game Maker)',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Bruce Pew Pew was the first game I developed using the Game Maker Studio 2 Engine. Written in the Game Maker Language (GML), which is similar to JavaScript, the development process of Bruce Pew Pew taught me the fundamentals I needed to know to develop games. Despite being a very simple game, I was able to learn about various game development techniques, such as handling precise movement and animation tricks done with sprites.',
        thumbnail: BPP1,
        images: [BPP1, BPP2, BPP3]
    },
    {
        title: 'Personal Portfolio Website (React)',
        subtitle: 'Winter 2022',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: PS1,
        images: [PS1]
    },
    {
        title: 'Student Volunteer Opportunities App (iOS)',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: GOA1,
        images: [GOA1, GOA2, GOA3, GOA4, GOA5, GOA6]
    },
    {
        title: 'Youth Financial Tracking App (iOS)',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
    {
        title: 'Reminder Manager (Java)',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
]

function Home() {
    const classes = useStyles();
    let workHistory = workHistoryList.map((workHistoryList) => (
        <Card sx={{ maxWidth: 800 }} style={{ paddingRight: 0 }} className={classes.timelineCard}>
            <CardContent key='{'>
                <Typography variant="h5">
                    {workHistoryList.title}
                </Typography>
                <Typography gutterBottom variant='h7'>
                    {workHistoryList.subtitle}
                </Typography>
                <Typography variant="body1">
                    {workHistoryList.description}
                </Typography>
            </CardContent>
        </Card>
    ));

    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState();
    const [descriptionLong, setDescriptionLong] = React.useState();
    const [images, setImages] = React.useState([]);

    const handleClickOpen = (title, descriptionLong, images) => () => {
        setOpen(true);
        setTitle(title);
        setDescriptionLong(descriptionLong)
        setImages(images)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    let projects = projectList.map((projectList, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Dialog
                open={open}
                onClose={handleClose}
                BackdropProps={{ invisible: true }}
                maxWidth='md'
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Carousel emulateTouch useKeyboardArrows swipeable className='project-carousel'>
                        {images.map((image) => (
                            <div key={title}>
                                <img style={{ maxHeight: '600px' }} src={image} />
                            </div>
                        ))}

                    </Carousel>
                    <DialogContentText>
                        {descriptionLong}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

            <Card data-aos="flip-up" sx={{ maxWidth: 345, minWidth: 200 }} className={classes.projectCard}>
                <CardActionArea onClick={handleClickOpen(projectList.title, projectList.descriptionLong, projectList.images)}>
                    <CardHeader
                        title={projectList.title}
                        subheader={projectList.subtitle}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={projectList.thumbnail}
                    />
                    <CardContent >
                        <Typography variant="body2" color="text.secondary">
                            {projectList.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>));

    useEffect(() => {
        Aos.init({ duration: 1200, delay: 100 });
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Container maxWidth='xl'>
                    <div style={{ height: "100vh", flexDirection: "column", display: "flex", justifyContent: "space-between" }}>
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
                        </div>
                        <a style={{ margin: 'auto', paddingBottom: 50, cursor: "pointer" }} onClick={() => { document.getElementById("work").scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>
                            <Avatar src={DownArrow} />
                        </a>

                    </div>

                    <div style={{ paddingTop: 75 }} id="work"></div>
                    <Container style={{ paddingBottom: '250px' }}>
                        <Typography variant='h3' component='h1'>Work History</Typography>
                        <Timeline position="alternate" style={{ paddingRight: 0 }}>
                            <TimelineItem >
                                <TimelineOppositeContent data-aos="slide-right" style={{ flex: 0.5 }}>
                                    <Typography variant='h6'>
                                        September 2021 - April 2022
                                    </Typography>
                                </TimelineOppositeContent >
                                <TimelineSeparator data-aos="fade">
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent data-aos="fade">
                                    {workHistory[0]}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem >
                                <TimelineOppositeContent data-aos="fade">
                                    {workHistory[1]}
                                </TimelineOppositeContent>
                                <TimelineSeparator data-aos="fade">
                                    <TimelineDot color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator >
                                <TimelineContent data-aos="slide-right" style={{ flex: 0.5 }}>
                                    <Typography variant='h6' >
                                        July 2020 - August 2020
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem >
                                <TimelineOppositeContent data-aos="slide-right" style={{ flex: 0.5 }}>
                                    <Typography variant='h6'  >
                                        July 2018 - August 2018
                                    </Typography>
                                </TimelineOppositeContent >
                                <TimelineSeparator data-aos="fade">
                                    <TimelineDot color="success" />
                                </TimelineSeparator>
                                <TimelineContent data-aos="fade">
                                    {workHistory[2]}
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Container>

                    <Container style={{ paddingBottom: '250px' }}>
                        <Typography gutterBottom variant='h3' component='h1'>Personal Projects</Typography>
                        <Grid
                            justifyContent="flex-start"
                            alignItems="center"
                            container spacing={12}
                            rowSpacing={6}
                        >
                            {projects}
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
