const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const crypto = require('crypto');
// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/1',
            url: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1605823200/avatars/1.jpg'
        }
    });
    res.status(201).json({
        success: true,
        message: 'Account registered successfully',
        user
    })
});

