import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = require('./credentials/nia-pixel-show---testes-firebase-adminsdk-8m0ty-ee554cb33c.json');

if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminAuth = getAuth();
const firestoreDB = getFirestore();

export { adminAuth, firestoreDB };
