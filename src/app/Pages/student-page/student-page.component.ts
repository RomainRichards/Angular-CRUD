import { Component } from '@angular/core';
import { StudentService, StudentResponse } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {

  constructor(private studentService: StudentService) {}
  
  students!: StudentResponse[];
  isLoading: boolean = false;

  // get data from api for student list
  ngOnInit(){

    this.getStudentLists();

  }

  getStudentLists() {

    this.isLoading = true;
    this.studentService.getStudents().subscribe((res) => {
      console.log(res);
      this.students = res.students;
      this.isLoading = false;

    });
  }
}
