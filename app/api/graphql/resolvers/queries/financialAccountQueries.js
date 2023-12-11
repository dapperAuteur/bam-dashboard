import clientPromise from "../../../../../lib/mongodb";

const dbCollection = "FinancialAccount";
const dbName = "palabras-express-api";

export const FinancialAccountQueries = {
    findFinancialAccounts: async (_, args, context) => {
        let {cursor, account_name, filter, limit, account_type, tranx} = {...args};
        let val = {};
        let finAccts, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                finAccts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_name: {$regex: `${filter}`, $options: "i"}
                            },{
                                account_type: {$regex: `{filter}`, $options: "i"}
                            },{
                                tranx: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(account_name){
                finAccts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_name: {$regex: `${account_name}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(account_type){
                finAccts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_type: {$regex: `${account_type}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(tranx){
                finAccts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                tranx: {$regex: `${tranx}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                finAccts = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit + 1)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (finAccts.length < limit) {
                cursor = "end";
            } else {
                cursor = finAccts.pop();
                cursor = cursor._id;
            }
            val = {
                finAccts, count, cursor
            };
            console.log('val :>> ', val);
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findFinancialAccountByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let finAcct = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            console.log('finAcct :>> ', finAcct);
            return finAcct;
        } catch (error) {
            console.log('error :>> ', error);
        }
    }
};

