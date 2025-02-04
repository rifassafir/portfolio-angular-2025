import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };

  constructor(private firestore: Firestore) {}

  onSubmit() {
    const enquiriesCollection = collection(this.firestore, 'enquiries');
    addDoc(enquiriesCollection, this.formData)
      .then(() => alert('Form submitted successfully!'))
      .catch((error) => alert('Error submitting form: ' + error));
  }
}
