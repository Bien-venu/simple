"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import Cookies from 'js-cookie';

const AuthForm = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Hook for navigation
  const { setUser } = useAppContext();

  const initializeFormData = () => {
    if (!data) return {};
    return data.reduce((acc: any, item: any) => {
      item.inputs.forEach((input: string) => {
        acc[input] = "";
      });
      return acc;
    }, {});
  };
  const [formData, setFormData] = useState(initializeFormData);

  useEffect(() => {
    setFormData(initializeFormData());
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name.toLowerCase()]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      for (const item of data) {
        if (item.message && item.message.name === "signup") {
          try {
            await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth/register`,
              formData,
            );
            toast(item.message.message);
            router.push("/"); // Navigate to login page after signup
          } catch (error: any) {
            if (error.response?.status === 401) {
              toast.error("This account already exists!");
            } else if (error.response?.status === 402) {
              toast.error("Registration failed. Please try again!");
            } else if (error.response?.status === 403) {
              toast.error("Username is already taken!");
            } else {
              console.error("Error:", error);
            }
          }
        } else if (item.message && item.message.name === "forgot") {
          await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/profile/forgot-password`,
            formData,
          );
          toast(item.message.message);
          router.push("/verify"); // Navigate to verify page after password reset
        } else if (item.message && item.message.name === "login") {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/auth/login`,
              formData,
            );
            setUser({ token: response.data.token, loginTime: new Date() });
            console.log(response.data);
            Cookies.set('token', response.data.token, { expires: 7 }); // Expires in 7 days
            Cookies.set('username', response.data.username, { expires: 7 });
            Cookies.set('email', response.data.email, { expires: 7 });
            toast(item.message.message);
            router.push("/issues"); // Navigate to dashboard after login
          } catch (error: unknown) {
            if (error instanceof AxiosError) {
              console.error(
                "Login failed:",
                error.response?.data || error.message,
              );
              toast(
                error.response?.data.error || "Login failed. Please try again.",
              );
              setIsLoading(false);
            } else {
              console.error("Unexpected error:", error);
              toast("An unexpected error occurred. Please try again.");
              setIsLoading(false);
            }
          }
        }
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error("Unexpected Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className="text-black h-fit w-full items-center justify-center p-2 text-sm font-medium sm:flex sm:w-1/2 sm:p-8"
        >
          <div className="bg-light flex h-fit w-full min-w-80 flex-col gap-6 rounded-lg p-8 py-12 xl:w-3/4">
            <div className="flex flex-col gap-4">
              <h1 className="text-black text-2xl font-semibold">
                {item.title}
              </h1>
              {item.path && (
                <p className="flex items-center gap-1">
                  {item.path.message}
                  <Link
                    href={item.path.path}
                    className="font-semibold text-improvement"
                  >
                    {item.path.name}
                  </Link>
                </p>
              )}
            </div>
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {item.inputs.map((input: any, inputIndex: number) => (
                  <div key={inputIndex} className="flex flex-col gap-0">
                    <label htmlFor={input} className="">
                      Enter {input}
                    </label>
                    {input.toLowerCase() === "password" ? (
                      <input
                        type="password"
                        id={input}
                        name={input}
                        className="text-gray border-b border-border bg-background pt-2 text-sm font-medium text-grey"
                        value={formData[input.toLowerCase()] || ""}
                        onChange={handleChange}
                        required
                      />
                    ) : input.toLowerCase() === "email address" ? (
                      <input
                        type="email"
                        id={input}
                        name={input}
                        className="text-gray border-b border-border bg-background pt-2 text-sm font-medium text-grey"
                        value={formData[input.toLowerCase()] || ""}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <input
                        type="text"
                        id={input}
                        name={input}
                        className="text-gray border-b border-border bg-background pt-2 text-sm font-medium text-grey"
                        value={formData[input.toLowerCase()] || ""}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>
              {item.addition && (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="h-3.5 w-3.5"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="flex w-full items-center justify-between"
                  >
                    {item.addition.request}
                    <Link
                      href="/forgot"
                      className="text-black font-semibold underline underline-offset-4"
                    >
                      {item.addition.forgot}
                    </Link>
                  </label>
                </div>
              )}
              <button
                type="submit"
                className="bg-black flex w-full items-center justify-center bg-white p-3 font-semibold text-background"
              >
                {item.button}
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default AuthForm;
