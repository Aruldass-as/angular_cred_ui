import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
   })

  }

  getval(){
    let getUserVal = {username: '', password: ''};
    getUserVal['username'] = this.loginForm.controls['username'].value;
    getUserVal['password'] = this.loginForm.controls['password'].value;
    if(!!getUserVal){
      let userDatas = window.sessionStorage.getItem('userData');
      let userDetails = JSON.parse(String(userDatas))
     if(userDetails.username === getUserVal.username && userDetails.password === getUserVal.password){
        alert('welcome to homepage')
        sessionStorage.setItem('valid', 'true')
        this.router.navigateByUrl('/home')
      }else{
        alert('incorect details')
      }
    }else{
      alert('kindly enter value')
    }
  }

  gotoSignup(){
    this.router.navigateByUrl('/signup')
  }

}
