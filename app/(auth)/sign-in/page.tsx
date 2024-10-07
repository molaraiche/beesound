"use client";
import { auth, db } from "@/firebase/firebaseConfig";
import { formType } from "@/types/types";
import { setCookie } from "cookies-next";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      if (user) {
        const token = await user.getIdToken();
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const role = userData?.role || "user";
          setCookie("token", token, { maxAge: 3600, path: "/" });
          setCookie("role", role, { maxAge: 3600, path: "/" });

          if (role === "admin") {
            router.push("/admin-dashboard");
          } else {
            router.push("/");
          }
        } else {
          console.log("No such document for user");
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

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev: formType) => ({
      ...prev,
      [name]: value,
    }));
  };
  const googleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const token = await user.getIdToken();
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        let role;

        if (docSnap.exists()) {
          const userData = docSnap.data();
          role = userData?.role || "user";
        } else {
          await setDoc(docRef, {
            email: user.email,
            displayName: user.displayName || user.email,
            role: "user",
          });
          role = "user";
        }
        setCookie("token", token, { maxAge: 3600, path: "/" });
        setCookie("role", role, { maxAge: 3600, path: "/" });

        if (role === "admin") {
          router.push("/admin/board");
        } else {
          router.push("/");
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
            <h1 className='text-5xl font-semibold text-secondary'>Sign in</h1>
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
                  name=''
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
                  name=''
                  onChange={onChangeHandler}
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                />
              </div>
              <div className='flex justify-end'>
                <p>
                  Don&apos;t have an account?
                  <Link
                    href='/sign-up'
                    className=' text-primary font-bold mx-2'>
                    Sign up
                  </Link>
                </p>
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='py-2 px-10 bg-primary text-white font-medium rounded-md'>
                  Sign in
                </button>
              </div>
            </form>
            <div className='flex justify-center my-10'>
              <button
                onClick={googleHandler}
                className='py-4 px-10 border-secondary border-2 text-secondary font-medium rounded-md flex items-center gap-2 hover:bg-dark-white hover:text-primary'>
                <FaGoogle />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full px-10'>
          <Link
            href='/admin'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-full font-medium'>
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
