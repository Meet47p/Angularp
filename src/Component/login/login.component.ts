import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
myForm: FormGroup;

constructor() {
  this.myForm = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
}
clicklog(){
  alert("works"); 
}
}
