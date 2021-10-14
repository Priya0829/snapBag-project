import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
const App = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container className={classes.wrapper} maxwidth = "lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">SnapBag</Typography>
                <img className={classes.image} src={memories} alt="memories" height="50" />
            </AppBar>
            <Grow in>
                <Container className={classes.wrapper}>
                    <Grid className={classes.mainContainer} container justify = "space-between" alignItems="stretch" spacing={3}>
                        <Grid className={classes.container} item xs={12} md={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Form currentId = {currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;