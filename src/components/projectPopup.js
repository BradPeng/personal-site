import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    popup: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },

    popupInner: {
        position: 'relative',
        padding: '32px',
        width: "100%",
        maxWidth: '640px',
        backgroundColor: 'white'
    },

    closeButton: {
        position: 'absolute',
        top: '16px',
        right: '16px',
    }
});

function ProjectPopup(props) {
    const classes = useStyles();

    return (props.trigger) ? (
        <div className={classes.popup}> 
            <div className={classes.popupInner}>
                <button onClick={()=> props.setTrigger(false)} className={classes.closeButton}>close</button>
                { props.children}
            </div>
            
        </div>
    ) : "";
}

export default ProjectPopup
