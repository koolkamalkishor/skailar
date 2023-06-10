import {
    GoogleSignInButton,
    GithubSignInButton,
    DiscordSignInButton,
    TwitchSignInButton
  } from '@/components/ButtonsAuth/authButtons';
  import { GetServerSideProps } from 'next';
  import { getSession } from 'next-auth/react';
  
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
          <h1 className="mt-10 mb-4 text-white text-4xl font-bold">Sign In</h1>
          <GoogleSignInButton />
          <GithubSignInButton />
          <DiscordSignInButton />
          <TwitchSignInButton />
        </div>
      </div>
    );
  }