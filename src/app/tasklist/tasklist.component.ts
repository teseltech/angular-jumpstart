import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
