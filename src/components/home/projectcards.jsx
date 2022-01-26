import { CardActionArea, Container, Typography } from '@mui/material';
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
import { makeStyles } from '@mui/styles';
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
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
import GOA6 from '../../project-images/GOA1_images/GOA1_img_6.png';
import GOA2_1 from '../../project-images/GOA2_images/goa2_1.png';
import GOA2_2 from '../../project-images/GOA2_images/goa2_2.png';
import GOA2_3 from '../../project-images/GOA2_images/goa2_3.png';
import GOA2_4 from '../../project-images/GOA2_images/goa2_4.png';
import GOA2_5 from '../../project-images/GOA2_images/goa2_5.png';
import GOA2_6 from '../../project-images/GOA2_images/goa2_6.png';
import RMA1 from '../../project-images/JavaReminderProject/javaprojec_img1.png';
import RMA2 from '../../project-images/JavaReminderProject/javaprojec_img2.png';
import RMA3 from '../../project-images/JavaReminderProject/javaprojec_img3.png';
import RMA4 from '../../project-images/JavaReminderProject/javaprojec_img4.png';
import PS1 from '../../project-images/personal_site_images/personalSite_img_1.png';

const useStyles = makeStyles({
    projectCard: {
        '&:hover': {
            transition: "transform .2s ease-in-out",
            transform: "scale(1.05)"
        },
    },
    projectCarousel: {
    },
});

const projectList = [
    {
        title: '2D Platforming RPG (Game Maker)',
        subtitle: 'Fall 2021',
        description: 'Jump around, destroy enemies and explore in this 2D platforming RPG!',
        descriptionLong: "This game resulted from my second adventure with Game Maker Studio 2. I've always wanted to make an RPG-style game, and a 2D platforming approach seemed like the perfect way to tackle my ideas, as well as learn some new game development tricks. The most important aspect of a platformer is the player movement. I wanted to have multiple attacks and precise movement, so I had to find a clever way to write maintainable code. That's where the player states come in. Every move the player can make is associated with a so-called player state. In each specific state, the player can only perform certain actions. This way, I isolate the player's movement depending on the state, allowing me to effortlessly code the specific movements I want. I also had the opportunity to play with some simple math functions while coding the enemy AI. For example, I implemented basic parabolas into the spider's arched movements and did some basic trigonometry to make the bat enemy fly toward the player at a constant speed.",
        thumbnail: ARPG0,
        images: [ARPG0, ARPG1, ARPG2, ARPG3, ARPG4, ARPG5, ARPG6]

    },
    {
        title: 'Bruce Pew Pew (Game Maker)',
        subtitle: 'Summer 2021',
        description: 'Play a fun arcade-style 2D top-down shooting game!',
        descriptionLong: 'Bruce Pew Pew was the first game I developed using the Game Maker Studio 2 Engine. Written in the Game Maker Language (GML), which is similar to JavaScript, the development process of Bruce Pew Pew taught me the fundamentals I needed to know to develop games. Despite being a straightforward game, I learned about various game development techniques, such as handling precise movement and animation tricks done with sprites. This was the first time I had the opportunity to bring my creative ideas to life. I had a lot of fun coming up with enemy types, enemy attacks and powerups. The result, while simple, is an enjoyable game that I enjoyed playing with my friends. This also cemented in me a love for game development, and I plan to pursue more projects in the future.',
        thumbnail: BPP1,
        images: [BPP1, BPP2, BPP3]
    },
    {
        title: 'Personal Portfolio Website (React)',
        subtitle: 'Winter 2022',
        description: 'A portfolio website made with React to display my projects through a visual medium.',
        descriptionLong: "During my internship with the Institute of Applied Design and Technology Education Society, I learned how to use the Material UI library and React. It had been a while since I worked with React. Since I happen to be looking for work, creating a portfolio website seemed like the perfect way to get some practice in while also showing off some of my abilities. This site was primarily built with Material UI, a React component library created with Google's Material Design principles in mind. \n Using the Material UI components as a base, I made more complex compound components that this project is built on. Throughout the development of the project, I was able to play with React states, React hooks and React refs, which let me dive a little bit deeper into the capabilities of React. I also played with some CSS overriding, which was excellent practice. I also had the opportunity to deploy a website for the first time. I bought the domain through Google domains, and I am hosting the website using Github Pages.",
        thumbnail: PS1,
        images: [PS1]
    },
    {
        title: 'Student Volunteer Opportunities App (iOS)',
        subtitle: 'Fall 2017',
        description: 'A simple app for students to find volunteer opportunities.',
        descriptionLong: "This project resulted from my first year participating in the Game of Apps program - an iOS app design and development. The theme of this year's competition was \"Making a Change,\" and we decided to embody that idea by creating an app that would enable anyone to make an impact on the world. Being my first significant exposure to programming, I learned a lot from experience. Starting from basic coding principles like variables, loops and conditionals, I then moved on to more complex iOS development tools like optional values, structures, and Storyboarding. More specifically, I learned a lot about using reusable cell elements. I remember spending many hours learning how to create table view cells and mapping data from a list onto them. Being on a team with two other developers, I also had a chance to learn how to use git. Git was quite terrifying at first, but being able to freely execute commands in my project made me feel a lot more confident when I moved on to using git in company work during my internships. By the end of the hackathon, our team received an award for the best-designed app. Unfortunately, the application has been lost to time, and I could only recover some images of the project mockups we made in Figma, which are the pictures displayed in the carousel above.",
        thumbnail: GOA1,
        images: [GOA1, GOA2, GOA3, GOA4, GOA5, GOA6]
    },
    {
        title: 'Youth Financial Tracking App (iOS)',
        subtitle: 'Fall 2018',
        description: 'A lightweight application that teaches youth financial tracking habits.',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: GOA2_1,
        images: [GOA2_1, GOA2_2, GOA2_6, GOA2_3, GOA2_4, GOA2_5]
    },
    {
        title: 'Desktop Reminder Manager (Java)',
        subtitle: 'Fall 2020', 
        description: 'A project for a Software Construction Course made with object oriented design principles.',
        descriptionLong: 'Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!Shoot my friend bruce in a fun arcade-style 2D top-down shooting game!',
        thumbnail: RMA2,
        images: [RMA1, RMA2, RMA3, RMA4]
    },
]


function ProjectCards() {
    const classes = useStyles();

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
        </Container >


    );
};

export default ProjectCards;
