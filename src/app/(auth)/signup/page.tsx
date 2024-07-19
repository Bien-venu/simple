"use client";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const page = () => {
  const signForm = [
    {
      title: "Sign up",
      inputs: ["Your name", "Username", "Email address", "Password"],
      addition: {
        request: "I agree with Privacy Policy and Terms of use",
      },
      path: {
        message: "Already have an account?",
        name: "Login",
        path: "/",
      },
      button: "Sign Up",
    },
  ];

  return <AuthForm data={signForm} />;
};

export default page;
