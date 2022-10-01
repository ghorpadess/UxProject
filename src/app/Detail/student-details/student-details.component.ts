import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  selected: any = [];
  studentList: any = [
    {
      id: '1',
      name: 'Swapnil Ghorpde',
      department: 'Angular Developer',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
    {
      id: '2',
      name: 'Pravin Ghogare',
      department: 'Angular Developer',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
    {
      id: '3',
      name: 'Eknath Rout',
      department: 'React Developer',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
    {
      id: '4',
      name: 'Sanket Jagtap',
      department: 'Digital Marketing',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
    {
      id: '5',
      name: 'Vikas Khandekar',
      department: 'Technical recruiter ',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
    {
      id: '6',
      name: 'Sangram Ghorpde',
      department: 'Testing',
      age: '27',
      salary: '30k',
      address: 'Bekari nagar Hadapsar,tal: Pune',
    },
  ];
  id: any;
  constructor(private activate: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activate.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params['id'];
    });

    let asa = this.selected.push(this.studentList[this.id - 1]);
    console.log(this.selected);
  }

  onStudentList() {
    this.router.navigate(['/sList']);
  }
}
