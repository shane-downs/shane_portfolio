import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
    createButton = ({ label }) => {
        return (
        <button className='projects_tab'>
            { label }
        </button>
        );
    }

    render() {
        return (
            <div className='banner'>
                <h1 className='welcome'>
                    Shane Downs
                </h1>
                <h2 className='subtitle'>
                    Computer Science Student at the University of Florida
                </h2>
                {this.createButton({label: 'Projects'})}
            </div>
        );
    }
};

export default Banner;