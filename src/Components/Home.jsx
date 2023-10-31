import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <img src="Resources/SuvanHeadshot.jpg" alt="Suvan Dommeti" className="profile-pic" />
            <h1>👋🏽 Hey! I'm Suvan Dommeti.</h1>
            <h2>Im currrently studying Computer Science and Data Analytics at The Ohio State University</h2>
            <hr></hr>
            <p>
                Since the start of my academic journey at The Ohio State University, I've been passionate about exploring the intersections between technology and social sciences. Today, as a junior set to graduate in May of 2025, my enthusiasm remains unabated as I continue to take on interships and research in this ever growing field.
            </p>
            <p>
                While the digital world fascinates me, I'm equally intrigued by the real world around us. I'm an avid climber and origami enthusiast. Since 2020 (The midst of Covid) ive folded over 3000 paper cranes, every set of 1000 marking a year in my life.
            </p>
            <h2>Current Projects 🚀</h2>
            <p>
                As an art enthusiast, I'm working on an interactive tool aimed at photographers. Titled "The Colors of You", this tool allows photographers to input a set of images. From there, it extracts the predominant colors they work with and presents a visually appealing story. It's more than just analytics; it's about understanding and showcasing an artist's unique palette.
            </p>
            <h2>Academic & Professional Journey 🎓</h2>
            <p>
                During the course of my time at OSU ive been able to take quite a few classes that have advanced my knowledge in the field of computer science, data science, etc. Some of my favorites include:
            </p>
            <ul>
                <li>Foundations 1: Data Structures and Algorithms</li>
                <li>Software 1 & Software 2: Object-Oriented Programming</li>
                <li>Probability & Statistical Inference for Data Analytics</li>
                <li>Intermediate Macroeconomics</li>
                <li>Data in Money and Banking</li>
                <li>Chocolate Science (A delightful experience where I got to savor chocolate every class!)</li>
            </ul>
        </div>
    );
};

export default Home;
