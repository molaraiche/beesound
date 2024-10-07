"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "cookies-next";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { formSchema } from "@/schema/productSchema";
interface adminType {
  email: string;
  password: string;
}
const Admin = () => {
  const [form, setForm] = useState<adminType>({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();
  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const formattedErrors = result.error.errors.reduce(
        (acc: Record<string, string>, curr) => {
          const key = curr.path[0] as string;
          acc[key] = curr.message;
          return acc;
        },
        {}
      );
      setErrors(formattedErrors);
      setTimeout(() => {
        setErrors({});
      }, 30000);
      return;
    }
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredentiel) => {
        console.log(userCredentiel);
        const user = userCredentiel.user;
        if (!user) {
          alert("please check the credentiel");
        } else {
          user.getIdToken().then((token) => {
            setCookie("token", token, { maxAge: 3600, path: "/" });
            router.push("/admin/board");
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev: adminType) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex justify-between items-center w-full h-[10vh]'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/assets/logo.svg'
              alt='BeeSound logo'
              width={14}
              height={19}
            />
            <span className='text-[23px]'>BeeSound</span>
          </Link>
        </div>
        <div className='flex h-[90vh] items-center justify-between flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <h1 className='text-5xl font-semibold text-secondary'>Admin</h1>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <form
              onSubmit={loginHandler}
              className='bg-secondary p-20 text-white rounded-xl flex flex-col gap-5'>
              <div className='flex items-center justify-between gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Email:
                </label>
                <div className=''>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={changeHandler}
                    className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                  />
                  {errors.email && <p className='error-text'>{errors.email}</p>}
                </div>
              </div>
              <div className='flex items-center gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Password:
                </label>
                <div className=''>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={changeHandler}
                    className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                  />
                  {errors.password && (
                    <p className='error-text'>{errors.password}</p>
                  )}
                </div>
              </div>
              <div className='flex items-center justify-center gap-10 my-10'>
                <button
                  type='submit'
                  className='py-2 px-10  bg-primary  text-white font-medium rounded-md '>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full px-10'>
          <Link
            href='/sign-up'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-full font-medium'>
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admin;
