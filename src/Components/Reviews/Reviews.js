import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import useReview from '../useReview/useReview';
import './Review.css'

const Reviews = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReview();
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='row gx-5 mx-3 mt-5'>

                <div className='col-lg-6'>
                    <h1 className='colorful1'>The Next Gen Laptop</h1>
                    <h1 className='colorful2 mb-3'>Laptop for Student, Freelancer and Content Creator</h1>
                    <p>Hey guys Now you are in the right and trusted tech place. Are you looking for an authentic Laptop shop and a good Laptop within your budget? But hesitating to select, what would be the best. Don't worry, Gold Tech Continuing 14 years of selling branded Laptops such as Razer, Apple, Asus, Acer, HP, Dell, Lenovo, Microsoft, MSI, Gigabyte, i-Life and Chuwi.</p>
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src="https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?t=st=1649076571~exp=1649077171~hmac=874cc870f4335aab3b8edc79c13c627064eee095adb7a9c6ca9613c5e1f576a4&w=996" alt="" />
                </div>


            </div>
            <div className='mt-5'>
                <h2>Customer Reviews: 3</h2>

                <CardGroup className='mx-4'>
                    <Card className='mx-1 border-0'>
                        <Card.Img variant="top" src={reviews[5]?.picture} />
                        <Card.Body className='body'>
                            <Card.Title>{reviews[5]?.name}</Card.Title>
                            <Card.Text>
                                {reviews[5]?.body}
                            </Card.Text>
                            <small className='small'>Rating: {reviews[0]?.stars} Stars</small>
                        </Card.Body>

                    </Card>
                    <Card className='mx-1 border-0'>
                        <Card.Img variant="top" src={reviews[1]?.picture} />
                        <Card.Body className='body'>
                            <Card.Title>{reviews[1]?.name}</Card.Title>
                            <Card.Text>
                                {reviews[1]?.body}
                            </Card.Text>
                            <small className='small'>Rating: {reviews[1]?.stars} Stars</small>
                        </Card.Body>

                    </Card>
                    <Card className='mx-1 border-0'>
                        <Card.Img variant="top" src={reviews[4]?.picture} />
                        <Card.Body className='body'>
                            <Card.Title>{reviews[4]?.name}</Card.Title>
                            <Card.Text>
                                {reviews[2]?.body}
                            </Card.Text>
                            <small className='small'>Rating: {reviews[2]?.stars} Stars</small>
                        </Card.Body>

                    </Card>
                </CardGroup>
                <Button onClick={() => navigate('/reviews')} className='button mt-5'>See All Reviews</Button>{' '}

            </div>
        </div>
    );
};

export default Reviews;