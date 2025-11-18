import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }
  addTask() {
    return this.http.post(this.apiURL, {
      id: 3,
      text: 'New task',
      day: 'May 49th at 12:30pm',
      reminder: false,
    });
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
