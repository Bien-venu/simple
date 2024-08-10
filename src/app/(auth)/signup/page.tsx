import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const page = () => {
  const newForm = [
    {
      title: "Create an account",
      inputs: ["name", "username", "email", "password"],
      button: "Register",
      addition: {
        request: "Agree to the Simple Terms of Service and Privacy Policy.",
      },
      path: {
        message: "Already a member?",
        name: "Login",
        path: "/",
      },
      message: {
        name: "signup",
        message: "Account created successfully. You can now log in.",
      },
    },
  ];
  return <AuthForm data={newForm} />;
};

export default page;
