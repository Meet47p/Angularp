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
    name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    password: new FormControl('',Validators.required)
  });
}
clicklog(){
 this.logcred=this.myForm.value;
 debugger;

}

logcred:any={
  name:'',
  password:''

};



}
