import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from "../../../service/login/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Discuter1Service} from "../../../publication/discuter1.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = true;
  errorMessage = '';
  groupId: string;

  constructor(private authService: AuthService,
              private router: Router,
              private socketService: Discuter1Service,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametre) => {
        this.groupId = parametre.id;
      }
    );
  }

  creeCompte(): void {
    this.isLogin = !this.isLogin;
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value, this.groupId).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        localStorage.setItem('groupId', this.groupId);
        this.socketService.joinRoom({user: response.username, userId: response.userId , room: this.groupId});
        this.errorMessage = '';
        // ['/login', groupe._id]
        this.router.navigate(['/satuts', this.groupId]);
        console.log('success');
      },
      (error) => {
        console.log(error.error.error);
        this.errorMessage = error.error.error;
      }
    );
  }
}
