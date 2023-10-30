import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Rent A Car'; // State

  counter: number = 0;

  brands: string[] = ['BMW', 'Mercedes', 'Audi', 'VW'];

  increment(): void {
    this.counter++;
    this.brands.push('Tesla');
  }

  decrement(): void {
    this.counter--;
    this.brands.pop();
  }

  onIncrementButtonClicked(event: Event): void {
    console.log(
      '🚀 ~ file: app.component.ts:18 ~ AppComponent ~ onIncrementButtonClicked ~ event:',
      event
    );
    this.increment();
  }

  onDecrementButtonClicked(event: Event): void {
    console.log(
      '🚀 ~ file: app.component.ts:25 ~ AppComponent ~ onDecrementButtonClicked ~ event:',
      event
    );
    this.decrement();
  }
}
