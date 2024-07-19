import AuthForm from "@/components/AuthForm";

const page = () => {
  const signForm = [
    {
      title: "Login",
      inputs: ["Your Username or Email address", "Password"],
      addition: {
        request: "Remember me",
        forgot: "Forgot password?",
      },
      path: {
        message: "Don't have an account yet?",
        name: "Sign Up",
        path: "/signup",
      },
      button: "Login",
    },
  ];
  return <AuthForm data={signForm} />;
};

export default page;
