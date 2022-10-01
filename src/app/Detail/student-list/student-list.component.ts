import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: any = [
    {
      'id': '1',
      'name': 'Swapnil Ghorpde',
      'department': 'Angular Developer'
    },
    {
      'id': '2',
      'name': 'Pravin Ghogare',
      'department': 'Angular Developer'
    },
    {
      'id': '3',
      'name': 'Eknath Rout',
      'department': 'React Developer'
    },
    {
      'id': '4',
      'name': 'Sanket Jagtap',
      'department': 'Digital Marketing'
    },
    {
      'id': '5',
      'name': 'Vikas Khandekar',
      'department': 'Technical recruiter '
    },
    {
      'id': '6',
      'name': 'Sangram Ghorpde',
      'department': 'Testing'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
