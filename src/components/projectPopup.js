import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    popup: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
});

function ProjectPopup(props) {
    const classes = useStyles();

    return (props.trigger) ? (
        <div className={classes.popup}> 
                { props.children}
        </div>
    ) : "";
}

export default ProjectPopup
