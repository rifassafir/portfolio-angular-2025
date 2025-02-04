import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { RouterModule } from '@angular/router';  // Import RouterModule if you're using routing

@Component({
  selector: 'app-root',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, RouterModule], // Add required modules here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'safir-portfolio';
}
