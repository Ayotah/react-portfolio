import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "dd013055-f973-4f48-846e-d0b18817c6a7");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Try again.");
    }
  }

  return (
    <main className="contact">
      <div className="contact__info">
        <p className="contact__eyebrow">Get In Touch</p>
        <h1 className="contact__title">Let's start a conversation</h1>
        <p className="contact__desc">
          Have a question or want to collaborate? Fill out the form and we'll get back to you.
        </p>
      </div>

      <div className="contact__form-wrap">
        <form className="contact__form" onSubmit={handleSubmit}>

          <div className="form__group">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Jane Smith" required />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="form__group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What's this about?" />
          </div>

          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5}
              placeholder="Write your message here…" required />
          </div>

          <button type="submit" className="contact__submit">
            Send Message →
          </button>

          {status && <p className="contact__status">{status}</p>}

        </form>
      </div>
    </main>
  );
}