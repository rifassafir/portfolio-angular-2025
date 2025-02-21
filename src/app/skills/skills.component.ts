import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  isBrowser: boolean;
  skillsDataList: any;
  filteredSkillsDataList: any;
  constructor(private firestoreService: DataService, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      this.firestoreService.getSkillsData().subscribe((data) => {
        this.skillsDataList = data[0].skillList;
        this.filteredSkillsDataList = this.skillsDataList.map((skill: any) => ({
          title: skill.title,
          skillSet: skill.skillsList.map((s: any) => s.name)
        }));
      });
    }
  }
  formatJsonWithLineNumbers(json: any): string {
    if (json === undefined || json === null) {
        return '<span class="error">Invalid JSON: Value is null or undefined</span>';
    }

    let jsonString: string;
    try {
        jsonString = JSON.stringify(json, null, 2);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return `<span class="error">Error formatting JSON: ${errorMessage}</span>`;
    }

    const lines = jsonString.split('\n');
    return lines.map((line, index) => {
        const lineNumber = `<span class="line-number">${index + 1}</span>`;
        const formattedLine = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
                let cls = 'json-number';
                if (/^"/.test(match)) {
                    cls = /:$/.test(match) ? 'json-key' : 'json-string';
                } else if (/true|false/.test(match)) {
                    cls = 'json-boolean';
                } else if (/null/.test(match)) {
                    cls = 'json-null';
                }
                return `<span class="${cls}">${match}</span>`;
            });
        return `${lineNumber} ${formattedLine}`;
    }).join('\n');
}

  skillData = [
    {
      title: "Technical Skills",
      icon: "../../assets/images/skills/tech-skills.png",
      skillsList: [
        {
          name: "JavaScript, PHP",
          iconClass: "fa fa-code",
          iconColor: "text-yellow-400"
        },
        {
          name: "Angular, React",
          iconClass: "fa fa-cogs",
          iconColor: "text-red-400"
        },
        {
          name: "MySQL, MongoDB",
          iconClass: "fa fa-database",
          iconColor: "text-blue-400"
        }
      ]
    },
    {
      title: "Frontend Development",
      icon: "../../assets/images/skills/frontend-dev.png",
      skillsList: [
        {
          name: "HTML5, CSS3",
          iconClass: "fa fa-html5",
          iconColor: "text-blue-400"
        },
        {
          name: "Sass, Tailwind",
          iconClass: "fa fa-css3",
          iconColor: "text-purple-400"
        },
        {
          name: "JavaScript, jQuery",
          iconClass: "fa fa-code",
          iconColor: "text-green-400"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: "../../assets/images/skills/backend-dev.png",
      skillsList: [
        {
          name: "API Development",
          iconClass: "fa fa-exchange",
          iconColor: "text-indigo-400"
        },
        {
          name: "JWT, OAuth",
          iconClass: "fa fa-key",
          iconColor: "text-yellow-400"
        },
        {
          name: "MySQL, MongoDB",
          iconClass: "fa fa-database",
          iconColor: "text-red-400"
        }
      ]
    },
    {
      title: "Databases & Management",
      icon: "../../assets/images/skills/db-management.png",
      skillsList: [
        {
          name: "MySQL, MongoDB",
          iconClass: "fa fa-server",
          iconColor: "text-teal-400"
        },
        {
          name: "Query Optimization",
          iconClass: "fa fa-bar-chart",
          iconColor: "text-orange-400"
        }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: "../../assets/images/skills/dev-ops.png",
      skillsList: [
        {
          name: "CI/CD, Docker",
          iconClass: "fa fa-wrench",
          iconColor: "text-green-400"
        },
        {
          name: "AWS, Firebase",
          iconClass: "fa fa-cloud",
          iconColor: "text-indigo-400"
        }
      ]
    },
    {
      title: "Project Management",
      icon: "../../assets/images/skills/project-management.png",
      skillsList: [
        {
          name: "Agile, Kanban",
          iconClass: "fa fa-users",
          iconColor: "text-yellow-400"
        },
        {
          name: "Jira, Slack",
          iconClass: "fa fa-list",
          iconColor: "text-blue-400"
        }
      ]
    }
  ];

  addSkill() {
    this.firestoreService.createSkill({ skillList: this.skillData })
      .then(() => {
        console.log('Skill added successfully!');
      })
      .catch((error) => {
        console.error('Error adding skill: ', error);
      });
  }
}
