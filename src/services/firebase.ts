import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  orderBy, 
  query,
  serverTimestamp 
} from 'firebase/firestore';
import type { LandingPage } from '../types';

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Collection reference
const landingPagesCollection = collection(db, 'landingPages');

// Firebase service functions
export const firebaseService = {
  // Get all landing pages
  async getAllLandingPages(): Promise<LandingPage[]> {
    try {
      const q = query(landingPagesCollection, orderBy('updatedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as LandingPage));
    } catch (error) {
      console.error('Error fetching landing pages:', error);
      throw error;
    }
  },

  // Get single landing page by ID
  async getLandingPage(id: string): Promise<LandingPage | null> {
    try {
      const docRef = doc(db, 'landingPages', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as LandingPage;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching landing page:', error);
      throw error;
    }
  },

  // Create new landing page
  async createLandingPage(landingPage: Omit<LandingPage, 'id' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(landingPagesCollection, {
        ...landingPage,
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating landing page:', error);
      throw error;
    }
  },

  // Update existing landing page
  async updateLandingPage(id: string, landingPage: Partial<Omit<LandingPage, 'id'>>): Promise<void> {
    try {
      const docRef = doc(db, 'landingPages', id);
      await updateDoc(docRef, {
        ...landingPage,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating landing page:', error);
      throw error;
    }
  },

  // Delete landing page
  async deleteLandingPage(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'landingPages', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting landing page:', error);
      throw error;
    }
  }
};