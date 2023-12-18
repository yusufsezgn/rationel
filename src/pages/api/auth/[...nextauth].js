import User from "@/models/User";
import dbConnect from "@/utils/Mongoose";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; // Gerekli importlar buradan alınıyor.

export default NextAuth({
  providers: [
    // Providersların tanımlandığı yer.
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }, // Alınan credentialsları tanımlıyoruz
      },
      async authorize(credentials, req) {
        await dbConnect();
        if (credentials) {
          const { email, password } = credentials; // Credentials varsa email ve password'u credentialsdan alıyoruz.
          const mailMatch = await User.findOne({ email }); // Ardından girilen email sistemde var mı sorgusu yapıyoruz.
          if (mailMatch) {
            // Varsa bulunan verinin _id'si ve email'ini token'a return ediyoruz.
            return {
              id: mailMatch._id,
              email: email,
            };
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: "secret",
  database: process.env.MONGODB_URI,
  callbacks: {
    jwt: ({ token, user }) => {
      return { ...user, ...token }; // Alınan user bilgilerini ve token bilgilerini return ediyoruz.
    },
    session: async ({ session, token }) => {
      const isMatch = await User.findOne({ email: token.email });
      session.user = { ...session.user, ...isMatch }; // Tokendaki email ile sistemde eşleşen bir email varsa session'ın içerisindeki user objesine gerekli bilgileri atıyoruz.
      return session; // Ardından session'ı döndürüyoruz
    },
  },
});
