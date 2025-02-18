import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { getMessaging, getToken } from 'firebase/messaging';
import Swal from 'sweetalert2';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('spinAnimation', [
      state('start', style({ transform: 'rotate(0deg)' })),
      state('end', style({ transform: 'rotate(360deg)' })),
      transition('start => end', animate('10s linear')),
    ]),
  ],
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  loading = false;
  spinState = 'start';
  constructor(private firestore: Firestore, @Inject(PLATFORM_ID) private platformId: Object) {
    setTimeout(() => {
      this.spinState = 'end';
    }, 0);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  async onSubmit() {
    const { name, email, message } = this.formData;

    if (!name || !email || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }

    if (!this.validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }


    this.loading = true;

    try {
      const enquiriesCollection = collection(this.firestore, 'enquiries');
      await addDoc(enquiriesCollection, this.formData);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully.',
      });

      this.formData = { name: '', email: '', message: '' }; // Reset form
      await this.requestPermission();
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed!',
        text: `Error: ${error.message}`,
      });
    } finally {
      this.loading = false;
    }
  }
  async requestPermission() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const messaging = getMessaging();
        const token = await getToken(messaging, {
          vapidKey: 'BPbHfLtRfbI631pL7Ow-BcemUL1f3Lu6uqxsjuTezRInGXaQ54BznobBa5O6RtIlSVknsYHK9UdZEyA24FhZ30E'  // Obtain this from Firebase Console
        });

        if (token) {
          // Notification.requestPermission().then(permission => {
          //   console.log(permission); // 'granted', 'denied', or 'default'
          // });
          if (Notification.permission === 'granted') {
            new Notification('Message Sent', {
              body: 'Your contact form has been submitted successfully.',
              icon: '../../assets/images/idea.png', // Customize this icon
            });
          } else {
            // Request permission if not already granted
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
              new Notification('Message Sent', {
                body: 'Your contact form has been submitted successfully.',
                icon: '../../assets/images/idea.png',
              });
            }
          }
          console.log('Notification Token:', token);
          // Swal.fire('Notification Enabled!', 'You will receive notifications.', 'success');
        } else {
          Swal.fire('Permission Denied', 'Please enable notifications in your browser settings.', 'warning');
        }
      } catch (error) {
        console.error('Error requesting permission:', error);
      }
    }
  }
}
