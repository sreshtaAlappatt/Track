import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';
import { ModalController } from '@ionic/angular';
import { AlertWindowPage } from '../alert-window/alert-window.page';
import { AlertService } from '../alert-info/alert-service.service';
import { User } from 'src/Class/User';
import {mask} from 'src/Class/mask';  

 @Component({
  selector: 'app-fineleft',
  templateUrl: './fineleft.page.html',
  styleUrls: ['./fineleft.page.scss'],
})
export class FineleftPage implements OnInit {

  UserList:any[]=[];
  Mask=new mask();
  constructor(private policyService: PolicyService,
    private router:Router,public modalCtrl: ModalController,private alertservice: AlertService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    let b=JSON.parse(localStorage.getItem('user')).VehicleNumber;
    console.log(b);
    
    let returndata = this.policyService.getBookingList2();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
         //console.log(a);
        if((a['vehiclenum2']===b) && a['nomask']>0)
        { 
          console.log(a);
          this.UserList.push(a);
        
        }
      })
   


    })


  }
  LogOut(){
    localStorage.clear();
    this.router.navigate(['user-home']);
  }
  
}
