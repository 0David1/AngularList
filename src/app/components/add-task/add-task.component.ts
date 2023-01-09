import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../button/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string= "";
  day:string = "";
  reminder:boolean = false;
  id:number=5;

  constructor(){ }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("onSubmit")
    if(this.text.length === 0){
      alert("Please add a task")
      return
    }

    const {text,day,reminder,id} = this
    const newTask = {text,day,reminder,id}

    this.onAddTask.emit(newTask);
    
  }

}
