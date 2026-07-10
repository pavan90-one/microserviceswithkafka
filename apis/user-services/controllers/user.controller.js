export const createUser = (req, res) => {
  res.send('User Created Successfully!');
};

export const getUser = (req, res) => {
  res.send('User Fetched Successfully!');
};

export const updateUser = (req, res) => {
  res.send('User Updated Successfully!');
};

export const deleteUser = (req, res) => {
  res.send('User Deleted Successfully!');
};
export const getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`User with ID ${id} Fetched Successfully!`);
};
