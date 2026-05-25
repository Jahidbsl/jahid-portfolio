import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const SUPER_ADMIN_EMAIL =
  process.env.SUPER_ADMIN_EMAIL;

const client = new MongoClient(
  process.env.MONGODB_URI
);

const db = client.db('Jahid-portfolio');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
      },
    },
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          let role = "USER";

          if (
            user.email === SUPER_ADMIN_EMAIL
          ) {
            role = "SUPER_ADMIN";
          }

          return {
            data: {
              ...user,
              role,
            },
          };
        },
      },
    },
  },
});