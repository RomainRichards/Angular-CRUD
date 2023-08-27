import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Http call request
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  saveStudent(inputData: object){
        
    return this.httpClient.post('http://localhost:8000/api/students', inputData); // post method to save the data.
  }
}
