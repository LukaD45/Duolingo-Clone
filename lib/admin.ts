import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eYgjxHigYuk1myg8Og6Hq59fp0"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
