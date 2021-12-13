import user from '../model/user-schema.js';
import User from '../model/user-schema.js'

//view testimonials
export const getusers = async (request, response) => {
    try {
        let getuser = await user.find();
        response.json(getuser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

//update testimonials    
export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);

    try {
        await newUser.save();
        response.json(newUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const getUserById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await User.findById(id);
        response.json(user);
    }
    catch (error) {
        response.json({ message: error.message });
    }

}

//edit testimonial
export const editUser = async (request, response) => {
    const user = request.body;
    const editUser = new User(user);

    try {
        await User.updateOne({ _id: request.params.id }, editUser);
        response.json(editUser);
    } catch (error) {
        response.json({ message: error.message });
    }
}

//delete testimonial
export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id }, { active: false });
        response.json("user deleted successfully");
    }
    catch (error) {
        response.json({ message: error.message });

    }
}

