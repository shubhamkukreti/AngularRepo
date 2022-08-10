import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { taskStatus } from '../Utils';

declare var window: any;

@Component({
  selector: 'app-to-do-module',
  templateUrl: './to-do-module.component.html',
  styleUrls: ['./to-do-module.component.scss']
})
export class ToDoModuleComponent implements OnInit {

  constructor(private todoService: TaskServiceService) { }

  formModal: any;
  modelName;
  totalTodo = 0;
  totalProg = 0;
  totalComp = 0;

  progressForm = new FormGroup({
    progresstask: new FormControl(''),
    navTask: new FormControl('')
  });

  taskStatus;

  todoTask = [];
  ngOnInit() {
    this.todoTask = this.todoService.gettaskData();
    this.taskStatus = taskStatus;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.calculateTotal();
  }

  openFormModal(setModelName) {
    this.modelName = setModelName;
    this.formModal.show();
  }

  updateTask() {
    this.todoService.updateTasks(this.progressForm.value);
    this.formModal.hide();
    this.calculateTotal();
  }

  get key() {
    return Object.keys(this.taskStatus);
  }

  calculateTotal() {
    this.totalTodo = 0;
    this.totalProg = 0;
    this.totalComp = 0;
    for (let i = 0; i < this.todoTask.length; i++) {
      if (this.todoTask[i].taskStatus == "To Do") {
        this.totalTodo = this.totalTodo + 1;
      } else if (this.todoTask[i].taskStatus == "In Progress") {
        this.totalProg = this.totalProg + 1;
      } else if (this.todoTask[i].taskStatus == "Completed") {
        this.totalComp = this.totalComp + 1;
      }
    }
  }


}
