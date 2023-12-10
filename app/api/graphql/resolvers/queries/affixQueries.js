import clientPromise from "./../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "affixes";
const dbName = "palabras-express-api";

export const AffixQueries = {
    findAffixes: async (_, args, context) => {
        let {cursor, example, filter, limit, meaning, morpheme} = {...args};
        let val = {};
        let affixes, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                example: {$regex: `${filter}`, $options: "i"}
                            },{
                                meaning: {$regex: `{filter}`, $options: "i"}
                            },{
                                morpheme: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        // .find({
                        //     $or: [
                        //         {
                        //             example: {$regex: `${filter}`, $options: "i"}
                        //         },{
                        //             meaning: {$regex: `{filter}`, $options: "i"}
                        //         },{
                        //             morpheme: {$regex: `{filter}`, $options: "i"}
                        //         }
                        //     ]
                        // })
                        .countDocuments();
            } else if(example){
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                example: {$regex: `${example}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(meaning){
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                meaning: {$regex: `${meaning}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(morpheme){
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                morpheme: {$regex: `${morpheme}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                affixes = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit + 1)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (affixes.length < limit) {
                cursor = "end";
            } else {
                cursor = affixes.pop();
                cursor = cursor._id;
            }
            val = {
                affixes, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findAffixByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let affix = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            console.log('affix :>> ', affix);
            return affix;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomAffixes: async (_, args, context) => {
        let { cursor, filter, limit } = { ...args };
        let val = {};
        let affixes, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                example: {$regex: `${filter}`, $options: "i"}
                            },{
                                meaning: {$regex: `{filter}`, $options: "i"}
                            },{
                                morpheme: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            } else {
                affixes = await db
                    .collection(dbCollection)
                    .find({})
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (affixes.length < limit) {
                cursor = "end";
            } else {
                cursor = affixes.pop();
                cursor = cursor._id;
            }
            affixes = shuffle.pick(affixes, {
                picks: limit,
                copy: true
            });
            val = {
                affixes, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

