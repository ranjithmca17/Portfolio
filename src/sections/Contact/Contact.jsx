


import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Import Email.js library
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef(); // Create a reference for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the form data using Email.js
    emailjs
      .sendForm(
        "service_7o3yyf9", // Service ID
        "template_hlqouav", // Template ID (replace with your template ID)
        form.current, // Form reference
        "knxdft_xa8s1jaPC4" // User ID (replace with your user ID)
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Message sent successfully!"); // Show success message
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again."); // Show error message
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name" // Ensure this matches the template variable
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email" // Ensure this matches the template variable
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message" // Ensure this matches the template variable
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className={`${styles.btn} hover`} type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;