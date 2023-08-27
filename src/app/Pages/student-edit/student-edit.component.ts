import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  studentId!: any;
  student!: any;

  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  errors: any = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    //alert(this.studentId)

    this.studentService.getStudent(this.studentId).subscribe((res:any) => {
      console.log(res)
      this.student=res.student

    });

  }

  updateStudent() {

  }
}
