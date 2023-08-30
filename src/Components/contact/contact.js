import React from "react";
import "./contact.scss";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const SERVICE_ID = "service_s6jnig5";
  const TEMPLATE_ID = "template_v0of84o";
  const PUBLIC_KEY = "-4MONUZczTpciKZgL";
  const url = "https://api.emailjs.com/api/v1.0/email/send";

  const form = useForm();
  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    // e.preventDefault();
    let body = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        ...data,
      },
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(url, requestOptions)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">
        Get In <span className="contact-sub">Touch</span>
      </h1>
      <div className="wrapper">
        <div className="contact-details">
          <h2 className="contact-heading contact-sub contact-sub1">Contact Details</h2>
          <div className="contact-info">
            <a
              href="https://www.facebook.com/kamal19milak?mibextid=9R9pXO"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fab fa-facebook icon-class"></i>
              </span>{" "}
              &nbsp;Facebook
            </a>
            <a
              href="https://instagram.com/puneet_98_?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fab fa-instagram icon-class"></i>
              </span>{" "}
              &nbsp;Instagram
            </a>
            <a href="mailto:puneetpandey311@gmail.com">
              <span>
                <i className="fas fa-envelope-open icon-class"></i>
              </span>
              &nbsp; puneetpandey311@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/puneet-pandey-837854153"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fab fa-linkedin icon-class"></i>
              </span>
              &nbsp; LinkdIn
            </a>
            <a
              href="https://github.com/Puneet311"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <i className="fab fa-github icon-class"></i>
              </span>
              &nbsp; Puneet311
            </a>
            <a href="address.com" target="_blank" rel="noreferrer">
              {" "}
              <span>
                <i className="fas fa-address-card icon-class"></i>
              </span>
              &nbsp; Milak Rampur UP
            </a>
            <a href="phone.com" target="_blank" rel="noreferrer">
              <span>
                <i className="fas fa-mobile-alt icon-class"></i>
              </span>
              &nbsp; 7065544824
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="contact-heading contact-sub contact-sub1">
            Let's connect.{" "}
            <span>
              <i className="fas fa-comment"></i>
            </span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-info2">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email-id:</label>
                <input
                  type="email"
                  placeholder="abcd@xyz.com"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="number"
                  placeholder="XXXXXXX456"
                  {...register("phone")}
                  required
                />
              </div>
              <div className="form-group">
                <label>Type your message:</label>
                <textarea
                  placeholder="write some message for me."
                  {...register("message")}
                ></textarea>
              </div>
              <div>
                <button className="btn">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
