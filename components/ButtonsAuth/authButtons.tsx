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
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
      <span className="ml-4">Continue with Google</span>
    </button>
  );
}

export function GithubSignInButton() {
  const handleClick = () => {
    signIn('github');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={githubLogo} alt="GitHub Logo" width={20} height={20} />
      <span className="ml-4">Continue with GitHub</span>
    </button>
  );
}

export function TwitchSignInButton() {
  const handleClick = () => {
    signIn('twitch');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={twitchLogo} alt="Twitch Logo" width={30} height={30} />
      <span className="ml-4">Continue with Twitch</span>
    </button>
  );
}

export function DiscordSignInButton() {
  const handleClick = () => {
    signIn('discord');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={discordLogo} alt="Discord Logo" width={20} height={20} />
      <span className="ml-4">Continue with Discord</span>
    </button>
  );
}

export function CredentialsSignInButton() {
  const handleClick = () => {
    signIn();
  };
}
