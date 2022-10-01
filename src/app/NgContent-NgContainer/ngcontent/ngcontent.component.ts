import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.css'],
})
export class NgcontentComponent implements OnInit {
  public students = [
    {
      name: 'Swapnil',
      lname: 'Ghorpade',
      age: '27',
      education: 'BE IT',
      university: 'Pune University',
      email: 'swapnil12@gmail.com',
    },
    {
      name: 'Pravin',
      lname: 'Ghogre',
      age: '26',
      education: 'BE IT',
      university: 'Pune University',
      email: 'pravin12@gmail.com',
    },
    {
      name: 'Vikas',
      lname: 'Khandekar',
      age: '28',
      education: 'BE IT',
      university: 'Pune University',
      email: 'vikas12@gmail.com',
    },
    {
      name: 'Sanket',
      lname: 'Jagtap',
      age: '25',
      education: 'BE IT',
      university: 'Pune University',
      email: 'sanket12@gmail.com',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onViewForm(student: any) {
    this.router.navigate(['/form1'], {
      queryParams: { studentDetails: JSON.stringify(student), isStudent: true },
    });
  }
}
