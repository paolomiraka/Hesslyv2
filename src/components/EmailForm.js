import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import * as styles from "./EmailListForm.module.scss";

const EmailListForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        // alert(data.result);
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <h2>Subscribe to our newsletter</h2>
      <div className={styles.Wrapper}>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;
