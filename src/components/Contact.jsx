import React from "react";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="Abc" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" required placeholder="Abc@gmail.com" />
          </div>
          <div>
            <label htmlFor="">About</label>
            <input type="text" required placeholder="Tell us about yourself" />
          </div>
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
