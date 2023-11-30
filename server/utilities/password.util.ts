import bcrypt from "bcrypt";

const encyrptPassword = async (password: string) => {
  const saltPassword = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, saltPassword);

  return hashPassword;
};

const decryptPassword = async (password: string, hashedPassword) => {
  const comparePassword = await bcrypt.compare(password, hashedPassword);
  return comparePassword;
};

export { encyrptPassword, decryptPassword };
