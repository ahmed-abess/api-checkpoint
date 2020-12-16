import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },

}));

const UserItem=(props)=>{
    const classes=useStyles();
    const  {user}=props

return(
    <Grid xs={4} item   >
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="avatar.jpg"
                    title="avatar"
                />
                <CardContent opacity={0.2} >
                    <Typography gutterBottom variant="h5" component="h2">
                        {user[1].name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    email: {user[1].email} <br/>
                    phone:{user[1].phone}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Open
                </Button>

            </CardActions>
        </Card>
    </Grid>
)
};

export default UserItem;
