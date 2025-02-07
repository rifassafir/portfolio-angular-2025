import { Injectable } from '@angular/core';
import { Firestore, collectionData,addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getAboutData(): Observable<any[]> {
    const aboutCollection = collection(this.firestore, 'about');
    return collectionData(aboutCollection, { idField: 'id' });
  }

  getSkillsData(): Observable<any[]> {
    const skillsCollection = collection(this.firestore, 'skills');
    return collectionData(skillsCollection, { idField: 'id' });
  }

  // Add similar methods for work, experience, etc
  async createSkill(data: any) {
    try {
      const skillsCollection = collection(this.firestore, 'skills'); // Reference to the 'skills' collection
      await addDoc(skillsCollection, data); // Add a new document to the collection
      alert('Skills submitted successfully!');
    } catch (error) {
      alert('Error submitting form: ' + error);
    }
  }

}
