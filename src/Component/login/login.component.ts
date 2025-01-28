import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginCred } from './logincred';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,],
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
router= inject (Router)

clicklog(){
 this.logcred=this.myForm.value;
 debugger;
 localStorage.setItem('logcred',JSON.stringify(this.logcred)); //data stored in location storage check in the application
 localStorage.setItem('name',this.logcred.name);
 localStorage.setItem('password',this.logcred.password);

 if(this.logcred.name=="admin" && this.logcred.password=="123"){
  alert("Login Success");
  localStorage.setItem("userID",this.logcred.name);
  this.router.navigateByUrl("home");
  debugger;
 }else{
  alert("Login Failed");
 }

}


logcred:LoginCred={
  name:'',
  password:''

};



}
