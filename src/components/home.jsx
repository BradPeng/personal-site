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
import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './projectCarousel.css' 

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
        title: 'Web Developer (Co-op)',
        subtitle: 'Bank of Canada',
        description: 'Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow',
    },
    {
        title: 'Web Developer (Summer Intern)',
        subtitle: 'Institute of Applied Design and Technology Education Society',
        description: 'Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow',
    },
    {
        title: 'iOS Developer (Summer Intern)',
        subtitle: 'Institute of Applied Design and Technology Education Society',
        description: 'Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow',
    }
]


const projectList = [
    {
        title: 'Bruce Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Bruce Pew Pew was the first game I developed using the Game Maker Studio 2 Engine. Written in the Game Maker Language (GML), which is similar to JavaScript, the development process of Bruce Pew Pew taught me the fundamentals I needed to know to develop games. Despite being a very simple game, I was able to learn about various game development techniques, such as handling precise movement and animation tricks done with sprites.',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
    {
        title: '2D Platforming RPG',
        subtitle: 'Fall 2021',
        description: 'Jump around, destroy enemies and explore in this 2D platforming RPG!',
        descriptionLong: "This game was the result of my second adventure with Game Maker Studio 2. I've always wanted to make an rpg style game, and a 2D platforming approach seemed like the perfect way to tackle my ideas, as well as learn some new game development tricks. The most important aspect of a platformer is the player movement. I wanted to have multiple attacks and precise movement, so I had to find a clever way to write maintainable code. That's where the player states come in. Every movement the player can do is associated with a so-called player state. In each specific state, the player can only perform certain actions. This way, I isolate movement of the player depending on the state, allowing for my to easily code the specific movements I want. I also had the opportunity to play with some simple math functions while coding the enemy AI. I was able to implement very basic parabolas into the spider's arched movements, as well as do some basic trig to make the bat enemy fly at the player at a constant speed.",
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]

    },
    {
        title: 'Space Pew Pew 3',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
    {
        title: 'Space Pew Pew 4',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
    {
        title: 'Space Pew Pew 5',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        images: ["https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"]
    },
]


function Home() {
    const classes = useStyles();
    const [buttonPopup, setButtonPopup] = useState(false);
    let workHistory = workHistoryList.map((workHistoryList, index) => (
        <Card sx={{ maxWidth: 500 }} className={classes.timelineCard}>
            <CardContent key='{'>
                <Typography variant="h6">
                    {workHistoryList.title}
                </Typography>
                <Typography gutterBottom variant='h8'>
                    {workHistoryList.subtitle}
                </Typography>
                <Typography variant="body2">
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
            <div>
                <Dialog
                    PaperProps={{
                        style: {
                            backgroundColor: 'clear',
                            boxShadow: 'none',
                        },
                    }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <Carousel className='project-carousel'>
                            {images.map((image) => (
                                <div key={title}>
                                    <img src={image} />
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
            </div>

            <Card sx={{ maxWidth: 345, minWidth: 200 }} className={classes.projectCard}>
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


    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Container>
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

                    <div style={{ paddingBottom: '250px' }}>
                        <Typography variant='h3' component='h1'>Work History</Typography>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent >
                                    <Typography variant='h6'>
                                        September 2021 - April 2022
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    {workHistory[0]}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    {workHistory[1]}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant='h6'>
                                        July 2020 - August 2020
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent >
                                    <Typography variant='h6'>
                                        July 2018 - August 2018
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="success" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    {workHistory[2]}
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
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
            </div>
        </ThemeProvider>
    );
};

export default Home;

