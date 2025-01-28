import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignupCred } from './signup';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
myForm: FormGroup;

constructor() {
  this.myForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z]+$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      password1: new FormControl('', [Validators.required])
    },
    {validators: this.passMatch} // Apply the custom validator here
  );
}

// Custom validator to check if passwords match
passMatch(control: AbstractControl) {
  const formGroup = control as FormGroup;
  const password = formGroup.get('password')?.value;
  const password1 = formGroup.get('password1')?.value;
  return password === password1 ? null : { passwordsDoNotMatch: true };
}
submitreg(){
  this.userinfo1=this.myForm.value;
  localStorage.setItem('name',this.userinfo1.name);
  localStorage.setItem('email',this.userinfo1.email);
  localStorage.setItem('phone',this.userinfo1.phone);
  localStorage.setItem('password',this.userinfo1.password);
  localStorage.setItem('password1',this.userinfo1.password1);
  debugger;
  if(this.userinfo1.name==="admin" &&  this.userinfo1.password==="123"){
    alert("registration Success");
  }
  
}


userinfo1: SignupCred = {
  name: '',
  email: '',
  phone: '',
  password: '',
  password1: ''
};



}



