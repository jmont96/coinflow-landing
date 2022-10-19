import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  onClose: () => void;
};

export const SendEmailComponent = (props: Props) => {
  const form = useRef<string | HTMLFormElement>(null);

  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const sendEmail = (e: Event) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zux20gb",
        "template_e55pxx9",
        form.current,
        "DJZBuNKmXKoJDOecM"
      )
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            props.onClose();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // @ts-ignore
    <form ref={form} onSubmit={sendEmail} className={"flex-col flex"}>
      <label className={"text-sm font-medium text-zinc-800 mb-2 ml-2"}>
        Your name
      </label>
      <input
        name={"name"}
        className={
          "transition-all cursor-pointer hover:bg-zinc-100 bg-zinc-50 ring-zinc-100 focus:ring-emerald-400 focus:ring-2 focus:outline-none ring-1 p-5 rounded-xl"
        }
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className={"text-sm font-medium text-zinc-800 mb-2 ml-2 mt-8"}>
        Message & contact info
      </label>
      <input
        name={"message"}
        className={
          "transition-all cursor-pointer hover:bg-zinc-100 bg-zinc-50 ring-zinc-100 focus:ring-emerald-400 focus:ring-2 focus:outline-none ring-1 p-5 rounded-xl"
        }
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      {!success ? (
        <input
          type="submit"
          value="Send my message"
          className={
            "outline-none mt-8 py-5 text-white font-bold text-medium bg-gradient-to-r from-teal-400 to-emerald-400 px-7 rounded-3xl cursor-pointer hover:translate-y-1 transition cursor-pointer duration-300"
          }
        />
      ) : (
        <div
          className={
            "outline-none flex justify-center mt-8 py-5 text-white font-bold text-medium bg-gradient-to-r from-teal-400 to-emerald-400 px-7 rounded-3xl cursor-pointer hover:translate-y-1 transition cursor-pointer duration-300"
          }
        >
          <span className={"text-white font-bold text-medium"}>
            Message sent!
          </span>
        </div>
      )}
    </form>
  );
};
