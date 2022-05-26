import React from "react";

import Navbar from "../Shared/Navbar";

const MyPortfolio = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-2xl">
        <h2>
          <span className="text-3xl text-semi-bold text-red-400">Name :</span>{" "}
          Ishtiaq Uddin
        </h2>
        <p>
          <span className="text-3xl text-semi-bold text-red-400">Email :</span>{" "}
          ishty119@gmail.com
        </p>
        <p>
          <span className="text-3xl text-semi-bold text-red-400">
            Education :
          </span>{" "}
          I am a first year student of computer science and engineering at
          Rangamati Science and Technology University .{" "}
        </p>
        <p>
          <span className="text-3xl text-semi-bold text-red-400">Skill :</span>{" "}
          : html , css , js , react.js , node.js , firebase , mongodb , ,
          bootstrap , tailwindcss etc
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-12">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body h-75 items-center text-center">
            <div className="w-50 h-50">
              <img
                className=""
                src={"https://i.ibb.co/BgYjmGF/1653502658262.png"}
                alt=""
              />
            </div>
            <div>
              <p>Site name: Influencer product</p>
              <button className="btn btn-xl btn-success">
                <a href="https://ishtymahin.github.io/assignment-2/">
                  Live site Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body h-75 items-center text-center">
            <div className="w-50 h-50">
              <img
                className=""
                src={"https://i.ibb.co/0y3G4ZP/screenshot.png"}
                alt=""
              />
            </div>
            <div>
              <p>Site name: Laptop Inventory</p>
              <button className="btn btn-xl btn-success">
                <a href="https://assignment-11-796ba.web.app/">
                  Live site Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body h-75 items-center text-center">
            <div className="w-50 h-50">
              <img
                className=""
                src={"https://i.ibb.co/KLmLLyr/screenshot1.png"}
                alt=""
              />
            </div>
            <div>
              <p>Site name: Influencer product</p>
              <button className="btn btn-xl btn-success">
                <a href="https://silly-wescoff-ede354.netlify.app/">
                  Live site Link
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
