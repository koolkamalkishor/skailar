import { getSession } from 'next-auth/react';

import { GetServerSideProps } from 'next';

import {
  DiscordSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
  TwitchSignInButton,
} from '@/components/ButtonsAuth/authButtons';

import { Login } from '@/components/Forms/Login'
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function SignInPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center w-1/3 mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-white text-4xl font-bold">Login</h1>
        <Login />
        <span className='text-2xl font-semibold text-white text-center mt-8'>Or</span>
        <GoogleSignInButton />
        <DiscordSignInButton />
        {/* <GithubSignInButton /> */}
        {/* <TwitchSignInButton /> */}
        <small className='text-red-500'>*actually not working, click <Link className='underline' href='/'>here</Link>*</small>
      </div>
    </div>
  );
}
