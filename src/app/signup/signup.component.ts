import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    let data = {name: '', email: '', phoneNo:'', username:'', password: ''}
    data['name'] = this.signupForm.controls['name'].value;
    data['email'] = this.signupForm.controls['email'].value;
    data['phoneNo'] = this.signupForm.controls['phoneNo'].value;
    data['password'] = this.signupForm.controls['password'].value;
    data['username'] = this.signupForm.controls['username'].value;
    if(!!data){
    sessionStorage.setItem('userData', JSON.stringify(data));
    this.router.navigate(['/']);
    }
  }

}
