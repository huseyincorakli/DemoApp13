import { Component, Input, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`
  {{deneme()}}
  `
})
export class HomeComponent {
@Input() deneme:Signal<string>
}
