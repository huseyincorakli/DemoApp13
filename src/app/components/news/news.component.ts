import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  template:` <br>
  Newsss <br>
  <button (click)="change()">Change</button>
  {{isLoading}}
  @if(isLoading){
    <p>loading</p>
  }
  <br>

  @for(person of persons; track $index){
    @if(person.id=="002"; as result){
      {{person.name}} | {{result}} | {{$index}}
    }
  }
  `
})
export class NewsComponent {
isLoading:boolean=false;
persons= [
  {"name":"hüseyin","country":"türkiye","id":"123"},
  {"name":"ali","country":"brazil","id":"001"},
  {"name":"veli","country":"german","id":"002"},
]
change(){
    this.isLoading=!this.isLoading;
}

}
