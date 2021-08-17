import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { task } from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  description: task[] = [];
  checked: boolean;

  completed: number = 0;
  incomplete: number = 0;

  constructor() {}

  add(desc: any) {
    this.description.push(desc);
    this.incomplete++;
  }

  public savecheckedBox: boolean;

  public oncheckboxChanged(value: boolean) {
    this.savecheckedBox = value;
    if (this.savecheckedBox) {
      this.completed++;
      this.incomplete--;
    }
  }

  ngOnInit(): void {}
}
