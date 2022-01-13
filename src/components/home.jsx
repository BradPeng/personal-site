import React from "react";
import { Typography } from '@mui/material';

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

function Home() {

    return (


        <div className="App">
            <div className='aboutMe'>
                <Grid container spacing={50}>
                    <Grid item xs={16}>
                        <Item>
                            <Typography variant='h3'>Brad Peng</Typography>
                        </Item>
                        <Item>
                            <Typography variant='h5'>Computer Science, The University of British Columbia (2019 - 2024)</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={16}>
                        <Item>
                            <Typography variant='h3'>Work History</Typography>
                        </Item>
                        <Item>
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
                                        <Card sx={{ maxWidth: 345 }}>

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
                                        <Card sx={{ maxWidth: 345 }}>

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
                                    <TimelineContent><Card sx={{ maxWidth: 345 }}>

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
                        </Item>

                        <Item>
                            <Typography variant='h3'>Projects</Typography>
                        </Item>
                    </Grid>
                </Grid>

            </div>


        </div>
    );
};

export default Home;

