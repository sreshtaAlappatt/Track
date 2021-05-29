import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.page.html',
  styleUrls: ['./alert-window.page.scss'],
})
export class AlertWindowPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }


  close(){
    this.modalCtrl.dismiss();
  }

}
