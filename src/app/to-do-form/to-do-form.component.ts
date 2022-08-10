import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { taskStatus } from '../Utils';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  constructor(private todoService: TaskServiceService, private router: Router) { }

  todoForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskDesc: new FormControl(''),
    taskPriorty: new FormControl('')
  });

  Id;

  fileToUpload: File | null = null;

  priorty = [{"name":"average"}, {"name":"high"}, {"name":"critical"}];

  ngOnInit() {
    this.Id = this.randomDate();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submitForm() {

    let addTodo = {
      "taskId": this.Id, "title": this.todoForm.value.taskTitle, "description": this.todoForm.value.taskDesc, "priorty": this.todoForm.value.taskPriorty,
       "image": this.fileToUpload, "taskStatus": taskStatus[1]};

    this.todoService.settaskData(addTodo);
    this.router.navigateByUrl('');
  }

  randomDate() {
    let loginuserType = '';
    let x = Math.random() * 10;
    const userTypeId = loginuserType.concat(x.toString().padStart(9, '0'))
    return parseInt(userTypeId);
}

}
