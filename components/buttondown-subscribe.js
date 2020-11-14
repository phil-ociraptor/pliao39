import React from "react";

const ButtondownSubscribe = () => (
  <div>
    <div className="buttondown-container">
      <p>Get these notes delivered to your inbox:</p>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/pliao39"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://buttondown.email/pliao39', 'popupwindow')"
        className="embeddable-buttondown-form"
      >
        <input
          className="bd-email-input"
          placeholder="Your email"
          type="email"
          name="email"
          id="bd-email"
        ></input>
        <input type="hidden" value="1" name="embed"></input>
        <input
          className="bd-submit-button"
          type="submit"
          value="Subscribe"
        ></input>
      </form>
    </div>

    <style jsx>{`
      .buttondown-container {
        margin: 20px 10px;
      }
      .bd-email-input {
        font-size: 14px;
        padding: 0 10px;
        height: 36px;
        margin: 0 10px 0 auto;
        -webkit-appearance: none;
        border: 1px solid #c8d4e5;
        color: var(--gray4);
        border-radius: 0;
        width: 50%;
      }
      .bd-submit-button {
        padding: 10px 10px;
        font-size: 14px;
        text-decoration: none;
        text-align: center;
        font-weight: 600;
        background: #fa9a00;
        margin: 0;

        transition: background 0.2s ease;
        border: 0;
      }
      .bd-submit-button:hover {
        cursor: pointer;
        background: #ffb845;
      }
    `}</style>
  </div>
);

export default ButtondownSubscribe;
