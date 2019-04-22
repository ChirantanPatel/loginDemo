import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private messageService: MessageService) { }
  admin = {
    userName: '',
    password: ''
  }

  static = {
    userName: 'admin',
    password: 'admin'
  }
  ngOnInit() {

  }

  login() {
    if (this.static.userName == this.admin.userName &&
      this.static.password == this.admin.password) {
      this.router.navigate(['/tablelist']);
    } else {
      this.messageService.add({ severity: 'info', summary: 'Login', detail: 'Please enter valid credentials' });
    }
  }

}
