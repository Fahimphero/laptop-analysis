import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useReview from '../useReview/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='mt-5'>
            <h2>More Reviews</h2>
            <CardGroup className='row gy-5 mt-1'>
                {
                    reviews.map(review =>
                        <div className='col-lg-4 col-md-6'>

                            <Card className='mx-1 border-0 h-100'>
                                <Card.Img variant="top" src={review?.picture} />
                                <Card.Body className='body card-body'>
                                    <Card.Title><h4>{review?.name}</h4></Card.Title>
                                    <Card.Text className='body-text'>
                                        {review?.body}
                                    </Card.Text>
                                    <small className='small d-flex align-items-center pb-2'>Rating: <span className='px-3 fontAwesome'> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                        {review?.stars} Star</small>
                                </Card.Body>

                            </Card>

                        </div>
                    )
                }
            </CardGroup>
        </div>
    );
};

export default Review;