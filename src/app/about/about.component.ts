import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutData: any;
  isBrowser: boolean;

  constructor(private dataService: DataService, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.dataService.getAboutData().subscribe((data) => {
        this.aboutData = data;
      });
    }
  }
}
