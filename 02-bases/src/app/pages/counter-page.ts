import { Component } from '@angular/core';

@Component({
    template: `
    <p>Counter: {{ counter + 10}}</p>
    <button (click)="counter = counter + 1">Increment</button>
    `
})
export class CounterPage {
    counter = 10;
    increaseBy(value: number) {
        this.counter = this.counter + value;
    }
}