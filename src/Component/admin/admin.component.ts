import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  state:string[]=['ahmedabad','pune','mumbai'] ;
  students:any[]=[
    {name:'ahmed',age:20},
    {name:'khan',age:21}, 
    {name:'ali',age:22}
  ]
}