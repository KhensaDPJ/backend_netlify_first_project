// services/authService.js

import supabase from "../supabaseClient.js";


const verifyToken = async (token) => {
  try {
    const { data: user, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error('Error verifying token:', error.message);
      return null;
    }

    return user;
  } catch (err) {
    console.error('Error during JWT verification:', err);
    return null;
  }
};

export default {verifyToken};
