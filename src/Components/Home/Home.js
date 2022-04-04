import React from 'react';
import './Home.css'

const Home = () => {
    return (
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
    );
};

export default Home;