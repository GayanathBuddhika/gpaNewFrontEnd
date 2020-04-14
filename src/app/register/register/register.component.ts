import { AlertService } from './../../service/alert.service';
import { UserService } from './../../service/user.service';
import { AuthenticationService } from './../../service/authentication.service';
import { Router } from '@angular/router';
import { RequestUser } from './../../model/requestUser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  requestUser = new RequestUser();
  roleList: any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
     // redirect to home if already logged in
     if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.getRoleList();
    this.registerForm = this.formBuilder.group({
    //   name: string;
    // c: string;
    // password: string;
    // role: string;
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.requestUser.username = this.registerForm.get('email').value;
        this.requestUser.password = this.registerForm.get('password').value;
        console.log("8888888",this.requestUser);
        this.userService.register(this.requestUser)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("register user", data);
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    getRoleList(){
      this.roleList = this.userService.role;
    }

}
