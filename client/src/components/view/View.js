import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardMedia, CardHeader, makeStyles } from '@material-ui/core';
import Loading from '../loading/Loading';
import { deleteCourseById } from '../../redux/actions/productAction';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

function View() {
    const classes = useStyles();
    const { viewCourse, loading } = useSelector(state => state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this course!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCourseById(viewCourse.id));
                Swal.fire(
                    'Deleted!',
                    'Your course has been deleted.',
                    'success'
                ).then(() => {
                    navigate('/');
                });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <Card style={{ maxWidth: 400, margin: 'auto',marginTop:50 }}>
            <CardHeader title={viewCourse.name} />
            <CardMedia
                component="img"
                alt={viewCourse.name}
                height="140"
                image={viewCourse.thumbnail}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Author: {viewCourse.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {viewCourse.description}
                </Typography>
                <div className={classes.buttonWrapper}>
                    <Button variant="contained" color="secondary" onClick={handleDelete}>
                        Delete Course
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default View;
