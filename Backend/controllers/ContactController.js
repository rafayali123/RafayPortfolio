const Contact = require("../models/ContactModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email, subject, Description } = req.body;

    const existingUser = await Contact.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const Data = await Contact.create({
        name,
        email,
        subject, 
        Description
    });

    res.status(201).json({
      success: true,
      message: "Record created successfully",
      data: Data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};
