import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/service/policy.service';
import { User } from 'src/Class/User';
import { AlertService } from '../alert-info/alert-service.service';
import { ValidationService } from 'src/service/validation.service';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserList: any[] = [];
  user = new User();
  Islogin: boolean = true;
  Isforgotpassword: boolean = false;
  Isregister: boolean = false;
  Isotp: boolean = false;
  isSubmit: boolean = false;
  AdminList: any[] = [{ Id: 1, Name: "admin", Email: "admin@gmail.com", UserName: "admin@gmail.com", Password: "admin123", UserType: 1 }]
  constructor(private policyService: PolicyService, private alertservice: AlertService,
    private validation: ValidationService, private router: Router,private sms:SMS) { }

  ngOnInit() {

  }


  ionViewWillEnter() {
    if (localStorage.getItem('user')) {
      if (JSON.parse(localStorage.getItem('user')).UserType == 1) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['user-home']);
      }

    }
    let returndata = this.policyService.getBookingList();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList = []
      data.forEach(d => {
        let a = d.payload.toJSON();
        // console.log(a);
        a['$key'] = d.key;
        this.UserList.push(a);

        // console.log(d.key);


      })

    })
  }

  

  Login() {
    if (this.user.UserName.length > 0 && this.user.Password.length > 0) {

      let admincheck = this.AdminList.find(d => d.UserName == this.user.UserName && d.Password == this.user.Password)
      if (!!admincheck) {
        localStorage.setItem('user', JSON.stringify(admincheck));
        this.user=new User();
        this.router.navigate(['home']);
      } else {
        let usercheck = this.UserList.find(e => e.UserName == this.user.UserName && e.Password == this.user.Password)
        
        if (!!usercheck) {
          localStorage.setItem('user', JSON.stringify(usercheck));
          this.user=new User();
          // getUserId(this.user);
          this.router.navigate(['user-home']);
        } else {
          this.alertservice.Alert("Invalid login credentials", 2, function () { }, function () { });
        }
      }


    } else {
      this.alertservice.Alert("Please enter UserName and Password", 2, function () { }, function () { });
    }
  }

  Register() {
    if (this.user.Name.length > 0) {
      this.user.UserType = 2
      if (this.validation.ValidateEmail(this.user.Email, true) &&
        this.validation.ValidateMobile(this.user.Mobile, true)) {
        if (this.user.VehicleNumber.length > 0) {
          if (this.user.UserName.length > 0) {
            if (this.user.Password.length >= 6) {
              if (!!this.UserList) {
                let countcheck = this.UserList.find(d => d.Email == this.user.Email || d.Mobile == this.user.Mobile || d.VehicleNumber == this.user.VehicleNumber );
                if (!!countcheck) {
                  this.alertservice.Alert("Email/Mobile/vehicle number already registered", 2, function () { }, function () { })
                } else {
                  this.policyService.createBooking(this.user);
                  this.alertservice.Alert("Registration completed successfully, please continue with your username and password", 1, function () { }, function () { })
                  this.user = new User();
                  this.ToggleControl(1);
                }
              } else {
                this.policyService.createBooking(this.user);
                this.user = new User();
                this.ToggleControl(1);
                this.alertservice.Alert("Registration completed successfully, please continue with your username and password", 1, function () { }, function () { })
              }


            } else {
              this.alertservice.Alert("Password must be 6 characters long", 2, function () { }, function () { })
            }

          } else {
            this.alertservice.Alert("Please enter username", 2, function () { }, function () { })
          }

        } else {
          this.alertservice.Alert("Please enter vehicle number", 2, function () { }, function () { })
        }
      }
    } else {
      this.alertservice.Alert("Please enter Name", 2, function () { }, function () { })
    }
  }

  ToggleControl(val) {
    if (val == 1) {
      this.Islogin = true;
      this.Isforgotpassword = false;
      this.Isregister = false;
      this.Isotp = false;
      this.isSubmit = false;
    }
    else if (val == 2) {
      this.Islogin = false;
      this.Isforgotpassword = true;
      this.Isregister = false;
      this.Isotp = false;
      this.isSubmit = false;
    }
    else if (val == 3) {
      this.Islogin = false;
      this.Isforgotpassword = false;
      this.Isregister = true;
      this.Isotp = false;
      this.isSubmit = false;


    }
    else if (val == 4) {
      this.Islogin = false;
      this.Isforgotpassword = false;
      this.Isregister = false;
      this.Isotp = true;
      this.isSubmit = false;
    }
    else if (val == 5) {
      this.Islogin = false;
      this.Isforgotpassword = false;
      this.Isregister = false;
      this.Isotp = false;
      this.isSubmit = true;
    }
    else if (val == 6) {
      this.Islogin = false;
      this.Isforgotpassword = false;
      this.Isregister = true;
      this.Isotp = false;
      this.isSubmit = false;

    }
  }
  forgot()
   {
     var num = JSON.parse(localStorage.getItem('user')).Mobile;
    var pass=JSON.parse(localStorage.getItem('user')).Password;
     this.sms.send(num, pass);
   }

}
// function getUserId(user: User) {
  
//   return user.$key;
// }

