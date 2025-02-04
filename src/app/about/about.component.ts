import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAboutData().subscribe((data) => {
      this.aboutData = data;
    });
  }
}
