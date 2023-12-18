import Image from "next/image";
import Input from "./Input";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/Login";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

/* eslint-disable @next/next/no-img-element */
const Main = () => {

  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if(session) {
      router.push("/fyp/")
    }
  })

  const onSubmitFunc = async (values, actions) => {
    try {
      const { email, password } = values;
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res.status !== 200) {
        toast.error("User not found !");
      }
    } catch (error) {
      toast.dark(error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: onSubmitFunc,
      validationSchema: loginSchema,
    });

  return (
    <div className="w-full h-screen flex relative">
      <div className="w-1/2 h-full sm:relative hidden">
        <Image
          src="/img/main.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
          priority
          className="brightness-75 absolute"
        />
      </div>
      <div className="sm:w-1/2 w-full h-full relative sm:p-12 p-8 flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-start">
          <span className="sm:text-5xl text-4xl font-black text-white leading-relaxed">
            Bilgiyle sorgula <br /> sorguyla özgürleş!
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-3/4 flex flex-col">
          <div className="w-full h-auto mt-20 flex flex-col gap-5">
            <span className="text-4xl font-semibold text-white">
              Giriş yap.
            </span>
            <div className="w-1/4 h-2 rounded-full bg-secondary"></div>
          </div>
          <div className="w-full h-auto flex flex-col gap-7 mt-12">
            <Input
              type={"text"}
              placeholder={"johndoe@example.com"}
              label={"E-mail adresinizi girin."}
              onBlur={handleBlur}
              error={errors.email}
              handleChange={handleChange}
              value={values.email}
              errors={errors.email}
              touched={touched}
              name={"email"}
            />
            <Input
              type={"password"}
              placeholder={"******"}
              label={"Şifrenizi girin."}
              onBlur={handleBlur}
              error={errors.password}
              handleChange={handleChange}
              value={values.password}
              errors={errors.password}
              touched={touched}
              name={"password"}
            />
            <div className="w-full h-auto flex items-center justify-between">
              <span className="font-medium text-white">
                Hesabın yok mu ?{" "}
                <Link
                  href="/auth/register/"
                  className="underline hover:no-underline transition-all"
                >
                  Kaydol.
                </Link>
              </span>
              <button
                type="submit"
                className="sm:px-8 px-4 py-3 bg-secondary border-secondary rounded-full text-white font-medium hover:bg-opacity-75 transition-all sm:text-lg text-base"
              >
                Giriş yap
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
