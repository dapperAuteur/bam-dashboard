import clientPromise from "./../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "verbos";
const dbName = "palabras-express-api";

export const VerboQueries = {
    findVerbos: async (_, args, context) => {
        console.log('args :>> ', args);
        let {cursor, english, filter, limit, reflexive, irregular, categoría_de_irregular, cambiar_de_irregular, terminación, grupo, spanish} = {...args};
        let val = {};
        let verbos, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                spanish: {$regex: `${filter}`, $options: "i"}
                            },{
                                english: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(spanish){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                spanish: {$regex: `${spanish}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(english){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                english: {$regex: `${english}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(reflexive){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                reflexive: {$regex: `${reflexive}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(irregular){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                irregular: {$regex: `${irregular}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(categoría_de_irregular){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                categoría_de_irregular: {$regex: `${categoría_de_irregular}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(cambiar_de_irregular){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                cambiar_de_irregular: {$regex: `${cambiar_de_irregular}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(terminación){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                terminación: {$regex: `${terminación}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(grupo){
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                grupo: {$regex: `${grupo}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                verbos = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (verbos.length < limit) {
                cursor = "end";
            } else {
                cursor = verbos.pop();
                cursor = cursor._id;
            }
            val = {
                verbos, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findVerboByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let verbo = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            return verbo;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomVerbos: async (_, args, context) => {
        let {cursor, definition, filter, limit, meaning, verbo} = {...args};
        let val = {};
        let verbos, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                verbos = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                spanish: {$regex: `${filter}`, $options: "i"}
                            },{
                                english: {$regex: `{filter}`, $options: "i"}
                            },{
                                terminación: {$regex: `${filter}`, $options: "i"}
                            }
                        ]
                    })
                    .toArray();
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            } else {
                verbos = await db
                    .collection(dbCollection)
                    .find({})
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (verbos.length < limit) {
                cursor = "end";
            } else {
                cursor = verbos.pop();
                cursor = cursor._id;
            }
            verbos = shuffle.pick(verbos, {
                picks: limit,
                copy: true
            });
            val = {
                verbos, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

