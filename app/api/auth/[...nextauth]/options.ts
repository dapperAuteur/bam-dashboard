import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from "@/app/(models)/User";
import bcrypt from 'bcrypt';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "your@email.com"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password"
        }
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({
            email: credentials?.email
          })
          .exec();
          // console.log('foundUser :>> ', foundUser);
          if (foundUser) {
            // console.log('foundUser :>> ', foundUser);
            const match = await bcrypt.compare(credentials?.password, foundUser?.password);

            if (match) {
              // console.log('match :>> ', match);
              delete foundUser.password;
              return foundUser;
            }
          }
        } 
        catch (err) {
          console.log('err :>> ', err);
          throw new Error("Incorrect username or password");
        }
        return null;
      }
    })
  ],
  callbacks: {
    // async jwt({token, user}) {
    //   if (user) {
    //     console.log('token :>> ', token);
    //     console.log('user :>> ', user);
    //     token?.role = user?.role;
    //     token?.user = user;
    //   }
    //   return token;
    // },
    async session({session, token}){
      if (session?.user) {
        // console.log('session :>> ', session);
        // console.log('token :>> ', token);
        session.user.role = token?.role;
      }
      return session;
    }
  }
}