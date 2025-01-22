import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
    //  { Validators: this.passMatch.bind(this) } // Correct placement of the custom validator
  );
}

// Custom validator to check if passwords match
passMatch(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const password1 = formGroup.get('password1')?.value;
  return password === password1 ? null : { passwordsDoNotMatch:true }; // Return an error object if passwords do not match
}
submitreg(){
  debugger;
  alert("submitted Successfully:");
}

}



