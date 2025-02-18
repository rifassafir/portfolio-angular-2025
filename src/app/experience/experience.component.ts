import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      year: '2024',
      company: 'iRoid Technologies',
      role: 'Web Developer / Full Stack Developer (Team lead)',
      date: 'July 2021 - Present',
      description: [
        'Developed responsive web applications using HTML, CSS, and JavaScript.',
        'Collaborated with a team of designers and developers to implement new features and enhancements.',
        'A diverse range of projects, including fleet management systems (Angular-Laravel), inventory management systems (Laravel), e-commerce websites (React-Laravel), admin panels for multiple roles, customer relationship management (CRM), and advertisement promotion for websites with e-commerce integration.',
        'The implementation of cutting-edge technologies in the Internet of Things (IoT), like NFC (Near Field Communication using JavaScript), QRCode Reading etc.',
        'Integrated third-party APIs to enhance functionality and improve user experience.'
      ]
    },
    {
      year: '2021',
      company: 'Moonhive',
      role: 'Web Developer (Part-time due to corona)',
      date: 'Dec 2020 - April 2021',
      description: [
        'Worked as web developer, Designed user friendly websites in Wordpress that having external plugins includes Custom Post Types, Advanced Custom Fields, Elementor, Woocommerce etc.',
        'Developed websites in firebase that includes firebase authentication, CRUD operations.',
        'Learned to develop Angular and Ionic application.'
      ]
    },
    {
      year: '2020',
      company: 'Codeface Technologies',
      role: 'Web Developer (Part-time due to corona)',
      date: 'June 2020 - November 2020',
      description: [
        'Developed responsive web applications using HTML, CSS, and JavaScript.',
        'Devised various websites using codeigniter framework and learned various programming languages.',
        'Managed projects independently from start to finish with Codeigniter, Laravel frameworks.',
        'Worked with clients across Singapore and middle east.'
      ]
    },
    {
      year: '2019',
      company: 'Mysearch Global Reward (M S G R)',
      role: 'Web Developer (Full-time)',
      date: 'August 2019 - May 2020',
      description: [
        'Worked as Web developer, responsible for end-to-end web app development.',
        'Prototyped different product features for various website which boosts user experiences.',
        'Managed projects independently from start to finish.',
        'Created server-rich Codeigniter, Laravel frameworks.',
        'Worked with clients across UAE and other countries for web applications as per their specific requirements.'
      ]
    }
  ];
}
