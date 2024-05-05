import { WritableSignal } from '@angular/core';
import { computed } from '@angular/core';
import { Component, signal,effect } from '@angular/core';
import { signalUpdateFn } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoragesComponent } from './components/storages/storages.component';
import { NewsComponent } from './components/news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HomeComponent
    ,StoragesComponent,NewsComponent
  ],
  template: `
    App Component <br />
    <!-- {{deneme()}} -->
    <!-- <button (click)="setSignal()">Set</button> -->
    <!-- {{person().name}} | {{person().country}}<br>
  <button (click)="setSignalObject()">Set</button> -->
    {{ value() }}
    <br />
    <button (click)="onComputed()">Computed</button>
    <br />
    <app-home [deneme]="value2"></app-home>
    <app-storages></app-storages>
    <app-news></app-news>
  `
})
export class AppComponent {
  //  deneme:WritableSignal<number> = signal(3);
  // person = signal({name:'hüseyin',country:'türkiye'})
  // newPersonName:string="Abbas"
  //  setSignal(){
  //   // this.deneme.set(5)
  //   // this.deneme.update(data=>data*5)
  //  }
  //  setSignalObject(){
  //   this.person.update(prevValue => ({
  //     ...prevValue,
  //     name: 'ahmet'
  //   }));
  //  }
  value = signal(4);
  value2 = computed(
    () => `value  degeri ${this.value()} olarak değişti`
  );
  onComputed() {
    this.value.update((data) => data * 2);
  }

  // ---------------------------------
  // ---------------------------------

  constructor(){
    effect(()=> console.log(`value degeri : ${this.value()}`))
  }
}
