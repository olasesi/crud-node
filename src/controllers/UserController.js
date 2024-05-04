import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    // Handle errors appropriately
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email } = req.body;
    const { id } = req.params;
    if (firstname === "" || lastname === "" || email === "") {
      // If any of the fields are empty, return an error response
      return res.status(400).json({ message: "Fields cannot be empty" });
    }
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      // If user not found, return an error response
      return res.status(404).json({ message: "User not found" });
    }
    // Update user fields
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    // Save the updated user
    await user.save();
    // Fetch updated users
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    // Handle errors appropriately
    next(error);
  }
};
