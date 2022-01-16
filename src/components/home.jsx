import React from "react";
import { Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { maxWidth } from "@mui/system";
import ProjectPopup from './projectPopup'
import { CardActionArea } from '@mui/material';

import { useState } from 'react'

import { Carousel } from 'react-responsive-carousel';


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
        width: '500px',
        height: '500px'
    }
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
        title: 'Space Pew Pew 1',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
        title: 'Space Pew Pew 2',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew 3',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew 4',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew 5',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
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
    const [scroll, setScroll] = React.useState('paper');
    const [title, setTitle] = React.useState('');

    const handleClickOpen = (scrollType, title) => () => {
        setOpen(true);
        setScroll(scrollType);
        setTitle(title);
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
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </div>




            <Card sx={{ maxWidth: 345, minWidth: 200 }} className={classes.projectCard}>
                <CardActionArea onClick={handleClickOpen('paper', projectList.title)}>
                    <CardHeader
                        title={projectList.title}
                        subheader={projectList.subtitle}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={projectList.image}
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
            </div>
        </ThemeProvider>
    );
};

export default Home;

