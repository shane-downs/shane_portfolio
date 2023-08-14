import React, { Component } from 'react';
import './banner.css';
import phone from './images/phone.png';
import email from './images/email.png';
import web from './images/website.png';
import headshot from './images/headshot.png';


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
                    {this.AddImage({image: headshot, altText: 'headshot'})}
                </div>
                <h1 className='welcome'>
                    Shane Downs
                </h1>
                <h2 className='subtitle'>
                    Computer Science Student at the University of Florida
                </h2>
                <h3 className='contactTitle'>
                    Contact:
                </h3>
                <div className='contactItems'>
                    <div className='glyph'>
                        {this.AddImage({image: phone, altText: 'Phone'})}
                        <a href='tel:2483031725' target="_blank" rel="noopener noreferrer">
                        <button className='phoneButton'>+1 (248) 303-1725</button></a>
                    </div>
                    <div className='glyph'>
                        {this.AddImage({image: email, altText: 'Email'})}
                        <a href='mailto:shane.downs@ufl.edu' target="_blank" rel="noopener noreferrer">
                        <button className='mailButton'>shane.downs@ufl.edu</button></a>
                    </div>
                    <div className='glyph'>
                        {this.AddImage({image: web, altText: 'Web'})}
                        <a href='https://linkedin.com/in/shanemdowns/' target="_blank" rel="noopener noreferrer">
                        <button className='profileButton'>LinkedIn Profile</button></a>
                    </div>
                </div>
                
            </div>
        );
    }
};

export default Banner;