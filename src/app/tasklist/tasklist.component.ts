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

  constructor() { }

  ngOnInit() {
  }

}
