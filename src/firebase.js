import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyByEdjmkf6-4yfejmgz6BtPTSCdQi7FGH8',
	authDomain: 'filmyverse-b8d08.firebaseapp.com',
	projectId: 'filmyverse-b8d08',
	storageBucket: 'filmyverse-b8d08.firebasestorage.app',
	messagingSenderId: '534581136673',
	appId: '1:534581136673:web:021dd94fbbc89e39d18260',
	measurementId: 'G-SZ27YNH5N6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Export Auth
export const auth = getAuth();

// Create a root reference for Storage
export const storage = getStorage();

// Create Database
export const db = getFirestore();
