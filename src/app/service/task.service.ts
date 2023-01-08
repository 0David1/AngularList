import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../components/button/mock-tasks';
import { Task } from '../components/button/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  }
}
