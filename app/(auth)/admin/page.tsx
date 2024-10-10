"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "cookies-next";
import { auth, db } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { formSchema } from "@/schema/formShcema";
import { formType } from "@/types/types";
import { doc, getDoc } from "firebase/firestore";

const Admin = () => {
  const [form, setForm] = useState<formType>({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();

  const loginHandler = async (e: React.FormEvent) => {
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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      if (user) {
        const token = await user.getIdToken();
        const uid = user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const role = userData?.role || "user";
          const username = userData?.username || "Unknown";

          if (role === "admin") {
            setCookie("token", token, { maxAge: 3600, path: "/" });
            setCookie("role", role, { maxAge: 3600, path: "/" });
            setCookie("username", username, { maxAge: 3600, path: "/" });
            setCookie("uid", uid, { maxAge: 3600, path: "/" });

            router.push("/admin/board");
          } else {
            alert("Unauthorized access. You are not an admin.");
            router.push("/sign-in");
          }
        } else {
          console.log("No user data found");
        }
      } else {
        console.log("User authentication failed.");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error during admin sign-in:", err.message);
      } else {
        console.error("An unknown error occurred during admin sign-in.");
      }
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev: formType) => ({ ...prev, [name]: value }));
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
        <div className=' w-full flex h-[90vh] items-center justify-center flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <h1 className='text-5xl font-semibold text-secondary'>Admin</h1>
          </div>
          <div className='w-[90%] flex flex-col items-center justify-center h-[70vh]'>
            <form
              onSubmit={loginHandler}
              className='bg-secondary p-20 text-white rounded-xl flex flex-col gap-5 w-[90%]'>
              <div className='flex items-center justify-center gap-5 w-full'>
                <label
                  htmlFor='email'
                  className='lg:w-full lg:flex min-w-[40px] flex sm:hidden xsm:hidden'>
                  Email:
                </label>
                <div className='w-full'>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={changeHandler}
                    className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full p-4 w-full'
                  />
                  {errors.email && <p className='error-text'>{errors.email}</p>}
                </div>
              </div>
              <div className='flex items-center justify-center gap-5 w-full'>
                <label
                  htmlFor='password'
                  className='lg:w-full lg:flex min-w-[40px] flex sm:hidden xsm:hidden '>
                  Password:
                </label>
                <div className='w-full'>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={changeHandler}
                    className='bg-secondary outline-none  font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full p-4 w-full'
                  />
                  {errors.password && (
                    <p className='error-text'>{errors.password}</p>
                  )}
                </div>
              </div>
              <div className='flex items-center justify-center gap-10 my-10'>
                <button
                  type='submit'
                  className='py-2 px-10  bg-primary  text-white font-medium rounded-md'>
                  Sign in
                </button>
              </div>
              <div className='text-gray-500 flex flex-col items-center justify-center'>
                <p>email:admin@beesound.com</p>
                <p>password: admin123</p>
              </div>
            </form>
          </div>
        </div>
        <div className='h-[20vh] flex lg:justify-end justify-center w-full px-10'>
          <Link
            href='/'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-full font-medium'>
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admin;
