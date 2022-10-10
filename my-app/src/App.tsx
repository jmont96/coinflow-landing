import React from "react";
import logo from "./assets/logo-with-text.png";
import moneyImg from "./assets/coinflow-landing.png";

import "./App.css";

function App() {
  function onClick() {
    console.log("click");
  }
  return (
    <div className={"h-screen w-full flex relative"}>
      <div
        className={
          "absolute right-0 bottom-1/4 lg:left-12 lg:bottom-96  bg-green-200 w-96 h-96 rounded-full blur-xl opacity-20"
        }
      />
      <div
        className={
          "absolute -left-24 -bottom-24 lg:left-24 lg:bottom-72 bg-emerald-200 w-96 h-96 rounded-full blur-2xl opacity-25"
        }
      />
      <div
        className={
          "absolute -right-24 -bottom- lg:left-0 lg:bottom-0 bg-teal-300 w-96 h-96 rounded-full blur-2xl opacity-30"
        }
      />
      <div className="z-10 relative flex flex-col flex-1 items-stretch">
        <div
          className={"h-1 w-full bg-gradient-to-r from-teal-400 to-emerald-400"}
        />
        <header className="flex-shrink w-full lg:w-10/12 flex justify-center mx-auto">
          <nav className={"flex-row flex w-full mx-auto h-20 p-3 "}>
            <img src={logo} className="h-full  lg:-ml-4" alt="landing" />
            <div className={"flex flex-grow"} />
            <div
              onClick={() => onClick()}
              className={
                "hover:translate-y-1 transition duration-300 cursor-pointer w-64 h-12 bg-gradient-to-r from-teal-400 rounded-3xl to-emerald-400 flex justify-center items-center"
              }
            >
              <span className={"text-md text-white font-bold "}>
                Meet with a team member
              </span>
            </div>
          </nav>
        </header>
        <div className={"flex-1 flex"}>
          <div
            className={
              "p-4 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-10/12 lg:m-auto "
            }
          >
            <div className={"justify-center items-center "}>
              <div className={"flex-col flex space-y-8"}>
                <span
                  className={"font-black text-6xl text-zinc-800 flex-col flex"}
                >
                  The Complete
                  <strong className={"text-gradient mr-2 text-6xl"}>
                    Payment Suite
                  </strong>
                  for Web3
                </span>
                <span className={"text-lg text-zinc-600 font-medium"}>
                  The easiest solution to onramp and offramp crypto for web2 and
                  web3 users
                </span>
              </div>
              <div
                onClick={() => onClick()}
                className={
                  "hover:translate-y-1 transition duration-300 cursor-pointer w-80 h-16 bg-gradient-to-r from-teal-400 rounded-3xl to-emerald-400 flex justify-center items-center mt-8"
                }
              >
                <span className={"text-lg text-white font-bold "}>
                  Meet with a team member
                </span>
              </div>
            </div>
            <div className={"flex-col items-center justify-center"}>
              <div
                className={
                  "rounded-3xl shadow-2xl p-6 bg-white flex flex-row items-center space-x-8"
                }
              >
                <div
                  onClick={() => onClick()}
                  className={
                    "w-24 h-24 flex bg-gradient-to-r from-teal-400 rounded-full to-emerald-400 flex justify-center items-center"
                  }
                >
                  <i className="bx bx-log-in text-white bx-md" />
                </div>
                <div className={"flex-col flex flex-1"}>
                  <p className={"text-gradient  text-xl font-extrabold"}>
                    Seamless credit purchases
                  </p>
                  <p className={"text-zinc-600 text-md font-medium"}>
                    Easily purchase in-game tokens with a credit card. Purchased
                    currency is locked into your platform and is 1:1 with USDC.
                  </p>
                </div>
              </div>
              <div
                className={
                  "rounded-3xl shadow-2xl p-6 bg-white flex flex-row items-center space-x-8 mt-6"
                }
              >
                <div
                  onClick={() => onClick()}
                  className={
                    "w-24 h-24 flex bg-gradient-to-r from-teal-400 rounded-full to-emerald-400 flex justify-center items-center"
                  }
                >
                  <i className="bx bx-log-out text-white bx-md" />
                </div>
                <div className={"flex-col flex flex-1"}>
                  <p className={"text-gradient  text-xl font-extrabold"}>
                    Instantly cash out
                  </p>
                  <p className={"text-zinc-600 text-md font-medium"}>
                    Securely connect with a US bank account to withdraw earnings
                    in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
