import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.POSTGRESS_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
  // socialProviders: {
  //   github: {
  //     clientSecret: "",
  //     clientId: "",
  //   },
  //   google: {
  //     clientId: "",
  //     clientSecret: "",
  //   },
  // },
  plugins: [nextCookies()],
});
