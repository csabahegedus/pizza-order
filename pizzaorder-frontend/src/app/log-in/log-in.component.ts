import { Component, OnInit } from '@angular/core';
import { User } from 'src/domain/user';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: User = {
    name: null,
    password: '',
    role: null,
    username: '',
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    const user = form.value as User;
    this.authService.login(user.username, user.password);
  }

}
