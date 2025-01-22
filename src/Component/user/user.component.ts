import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
name:string = 'hello';
age:number = 20;

a:string = 'enter the name';
b:string = 'radio';

state:string[]=['ahmedabad','pune','mumbai'];


abc(event:any){
  debugger;
  const aa=event.target?.['value']
  alert(aa);
}
}
