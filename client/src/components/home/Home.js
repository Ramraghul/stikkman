// Required Package Import;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCourse, fetchCourseById } from '../../redux/actions/productAction';
import { Card, CardContent, CardActions, Button, Typography, Grid, makeStyles } from '@material-ui/core';
import Loading from '../loading/Loading';


//Style;
const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: theme.spacing(3),
        boxShadow: '0 8px 16px 0 rgba(0,0,10,0.2)',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0 12px 20px 0 rgba(0,0,0,0.2)',
            transform: 'translateY(-4px)',
        },

    },
    cardContent: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    categoryTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    cardMedia: {
        height: 200,
        backgroundSize: 'cover',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    },
}));

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { AllCourses, loading } = useSelector((state) => state.course);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchCourse());
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(fetchCourseById(id));
        navigate(`/course/${id}`);
    };

    if (loading) {
        <Loading />
    }

    //Return Component;
    return (
        <div className="home-page" style={{marginTop:30 }}>
            <Grid container spacing={2}>
                {AllCourses.map(course => (
                    <Grid item key={course.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2" className={classes.categoryTitle}>
                                    {course.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    Author: {course.author}
                                </Typography>
                                <Typography color="textSecondary">
                                    Created At: {new Date(course.createdAt).toLocaleDateString()}
                                </Typography>
                                <img src={course.thumbnail} alt={course.name} className={classes.cardMedia} />
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleClick(course.id)}>
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

//Home Export;
export default Home;
