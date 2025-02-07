import { Component } from '@angular/core';
// import { DataService } from '../data.service';
// import { CommonModule } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
