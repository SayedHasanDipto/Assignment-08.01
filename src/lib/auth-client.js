import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;

// ✅ updateUser আলাদাভাবে export
export const updateUser = (data) => authClient.updateUser(data);