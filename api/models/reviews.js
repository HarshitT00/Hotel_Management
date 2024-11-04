import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    review:{
        type:String,
        required:true
    },
    hotel : { type: Schema.Types.ObjectId, 
        ref: 'Hotel',
        required: true },
    user : { type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true }
},

 {timestamps:true}
);

export default mongoose.model("Review",ReviewSchema);
