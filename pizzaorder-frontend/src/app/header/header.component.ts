import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserRole } from 'src/domain/user-role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserRole = UserRole;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
