import React from 'react';


const Resume = () => {


    const style  = {
        marginTop: "100px" /* Adjust this value to set the desired spacing */
    }
    
    return (
        <div className="resume-section" style ={style}>
            <iframe title = "resume" src="/Resources/Website_Resume.pdf" width="100%" height="1000px"></iframe>
        </div>
        
    );
    
};





export default Resume;
