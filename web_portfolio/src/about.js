import React, { Component } from 'react';
import './about.css';

class About extends Component {
    message = `
        Hello, thank you for viewing my portfolio! I am an honors computer science
        student at the University of Florida who is passionate about the areas of FinTech
        and game development. I am pursuing minors in economics and mathematics because I
        love the versatility those fields add to my computer science knowledge. I currently
        showcase a list of my projects on this portfolio and will include other significant
        moments or creations from my university education journey. 

        I have recently completed an internship in Singapore where I learned many fundamental aspects
        of blockchain, Python libraries, web development, and more.
        
        Please contact me with any inquiries!
    `;

    render() {
        return(
            <div className='about'>
                <h1 className='aboutTitle'>About</h1>
                <div className='aboutMessage'>
                    <h1>{this.message}</h1>
                </div>
            </div>
        );
    }
};

export default About;