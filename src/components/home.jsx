import React from "react";
import { Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const projectList = [
    {
        title: 'Space Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
        title: 'Space Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        title: 'Space Pew Pew',
        subtitle: 'Summer 2021',
        description: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
]

let projects = projectList.map((doc, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ maxWidth: 345, minWidth: 200 }}>
            <CardHeader


                title="Space Pew Pew"
                subheader="Summer 2021"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Paella dish"
            />
            <CardContent >
                <Typography variant="body2" color="text.secondary">
                    Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!
                </Typography>
            </CardContent>

        </Card>
    </Grid>));

function Home() {
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
                    <div style={{paddingBottom: '250px' }}>
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
                                    <Card sx={{ maxWidth: 500 }}>

                                        <CardContent>
                                            <Typography variant="h6">
                                                Web Developer (Co-op)
                                            </Typography>
                                            <Typography gutterBottom variant='h8'>Bank of Canada</Typography>
                                            <Typography variant="body2">
                                                Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Card sx={{ maxWidth: 500 }}>

                                        <CardContent>
                                            <Typography variant="h6">
                                                Web Developer (Summer Intern)
                                            </Typography>
                                            <Typography gutterBottom variant='h8'>Institute of Applied Design and Technology Education Society</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow
                                            </Typography>
                                        </CardContent>

                                    </Card>
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
                                    <Card sx={{ maxWidth: 500 }}>

                                        <CardContent>
                                            <Typography variant="h6">
                                                iOS Developer (Summer Intern)
                                            </Typography>
                                            <Typography gutterBottom variant='h8'>Institute of Applied Design and Technology Education Society</Typography>
                                            <Typography variant="body2" >
                                                Worked on maintaining and updating the 5 internal and external sites hosted by the Bank of Canada. Introduced quality of life changes to the PHP component library to allow
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div >
                        <Typography gutterBottom variant='h3' component='h1'>Personal Projects</Typography>

                        <Grid
                            justifyContent="flex-start"
                            alignItems="center"
                            container spacing={12}
                            rowSpacing={6}
                        >
                            {projects}
                        </Grid>
                    </div>

                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Home;

