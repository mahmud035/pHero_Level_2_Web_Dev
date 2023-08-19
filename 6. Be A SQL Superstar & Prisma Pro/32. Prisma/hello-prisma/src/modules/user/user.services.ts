import { PrismaClient, Profile, User } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data: data,
  });

  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  // check if user's data already exists or not
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });

    return result;
  }

  const result = await prisma.profile.create({
    data: data,
  });

  return result;
};

const getUsers = async () => {
  const result = await prisma.user.findMany({
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      profile: true,
    },
  });
  return result;
};

const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      profile: true,
    },
  });
  return result;
};

export const UserService = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};