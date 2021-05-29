import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';
import { ModalController } from '@ionic/angular';
import { AlertWindowPage } from '../alert-window/alert-window.page';
import { AlertService } from '../alert-info/alert-service.service';
import { User } from 'src/Class/User';
import { pass} from 'src/Class/pass';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pass-generation',
  templateUrl: './pass-generation.page.html',
  styleUrls: ['./pass-generation.page.scss'],
})
export class PassGenerationPage implements OnInit {
  UserList: any[] = [];
  user = new User();
  Pass = new pass();
  details: any[] = [];
  Islogin: boolean = true;
  Isforgotpassword: boolean = false;
  Isregister: boolean = false;
  Isotp: boolean = false;
  isSubmit: boolean = false;
  today: string;
  constructor(private policyService: PolicyService,
    private router:Router,public modalCtrl: ModalController,private alertservice: AlertService) { }

  ngOnInit() {
    const now = new Date();
    this.today = now.toISOString();
  }
  

  
  WINDOW()
  {      
    let returndata = this.policyService.getBookingList1();
          
          let temp=this.user.From;
          console.log(typeof(temp));
          
          this.Pass.From2=temp;
          temp=this.user.To;
          this.Pass.To2=temp;
          temp=this.today;
          this.Pass.date=temp;
          temp=this.user.reason;
          this.Pass.reason=temp;
          temp=JSON.parse(localStorage.getItem('user')).VehicleNumber;
          this.Pass.vehiclenum2=temp;
          
          if (!(this.Pass.From2.length > 0 && this.Pass.To2.length > 0 && this.Pass.reason.length>0)) {
            this.alertservice.Alert("Please enter every credentials", 2, function () { }, function () { });}
          // const users: any[]=Array.of(JSON.parse(localStorage.getItem('user')));
          // const usersJson: any[] = Array.of(res.json());
    else{
      // var id = JSON.parse(localStorage.getItem('user')).$key;
      // console.log(this.Pass);
      
     this.policyService.createPass(this.Pass);
    this.user.From="";
    this.user.To="";
    this.user.reason="";
    this.alertservice.Alert("Requested Pass",1,function(){},function(){})
    // this.toastr.error("success",'passregister')
          }
    
  }
  
  
  ionViewWillEnter() {

    
    let returndata = this.policyService.getBookingList();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList = []
      data.forEach(d => {
        let a = d.payload.toJSON();
        console.log(a);
        a['$key'] = d.key;
        this.UserList.push(a);

        // console.log(d.key);


      })

    })
  }
  Emergency(){
    this.alertservice.Alert("Message sent to RTO",1,function(){},function(){})
  }
  
  request(){
    this.alertservice.Alert("Request has been sent to Admin",2,function(){},function(){})
  }
  LogOut(){
    
    this.router.navigate(['user-home']);
  }
  // Passss() {
  //   if (!(this.Pass.From2.length > 0 && this.Pass.To2.length > 0 && this.Pass.reason.length>0)) {
  //     this.alertservice.Alert("Please enter From and To", 2, function () { }, function () { });}
  // }
}
