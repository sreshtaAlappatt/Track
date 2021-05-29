import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/service/policy.service';
import { User } from 'src/Class/User';
import { AlertService } from '../alert-info/alert-service.service';
import { ValidationService } from 'src/service/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  UserList: any[] = [];
  user = new User();
  constructor(private policyService: PolicyService, private alertservice: AlertService,
    private validation: ValidationService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    
      this.user= JSON.parse(localStorage.getItem('user'));
      
  }
}
