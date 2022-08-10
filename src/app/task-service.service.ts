import { Injectable } from '@angular/core';
import { taskStatus } from './Utils';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  todoTask = [{ "taskId":"1","title": "Design", "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic", "priorty": "high", "image": {},"taskStatus": "To Do" },
  { "taskId":"2","title": "Pattern", "description": "pattern area", "priorty": "high","image": {}, "taskStatus": "In Progress" }];

  public gettaskData () {
    return this.todoTask;
  }

  public settaskData (setObj){
      this.todoTask.push(setObj);
  }

  public updateTasks(taskDet){
    let arrChangeElement = this.todoTask.filter(e=>e.taskId == taskDet.progresstask);
    for (let i = 0; i < this.todoTask.length; i++){
      if (arrChangeElement[0].taskId == this.todoTask[i].taskId){
        this.todoTask[i].taskStatus = taskStatus[taskDet.navTask];
      }
    }
  }
}
