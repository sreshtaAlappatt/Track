import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';



import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AlertService } from './alert-info/alert-service.service';
import { AlertInfoModule } from './alert-info/alert-info.module';
import { AlertWindowPageModule } from './alert-window/alert-window.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,AlertWindowPageModule, 
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot() 
  ],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },AlertService,SMS],
  bootstrap: [AppComponent],
})
export class AppModule {}
