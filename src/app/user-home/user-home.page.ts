import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassGenerationPage } from '../pass-generation/pass-generation.page';
import { User } from 'src/Class/User';
import { PolicyService } from 'src/service/policy.service';
import { AlertService } from '../alert-info/alert-service.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  user = new User();
  constructor(private router:Router,private policyService: PolicyService,private alertservice: AlertService) { }

  ngOnInit() {
    
  }
pass()
{
  this.router.navigate(['pass-generation']);
}
Fine()
{
  this.router.navigate(['fineleft']);
}
geolocation()
{
  this.router.navigate(['geolocation']);
}

  LogOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  start()
  {
    let id= JSON.parse(localStorage.getItem('user')).$key;
    this.policyService.startuser(id);
    
    this.alertservice.Alert("STARTES",4,function(){},function(){})
  }
  stop()
  {
    let id= JSON.parse(localStorage.getItem('user')).$key;
    this.policyService.stopuser(id);
    
    this.alertservice.Alert("STOPS",4,function(){},function(){})
  }
}
