// interview.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private apiUrl = 'YOUR_FIREBASE_API_ENDPOINT'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getInterviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/interviews`);
  }
}
