import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

const finAcctSchema = new Schema(
  {
    account_name: {
      type: String,
      required: true,
      unique: true
    },
    current_value: {
      type: String,
      required: true,
      unique: true
    },
    account_type: {
      type: String,
      required: true,
      unique: true
    },
    fin_inst: {
      type: String,
      required: true,
      unique: true
    },
    manager: {
      type: String,
      required: true,
      unique: true
    },
    manager: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

const FinancialAccount = mongoose.models.FinancialAccount || mongoose.model("FinancialAccount", finAcctSchema);

export default FinancialAccount;