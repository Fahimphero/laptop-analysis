import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mt-5' style={{ display: 'flex', flexDirection: 'column' }}>
            <h6>Copyright © 2022 || <span style={{ color: 'blue' }}>popular-laptop-analysis.netlify.app</span> </h6>
            <h6 className='mt-1'>Khulna, Bangladesh</h6>
            <small className='mt-1'>All Rights Reserved</small>
        </div>
    );
};

export default Footer;