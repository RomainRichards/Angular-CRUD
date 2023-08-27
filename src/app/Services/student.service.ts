import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse {
  id: number,
  name: string,
  course: string,
  email: string,
  phone: string,
  created_at: string,
  updated_at: string
}

export interface StudentResponseType {
  status: Number,
  students: StudentResponse[]
}

@Injectable({
  providedIn: 'root'
})

// Http call request to get info from api.
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  getStudents() {
    
    return this.httpClient.get<StudentResponseType>(`http://localhost:8000/api/students`); // getting data to display.
  }

  getStudent(studentId: number) {
    return this.httpClient.get(`http://localhost:8000/api/students/${studentId}/edit`);
  }

  saveStudent(inputData: object){
        
    return this.httpClient.post(`http://localhost:8000/api/students`, inputData); // post method to save the data.
  }
}
