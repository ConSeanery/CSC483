import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1 [style.color]="titleStyle ? 'green' : 'pink'">Hey, Guys!</h1>
  <p>How are you doing?<p>
  <p>{{ myObject.gender }}</p>
  <ul>
    <li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>
  <li *ngIf="myArr">Yeah, I exist.</li>
  <ul>
    <li *ngIf="myArr; else otherTmpl">Yeah, I exist.</li>
  </ul>
  <ng-template #otherTmpl>No, I do.</ng-template>
  <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>I'm here</ng-template>
  <ng-template #tmpl2>I'm not here</ng-template>
  <img src="{{ angularLogo }}">
  <button [disabled]="buttonStatus">My Button</button>
  <button [disabled]="buttonStatus == 'enabled'">My Button</button>
  <button (click)="myEvent($event)">My Button</button>
  <p>{{ someProperty }}</p>
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
  
  `,
  
  
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
      ]),
             ],

  //styleUrls: ['./app.component.css']
  styles: [`
    h1 {
        text-decoration:underline;
    }
	p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
`]
 })
 
 
export class AppComponent {
	
	state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
  
	titleStyle = 'red';
	buttonStatus = 'enabled';
    title = 'app works!';
    angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
 
 myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };
 
 myArr = ['him','hers','yours','theirs'];
	myEvent(event) {
    console.log(event);
  }
  
  constructor(private dataService:DataService) {
	  
  }

  
 someProperty:string[] = [];

  ngOnInit() {
    console.log(this.dataService.cars);

    //this.someProperty = this.dataService.myData();
	this.someProperty = this.dataService.cars;
	
  }
}
