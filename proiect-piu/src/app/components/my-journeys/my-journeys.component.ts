import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Journey } from 'src/app/_models/journey';

@Component({
  selector: 'app-my-journeys',
  templateUrl: './my-journeys.component.html',
  styleUrls: ['./my-journeys.component.scss']
})
export class MyJourneysComponent implements OnInit{
  journey: Journey | undefined;
  startingDate: Date | undefined;
  endDate: Date | undefined;
  todo: string[] = [];
  done: string[] = [];
  activity: string | undefined;

  constructor() {} 

  ngOnInit() {
    this.journey = JSON.parse(localStorage.getItem("journey")!);
    let localTodo = JSON.parse(localStorage.getItem("todo")!);
    let localDone = JSON.parse(localStorage.getItem("done")!);
    if(localTodo !== null && localTodo !== undefined) {
      this.todo = localTodo;
    }
    if(localDone !== null && localDone !== undefined) {
      this.done = localDone;
    }
    console.log(this.journey);
    this.startingDate = this.randomDate(new Date(2024, 0, 1), new Date(2024, 0, 15));
    this.endDate = this.randomDate(new Date(2024, 0, 16), new Date(2024, 0, 30));
  }

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  numSequence(n: number): Array<number> { 
    return Array(n); 
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addToDoList(){
    this.todo.push(this.activity!);
    localStorage.setItem("todo", JSON.stringify(this.todo));
    localStorage.setItem("done", JSON.stringify(this.done));
  }
}
