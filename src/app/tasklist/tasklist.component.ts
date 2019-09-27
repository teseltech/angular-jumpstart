import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Task {
  done: boolean;
  task: string;
};

interface TaskId extends Task { id: string; };

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.sass']
})
export class TasklistComponent implements OnInit {

  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<TaskId[]>;

  newtask: Task = {done: false, task:''};

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.tasksCollection = this.afs.collection<Task>('tasks');
    this.tasks = this.tasksCollection.valueChanges({idField: 'id'});
  }

  update(task: TaskId) {
    let doc = this.afs.doc<Task>('tasks/' + task.id);
    doc.update({ done: task.done, task: task.task });
  }

  submit() {
    this.tasksCollection.add(this.newtask);
    this.newtask = {done: false, task:''};
  }
}
