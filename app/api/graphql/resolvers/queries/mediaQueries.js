import clientPromise from "../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "Media";
const dbName = "palabras-express-api";

export const MediaQueries = {
    findMedia: async (_, args, context) => {
        let {cursor, example, filter, limit, meaning, morpheme} = {...args};
        let val = {};
        let media, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                media = await db
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
                media = await db
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
                media = await db
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
                media = await db
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
                media = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit + 1)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (media.length < limit) {
                cursor = "end";
            } else {
                cursor = media.pop();
                cursor = cursor._id;
            }
            val = {
                media, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findMediaByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let media = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            console.log('media :>> ', media);
            return media;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomMedia: async (_, args, context) => {
        let { cursor, filter, limit } = { ...args };
        let val = {};
        let media, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                media = await db
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
                media = await db
                    .collection(dbCollection)
                    .find({})
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (media.length < limit) {
                cursor = "end";
            } else {
                cursor = media.pop();
                cursor = cursor._id;
            }
            media = shuffle.pick(media, {
                picks: limit,
                copy: true
            });
            val = {
                media, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

