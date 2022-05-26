import React from "react";

const ContactUs = () => {
  return (
    <div className=" bg-base-200 p-16 mt-12">
      <div className=" flex flex-col lg:flex-row">
        <div className="text-center flex flex-col w-full align-center justify-center">
          <h3 className="text-5xl  mb-12">Contact With Us</h3>
          <p>Email: toolshouse@gmail.com</p>
          <p>phone number: 01843336009</p>
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100">
          <div className="card-body w-50">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="w-100 from-control "
                id="message"
                name="message"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
