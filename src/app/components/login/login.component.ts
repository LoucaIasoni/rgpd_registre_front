import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentification.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  singInDisplay = true;
  signUpDisplay = false;
  forgotPassword = false;
  users:any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService : AuthenticationService,
      private formBuilder: FormBuilder,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }

  async ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            async data => {
                this.router.navigate(['home']);
            },
            error => {
                this.error = 'Email et/ou Mot de passe incorrect.';
                this.loading = false;
        });  
    }

  signInNow() {
    this.router.navigate(['new-account']);
  }

}
