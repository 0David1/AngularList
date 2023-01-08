import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../button/Task';
import { TASKS } from '../button/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
}
