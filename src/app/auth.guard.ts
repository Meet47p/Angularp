import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(localStorage.getItem('logcred')!=null){ //check if user is logged in or not
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }

};
