import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
    minesweeper = {
        title: 'Minesweeper',
        thumbnail: <img src='/minesweeper.png' alt='minesweeperImg' />,
        description: `
            My take on the classic Minesweeper logic puzzle game created by Microsoft in 1989.
            This project was created with the SFML library using C++. 
        `,
        date: 'April 2023',
        githubLink: <a href='https://github.com/shane-downs/MinesweeperSpring2023' target="_blank" rel="noopener noreferrer">
        <button className='githubLink'>Minesweeper Github Repository</button></a>
    }

    createProject = (project) => {
        return (
            <div className='p'>
                <div className='pTitle'>
                    {project.title}
                </div>
                <div className='pThumbnail'>
                    {project.thumbnail}
                </div>
                <div className='pDescription'>
                    {project.description}
                </div>
                <div className='pDate'>
                    {project.date}
                </div>
                <div className='pGithub'>
                    {project.githubLink}
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <div className='projectSection'>
                <h1 className='title'>Projects</h1>
                {this.createProject(this.minesweeper)}
            </div>
        );
    }
};

export default Projects;