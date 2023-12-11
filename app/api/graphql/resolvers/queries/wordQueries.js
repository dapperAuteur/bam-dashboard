import clientPromise from "./../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "words";
const dbName = "palabras-express-api";

export const WordQueries = {
    findWords: async (_, args, context) => {
        let {cursor, definition, filter, limit, meaning, word} = {...args};
        let val = {};
        let words, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                words = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                word: {$regex: `${filter}`, $options: "i"}
                            },{
                                meaning: {$regex: `{filter}`, $options: "i"}
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
                        //             word: {$regex: `${filter}`, $options: "i"}
                        //         },{
                        //             meaning: {$regex: `{filter}`, $options: "i"}
                        //         }
                        //     ]
                        // })
                        .countDocuments();
            } else if(word){
                words = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                word: {$regex: `${word}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(meaning){
                words = await db
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
            } else if(definition){
                words = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                definition: {$regex: `${definition}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                words = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (words.length < limit) {
                cursor = "end";
            } else {
                cursor = words.pop();
                cursor = cursor._id;
            }
            val = {
                words, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findWordByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let word = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            return word;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomWords: async (_, args, context) => {
        let {cursor, definition, filter, limit, meaning, word} = {...args};
        let val = {};
        let words, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                words = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                word: {$regex: `${filter}`, $options: "i"}
                            },{
                                meaning: {$regex: `{filter}`, $options: "i"}
                            },{
                                definition: {$regex: `${filter}`, $options: "i"}
                            }
                        ]
                    })
                    .toArray();
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            } else {
                words = await db
                    .collection(dbCollection)
                    .find({})
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (words.length < limit) {
                cursor = "end";
            } else {
                cursor = words.pop();
                cursor = cursor._id;
            }
            words = shuffle.pick(words, {
                picks: limit,
                copy: true
            });
            val = {
                words, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

