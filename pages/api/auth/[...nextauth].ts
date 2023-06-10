import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';

import { authConfig } from '@/utils/app/auth';

const options: NextAuthOptions = {
  ...authConfig,
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn(params) {
      const { user, account, profile } = params;
      // Esegui qui eventuali operazioni personalizzate quando un utente effettua l'accesso
      return true;
    },

    async jwt(params) {
      const { token, user, account, profile, isNewUser } = params;
      // Aggiungi eventuali informazioni personalizzate al token JWT
      return token;
    },

    async session(params) {
      const { session, token } = params;
      // Aggiungi eventuali informazioni personalizzate alla sessione utente
      return session;
    },
  },
};

const nextAuthHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default nextAuthHandler;
