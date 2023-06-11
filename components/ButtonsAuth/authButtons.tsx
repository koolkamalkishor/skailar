'use client';

import { signIn, useSession } from 'next-auth/react';

import Image from 'next/image';

import discordLogo from '@/public/discord.png';
import githubLogo from '@/public/github.png';
import googleLogo from '@/public/google.png';
import twitchLogo from '@/public/twitch.png';

export function GoogleSignInButton() {
  const { data: session, status } = useSession();

  const handleClick = () => {
    signIn('google');
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <p className="text-semibold text-white m-1 pt-5">
        You are already signed in.
      </p>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="hidden w-full sm:flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image
          src={googleLogo}
          alt="Google Logo"
          width={20}
          height={20}
          className="hidden sm:inline-block"
        />
        <span className="hidden sm:inline-block ml-4">
          Continue with Google
        </span>
      </button>
      <div className="m-5 w-96">
       <center>
       <button onClick={handleClick} className="flex sm:hidden">
        <Image src={googleLogo} alt="Google Logo" width={50} height={50} />
      </button>
       </center>
      </div>
    </>
  );
}

export function GithubSignInButton() {
  const handleClick = () => {
    signIn('github');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="hidden w-full sm:flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image
          src={githubLogo}
          alt="Github Logo"
          width={20}
          height={20}
          className="hidden sm:inline-block"
        />
        <span className="hidden sm:inline-block ml-4">
          Continue with Github
        </span>
      </button>
      <div className="m-5 w-96">
       <center>
       <button onClick={handleClick} className="flex sm:hidden">
        <Image src={githubLogo} alt="Github Logo" width={50} height={50} />
      </button>
       </center>
      </div>
    </>
  );
}

export function TwitchSignInButton() {
  const handleClick = () => {
    signIn('twitch');
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="hidden w-full sm:flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image
          src={twitchLogo}
          alt="Twitch Logo"
          width={30}
          height={30}
          className="hidden sm:inline-block"
        />
        <span className="hidden sm:inline-block ml-4">
          Continue with Twitch
        </span>
      </button>
      <div className="m-5 w-96">
       <center>
       <button onClick={handleClick} className="flex sm:hidden">
        <Image src={twitchLogo} alt="Twitch Logo" width={70} height={70} />
      </button>
       </center>
      </div>
    </>
  );
}

export function DiscordSignInButton() {
  const handleClick = () => {
    signIn('discord');
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="hidden w-full sm:flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image
          src={discordLogo}
          alt="Discord Logo"
          width={20}
          height={20}
          className="hidden sm:ml-2 sm:inline-block"
        />
        <span className="hidden sm:inline-block ml-4">
          Continue with Discord
        </span>
      </button>
      <div className="m-5 w-96">
       <center>
       <button onClick={handleClick} className="flex sm:hidden">
        <Image src={discordLogo} alt="Discord Logo" width={50} height={50} />
      </button>
       </center>
      </div>
    </>
  );
}

export function CredentialsSignInButton() {
  const handleClick = () => {
    signIn();
  };
}
