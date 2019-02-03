

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const env = functions.config();

import * as algoliasearch from 'algoliasearch';
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('lostAndFoundData');


exports.indexItem = functions.firestore
.document('Items/{itemsID}')
.onCreate((snap,context) => {
    const data = snap.data();
    const objectID = snap.id;
    return index.addObject({
        objectID,
        ...data
      });
})



