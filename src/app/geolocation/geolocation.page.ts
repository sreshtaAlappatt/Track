import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor(private router:Router,private geolocation: Geolocation) { }
  ionViewWillEnter()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      let a=resp.coords.latitude
       let b=resp.coords.longitude
       console.log(a);
       console.log(b);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });

  }

  ngOnInit() {
    
    
  }
  LogOut(){
    
    this.router.navigate(['user-home']);
  }
}
