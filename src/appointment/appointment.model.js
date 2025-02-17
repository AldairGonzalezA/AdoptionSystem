import { Schema, model } from "mongoose";

const AppointmentSchema = Schema({
    keeper:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    pet:{
        type: Schema.Types.ObjectId,
        ref: 'pet',
        required: true
    },
    date:{
        type: String,
        required:true
    },
    status:{
        type: Boolean,
        default: true
    },
    reason:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('Appointment', AppointmentSchema);