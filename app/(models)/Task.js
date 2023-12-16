import mongoose, { Schema } from "mongoose";
// import FinancialAccount from "./FinancialAccount";
// import Currency from "./Currency";
// import Media from "./Media";
// import Note from "./Note";
// import Tag from "./Tag";
// import Budget from "./Budget";

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
 {
    task_name: {
      type: String,
      required: true,
      unique: true
    },
    // budget_id: {
    //   type: String,
    //   required: false,
    //   unique: false
    // },
    // budget: Budget,
    currency_id: String,
    // currency: [Currency],
    description: String,
    // fin_acct: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "FinancialAccount",
    //   required: false
    // }],
    // fin_acc_id: String,
    // media: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Media",
    //   required: false
    // }],
    // note: [Note],
    // tag: [Tag],
    occurrence_string: String
 },
 {
    timestamps: true,
 }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;