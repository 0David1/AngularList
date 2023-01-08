import { Component } from '@angular/core';
import { TASKS } from '../button/mock-tasks';
import { Task } from '../button/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
