import mongoose from 'mongoose';

const userSchema= mongoose.Schema({
    testimonial_id: {
                type : Number,
                unique:true,
                auto: true,
                //required:true,
            },
        
    name: {
                type:String,
                //required:true,
                minlength:3
            },
        
    post: {
                type:String,
                //required:true
            },
        
    Testimonial_desc : {
                type:String,
                //required:true
            },
        
    created_on : {
                type:Date,
               // required:true
            },
        
    last_updated_on : {
                type:Date,
               // required:true
            },
        
    active : {
                type:Boolean,
                //required:true
            }

})

const user= mongoose.model('Data',userSchema);
export default user;