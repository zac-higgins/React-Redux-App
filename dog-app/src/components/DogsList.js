import React from 'react';
import { connect } from "react-redux";
import { fetchDogs } from "../actions";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90vw',
        maxWidth: "1000px",
        margin: 25,
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        margin: 12
    },
    bar: {
        direction: "row",
        justify: "center",
        alignItems: "center",
    }
}));

function DogsList(props) {
    console.log("DogsList", props);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit">
                        We ❤️ Dogs🐶
                    </Typography>
                </Toolbar>
            </AppBar>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => props.dispatch(fetchDogs())}
            >
                Click here for labs!
            </Button>
            {props.isFetching && <Typography variant="h3" color="inherit">Fetching Doggos...</Typography>}
            {props.error && <div>{props.error.message}</div>}
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {props.dogs.map(dog => {
                    return (
                        <Grid item xs={6}>
                            <Card className={classes.card} key={dog}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Labrador Retriever"
                                        height="auto"
                                        image={dog}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href={dog} target="_blank">View Original Image</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}

// const mapDispatchToProps = {
//     fetchDogs
// };

export default connect(state => {
    return state;
})(DogsList);