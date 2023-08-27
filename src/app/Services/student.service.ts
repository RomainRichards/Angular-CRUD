import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Http call request
export class StudentService {

  constructor(private httpClient: HttpClient) {}

  saveStudent(input: object){
        
    return this.httpClient.post(''); // post method to save the data.
  }
}
