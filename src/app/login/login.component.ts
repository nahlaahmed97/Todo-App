import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
   
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {    
    if (this.loginForm.invalid) {
      return;
    } else if (this.data.username.value == localStorage.getItem("username") && this.data.password.value == localStorage.getItem("password")) {
      this.router.navigate(['/home']);
    } else {
      this.submitted = true;      
    }
  }
}
