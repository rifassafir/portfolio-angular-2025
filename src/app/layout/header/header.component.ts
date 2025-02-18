import { Component, Inject, PLATFORM_ID  } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  selectedMenu   = 'about';
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    smoothScroll(targetId: string, offset: number = 0) {
      if (isPlatformBrowser(this.platformId)) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          this.selectedMenu = targetId
          console.log(this.selectedMenu)
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 800;
          let startTime: number | null = null;

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };

          requestAnimationFrame(animation);
        }
      }
    }
    easeInOutQuad(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
      this.isMenuOpen = false;
    }
}
