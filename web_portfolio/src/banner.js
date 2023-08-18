import React, { Component } from 'react';
import './banner.css';


class Banner extends Component {
    CreateTab = ({ label, className }) => {
        return (
        <button className={className}>
            { label }
        </button>
        );
    }

    AddImage = ({ image, altText}) => {
        return (
        <img src={image} alt={altText} />
        );
    }
    render() {
        return (
            <div className='banner'>
                <div className='bannerImage'> 
                    {this.AddImage({image: '/headshot.png', altText: 'headshot'})}
                </div>
                <h1 className='welcome'>
                    Shane Downs
                </h1>
                <h2 className='subtitle'>
                    Computer Science Honors Student at the University of Florida
                </h2>
                <h3 className='contactTitle'>
                    Contact:
                </h3>
                <div className='contactItems'>
                    <div className='glyph'>
                        {this.AddImage({image: '/phone.png', altText: 'Phone'})}
                        <a href='tel:2483031725' target="_blank" rel="noopener noreferrer">
                        <button className='phoneButton'>+1 (248) 303-1725</button></a>
                    </div>
                    <div className='glyph'>
                        {this.AddImage({image: '/email.png', altText: 'Email'})}
                        <a href='mailto:shane.downs@ufl.edu' target="_blank" rel="noopener noreferrer">
                        <button className='mailButton'>shane.downs@ufl.edu</button></a>
                    </div>
                    <div className='glyph'>
                        {this.AddImage({image: '/website.png', altText: 'Web'})}
                        <a href='https://linkedin.com/in/shanemdowns/' target="_blank" rel="noopener noreferrer">
                        <button className='profileButton'>LinkedIn Profile</button></a>
                    </div>
                </div>
                
            </div>
        );
    }
};

export default Banner;