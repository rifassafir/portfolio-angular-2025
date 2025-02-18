import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseApp, initializeApp, getApps } from '@angular/fire/app';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'safir-portfolio';
    firebaseApp: FirebaseApp;
    notificationToken: string = '';

    constructor() {
        // Check if Firebase app is already initialized
        if (!getApps().length) {
            this.firebaseApp = initializeApp(environment.firebase);
        } else {
            this.firebaseApp = getApps()[0];
        }
    }

    ngOnInit() {}
}
