import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lraefav', 'template_dsqe33q', form.current, 'H3CtZnzy3MGNBSb24')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    // Styles
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        fontFamily: 'Arial, sans-serif'
    };

    const labelStyle = {
        color: '#555',
        marginBottom: '10px'
    };

    const inputStyle = {
        padding: '10px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '100%'
    };

    const submitButtonStyle = {
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    const socialLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    };

    const linkStyle = {
        margin: '0 10px',
        color: '#555',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
    };

    return (
        <div style={containerStyle}>
            <h1>Contact</h1>
            <p>Feel free to reach out to me! I'm always open to discussing new projects, opportunities, or any other inquiries.</p>
            <form ref={form} onSubmit={sendEmail}>
                <label style={labelStyle}>Name</label>
                <input type="text" name="user_name" style={inputStyle} />
                <label style={labelStyle}>Email</label>
                <input type="email" name="user_email" style={inputStyle} />
                <label style={labelStyle}>Message</label>
                <textarea name="message" style={inputStyle} />
                <input type="submit" value="Send" style={submitButtonStyle} />
            </form>
            <div style={socialLinksStyle}>
                <a href="https://www.linkedin.com/in/suvan-dommeti/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
                <a href="https://www.instagram.com/Suvan_Dommeti/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
            </div>
        </div>
    );
};

export default Contact;
