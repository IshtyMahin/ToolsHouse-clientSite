import React from "react";

const ContactUs = () => {
  return (
    <div class=" bg-base-200 p-16 mt-12">
      <div class=" flex flex-col lg:flex-row">
        <div class="text-center flex flex-col w-full align-center justify-center">
          <h3 class="text-5xl  mb-12">Contact With Us</h3>
          <p>Email:  manufacture@gmail.com</p>
          <p>phone number: 01843336009</p>
        </div>
        <div class="card  w-full  shadow-2xl bg-base-100">
          <div class="card-body w-50">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-bordered"
              />
              <label class="label"></label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea
                className="w-100 from-control "
                id="message"
                name="message"
              
                rows="5"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
