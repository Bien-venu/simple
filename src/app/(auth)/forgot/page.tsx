import AuthForm from "@/components/AuthForm";

const page = () => {
  const signForm = [
    {
      title: "Forgot Password",
      inputs: ["email address"],
      button: "Send",
    },
  ];
  return <AuthForm data={signForm} />;
};

export default page;
