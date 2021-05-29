import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';
import { ModalController } from '@ionic/angular';
import { AlertWindowPage } from '../alert-window/alert-window.page';
import { AlertService } from '../alert-info/alert-service.service';
import { User } from 'src/Class/User';
import {mask} from 'src/Class/mask'; 
import { pass } from 'src/Class/pass';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  UserList:any[]=[];
  UserList1:any[]=[];
  Mask=new mask();
  Pass=new pass();
  user= new User();
  a: any;
  b: any;
  c:any;
  constructor(private policyService: PolicyService,
    private router:Router,public modalCtrl: ModalController,private alertservice: AlertService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){

    let temp=JSON.parse(localStorage.getItem('user')).VehicleNumber;
     
    let returndata = this.policyService.getBookingList1();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
         
        if(a['vehiclenum2']===temp)
        { 
          console.log(a);
          this.UserList.push(a);
        
        }
        
        
      })
   


    })
    let returndata1 = this.policyService.getBookingList2();
    returndata1.snapshotChanges().subscribe((data) => {
      this.UserList1=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
        if(a['vehiclenum2']===temp)
        { 
          console.log(a);
          this.UserList1.push(a);
          
        
        }
        
        
        
      })

   


    })


  }

}
