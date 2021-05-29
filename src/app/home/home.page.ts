import { Component, OnInit } from '@angular/core';
import { User } from 'src/Class/User';
import { PolicyService } from 'src/service/policy.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertWindowPage } from '../alert-window/alert-window.page';
import { AlertService } from '../alert-info/alert-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user = new User();
  ref: any;
  UserList: any[] = [];
  constructor(private policyService: PolicyService,
    private router:Router,public modalCtrl: ModalController,private alertservice: AlertService) {
    // this.ref = firebase.database().ref('Users')
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    let returndata = this.policyService.getBookingList();
    console.log(returndata)

    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
        console.log(a);
        a['$key'] = d.key;
        this.UserList.push(a);

        console.log(d.key);


      })
      console.log(this.UserList);


    })


  }

  Emergency(){
    this.alertservice.Alert("Message sent to RTO",1,function(){},function(){})
  }

  FineGeneration() {
    
    this.router.navigate(['fine']);
  }


  create(user: User) {
    this.policyService.createBooking(this.user);
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
