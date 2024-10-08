'use client'
import AuthForm from "@/components/AuthForm";

const page = () => {
  const signForm = [
  {
    title: "Login",
    inputs: ["email", "password"],
    addition: {
      request: "Remember me",
      forgot: "Lost Password?",
    },
    path: {
      message: "Do not have an account?",
      name: "Signup",
      path: "/signup",
    },
    button: "Login",
    message: {
      name: "login",
      message: "Welcome!",
    },
  },
];
  return <AuthForm data={signForm} />;
};

export default page;
