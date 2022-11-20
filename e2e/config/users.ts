export enum Users {
  Admin = "admin",
}

export type User = {
  username: string;
  password: string;
  fullName: string;
};
export const users: Record<Users, User> = {
  [Users.Admin]: {
    username: "user",
    password: "password",
    fullName: "EventManager",
  },
};

export const getUser = (user: Users): User => {
  return users[user];
};
