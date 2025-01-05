import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Validate form inputs
        if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
            setResult("Please fill out all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
            setResult("Please enter a valid email address.");
            return;
        }

        setResult("Sending....");

        // Append API access key
        formData.append("access_key", "bc16060d-5356-4dd0-b66c-90a0c615b992");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message || "Submission failed. Please try again.");
            }
        } catch (error) {
            setResult("An error occurred. Please check your internet connection.");
            console.error("Error:", error);
        }
    };

    return (
        <div id="Contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>amanmishra.5272@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91-8851225097</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Sector-93 Noida UP, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" name="name" />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                    {result && <p className="form-result">{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
