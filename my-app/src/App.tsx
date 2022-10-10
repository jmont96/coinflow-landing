import React from "react";
import logo from "./assets/logo-with-text.png";
import moneyImg from "./assets/coinflow-landing.png";

import "./App.css";

function App() {
  return (
    <div className={"p-1 h-screen w-full flex relative"}>
      <div
        className={
          "absolute right-0 bottom-1/4 lg:right-24 lg:bottom-24  bg-green-500 w-96 h-96 rounded-full blur-xl opacity-20"
        }
      />
      <div
        className={
          "absolute -left-24 -bottom-24 lg:right-96 lg:bottom-96 bg-emerald-300 w-96 h-96 rounded-full blur-2xl opacity-25"
        }
      />
      <div
        className={
          "absolute -right-24 -bottom-24 lg:right-32 lg:bottom-72 bg-teal-400 w-96 h-96 rounded-full blur-2xl opacity-30"
        }
      />
      <div className="z-10 relative flex flex-col flex-1 items-stretch">
        <header className="flex-shrink">
          <nav className={"flex-row w-full h-20 p-3"}>
            <img src={logo} className="h-full" alt="landing" />
          </nav>
        </header>
        <div className={"flex-1 flex"}>
          <div
            className={
              "p-4 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-10/12 lg:m-auto "
            }
          >
            <div className={"justify-center items-center "}>
              <div className={"flex-col flex space-y-10"}>
                <span
                  className={"font-black text-6xl text-zinc-800 flex-col flex"}
                >
                  <strong className={"text-gradient mr-2 text-7xl"}>
                    Instantly
                  </strong>
                  withdraw crypto to your bank
                </span>
                <span className={"text-lg text-zinc-600 font-medium"}>
                  Securely off-ramp any cryptocurrency to a major US bank
                  account in under 1 minute. The fastest way to turn your crypto
                  into cash.
                </span>
              </div>
              <div
                className={
                  "shadow-xl rounded-xl p-7 bg-white mt-12 flex-row flex space-x-4"
                }
              >
                <img
                  className={"w-14 h-14 rounded-full"}
                  src={
                    "https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png"
                  }
                  alt={"pfp"}
                />
                <div className={"flex-col italic text-zinc-500 font-medium"}>
                  "Deposited 2 SOL into my capital one account in 45 seconds.
                  Revolutionary. I didn't even get feed."
                </div>
              </div>
            </div>
            <div className={"hidden lg:flex items-center justify-center"}>
              <img src={moneyImg} className="w-3/4 " alt="landing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
