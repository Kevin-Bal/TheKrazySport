import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  model: any = {};
  userForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])

    })
    sessionStorage.setItem('token', '');
}

login() {
  this.model.email = this.userForm.value.email;
  this.model.password = this.userForm.value.password;
  this.userService.login(this.model.email, this.model.password);
}

}
