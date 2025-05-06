"use client";
import { showToast } from "nextjs-toast-notify";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    showToast.success("You are welcome", {
      duration: 4000,
      progress: true,
      position: "top-right",
      transition: "bounceIn",
      icon: "",
      sound: false,
    });
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">Contact Page</h1>
    </div>
  );
}

export default Contact;
