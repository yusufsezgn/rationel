import Image from "next/image";
import Input from "./Input";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/Register";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */

const Register = () => {
  const router = useRouter();

  const onSubmitFunc = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/register/`,
        values
      );
      if (res.status === 200) {
        toast.success("Hesabınız başarıyla oluşturuldu.");
        router.push("/")
      } else {
        toast.error("Hata oluştu");
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
        username: "",
        name: "",
        surname: "",
        avatar: "",
        posts: 0,
        favorites: 0,
        description: "Henüz açıklama girilmedi"
      },
      onSubmit: onSubmitFunc,
      validationSchema: registerSchema,
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
      <div className="sm:w-1/2 w-full h-full relative sm:px-12 px-8 flex flex-col items-start">
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col">
          <div className="w-full h-auto mt-20 flex flex-col gap-5">
            <span className="text-4xl font-semibold text-white">Kayıt ol.</span>
            <div className="w-1/4 h-2 rounded-full bg-secondary"></div>
          </div>
          <div className="w-full h-auto flex flex-col gap-7 mt-12">
            <Input
              type={"text"}
              placeholder={"example@example.com"}
              label={"E-mail adresinizi girin."}
              onBlur={handleBlur}
              error={errors.email}
              handleChange={handleChange}
              value={values.email}
              errors={errors.email}
              touched={touched}
              name={"email"}
            />
            <div className="w-full h-auto flex items-center gap-5">
              <div className="w-1/2 h-auto">
                <Input
                  type={"text"}
                  placeholder={"John"}
                  label={"İsim"}
                  onBlur={handleBlur}
                  error={errors.name}
                  handleChange={handleChange}
                  value={values.name}
                  errors={errors.name}
                  touched={touched}
                  name={"name"}
                />
              </div>
              <div className="w-1/2 h-auto">
                <Input
                  type={"text"}
                  placeholder={"Doe"}
                  label={"Soyisim"}
                  onBlur={handleBlur}
                  error={errors.surname}
                  handleChange={handleChange}
                  value={values.surname}
                  errors={errors.surname}
                  touched={touched}
                  name={"surname"}
                />
              </div>
            </div>
            <Input
              type={"text"}
              placeholder={"johndoe123"}
              label={"Kullanıcı adı"}
              onBlur={handleBlur}
              error={errors.username}
              handleChange={handleChange}
              value={values.username}
              errors={errors.username}
              touched={touched}
              name={"username"}
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
                Hesabın var mı ?{" "}
                <Link
                  href="/"
                  className="underline hover:no-underline transition-all"
                >
                  Giriş yap.
                </Link>
              </span>
              <button
                type="submit"
                onClick={() => {
                  onSubmitFunc();
                }}
                className="sm:px-8 px-4 py-3 bg-secondary border-secondary rounded-full text-white font-medium hover:bg-opacity-75 transition-all sm:text-lg text-base"
              >
                Kayıt ol
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
