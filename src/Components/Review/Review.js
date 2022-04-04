import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useReview from '../useReview/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='mt-5'>
            <h2>Customer Reviews: {reviews.length}</h2>
            <CardGroup className='mx-4'>
                {
                    reviews.map(review =>
                        <Card className='mx-1 border-0'>
                            <Card.Img variant="top" src={review?.picture} />
                            <Card.Body className='body'>
                                <Card.Title>{review?.name}</Card.Title>
                                <Card.Text>
                                    {reviews[5]?.body}
                                </Card.Text>
                                <small className='small'>Rating: {review?.stars} Stars</small>
                            </Card.Body>

                        </Card>

                    )
                }
            </CardGroup>

        </div>
    );
};

export default Review;