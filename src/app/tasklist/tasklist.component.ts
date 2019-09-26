import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Task {
  done: boolean;
  task: string;
}

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.sass']
})
export class TasklistComponent implements OnInit {

  tasks: Task[] = [
    {done: false, task:'Iron boots'},
    {done: false, task:'Aprender serenade of water'},
    {done: false, task:'Conseguir hookshot'},
    {done: false, task:'Túnica zora'},
  ];

  newtask: Task = {done: false, task:''};

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.tasks.push({...this.newtask});
    this.newtask = {done: false, task:''};
  }
}
