"use client";
import { auth, db } from "@/firebase/firebaseConfig";
import { formType } from "@/types/types";
import { setCookie } from "cookies-next";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [form, setForm] = useState<formType>({ email: "", password: "" });
  const router = useRouter();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "user",
      });

      router.push("/sign-in");
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error during admin sign-in:", err.message);
      } else {
        console.error("An unknown error occurred during admin sign-in.");
      }
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev: formType) => ({
      ...prev,
      [name]: value,
    }));
  };

  const googleSignUpHandler = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const token = await user.getIdToken();
        const uid = user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          await setDoc(docRef, {
            email: user.email,
            displayName: user.displayName || "",
            role: "user",
          });
        }
        setCookie("token", token, { maxAge: 3600, path: "/" });
        setCookie("role", "user", { maxAge: 3600, path: "/" });
        router.push("/");
      } else {
        console.log("User sign-up with Google failed.");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error during admin sign-in:", err.message);
      } else {
        console.error("An unknown error occurred during admin sign-in.");
      }
    }
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
            <h1 className='text-5xl font-semibold text-secondary'>Sign up</h1>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <form
              onSubmit={submitHandler}
              className='bg-secondary p-20 text-white rounded-xl flex flex-col gap-5'>
              <div className='flex items-center justify-between gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Email:
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={onChangeHandler}
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                />
              </div>
              <div className='flex items-center gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Password:
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={onChangeHandler}
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                />
              </div>
              <div className='flex justify-end'>
                <p>
                  Do you already have an account?
                  <Link
                    href='/sign-in'
                    className=' text-primary font-bold mx-2'>
                    Login
                  </Link>
                </p>
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='py-2 px-10 bg-primary text-white font-medium rounded-md hover:bg-primary hover:text-white hover:border-primary'>
                  Sign Up
                </button>
              </div>
            </form>
            <div className='my-10'>
              <button
                onClick={googleSignUpHandler}
                className='py-4 px-10 border-secondary border-2 text-secondary font-medium rounded-md flex items-center gap-2 hover:bg-dark-white hover:text-primary'>
                <FaGoogle />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full '>
          <Link
            href='/admin'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-lg font-medium'>
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
