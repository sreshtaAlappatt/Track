import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/Class/User';
import { mask} from 'src/Class/mask'
import * as firebase from 'firebase';
import {pass} from 'src/Class/pass';


import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  bookingListRef: AngularFireList<any>
   bookingListRef2:AngularFireList<any>
   bookingListRef3:AngularFireList<any>
  bookingRef: AngularFireObject<any>;
  UserList: any[]=[];
  
  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase) {
    
  }
  // updateDb(user: User): void {
  //   this.db.object('/user/' + user.$key)
  //     .update({ From: , To: });
  // }
  // Create
  createBooking(user: User) {
    return this.bookingListRef.push({
      Name: user.Name,
      Email: user.Email,
      Mobile: user.Mobile,
      VehicleNumber:user.VehicleNumber,
      UserName:user.UserName,
      Password:user.Password,
      UserType:2
    })
  }
  createPass(Pass:pass) {
    // console.log(Pass);
    
    return this.bookingListRef2.push({
      From2: Pass.From2,
      To2: Pass.To2,
      reason: Pass.reason,
      date: Pass.date,
      vehiclenum2: Pass.vehiclenum2,
      status: Pass.status
      
    })
  }
   resetpassword(id,changepass)
   {
    this.db.object('/Users/' + id )
    .update({ Password: changepass })

   }
  
  // getUserId(id)
  // { 
  //   var a=id;
  //   return a;
  // }

  // updatebooking(user: User) {
    // this.db.object('/user/' + user.$key)
    // .update({ From: "xyz", To:"awe" });

  
  // }
  // createBooking(user: User) {
  //   return this.bookingListRef.push(user)
  // }

  // Get Single
  startuser(id)
  {
    this.db.object('/Users/' + id)
    .update({ start:'1' })

  }
  stopuser(id)
  {
    this.db.object('/Users/' + id)
    .update({ start:'0' })

  }
  getBooking(id: string) {
    this.bookingRef = this.db.object('/Users/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/Users');
    return this.bookingListRef;
  }
  getBookingList1() {
    this.bookingListRef2 = this.db.list('/pass');
    return this.bookingListRef2;
  }
  getBookingList2() {
    this.bookingListRef3 = this.db.list('/mask');
    return this.bookingListRef3;
  }
  
  getBookingLists() {
   return this.firestore.collection('Users').snapshotChanges();
    
  }

  getPolicies() {
    return this.firestore.collection('policies').snapshotChanges();
}

   
  // updateBooking(id ,a,b,c,d) {

  //         //  users.Email;
  //         //  users.From.update(a);
  //         //  users.To.push(b);
  //         // this.db.object('/Users/' + 'MX2yGheV5U6WjOMVHBb');
  //         // .update({UserName:"Tessa" });  
  //         // this.db.object('/Users/' + id1 )
  //         // .update({ UserName:"Tessa", Password:"Tessa123"})
  //    this.db.object('/Users/' + id)
  //    .update({ From:a, To:b ,reason:c, today:d })
  //    this.db.object('/pass/')
  //    this.bookingListRef.push({
  //     From2: a,
  //     To2: b,
  //     reason: c,
  //     date:d,
  //     id2:id
  //   })
    //  this.db.object('/mask/'+id)
    //  .update({nomask:"xyz",vehiclenum2:"wer",date:"top",time:"qwe" })
    //  this.db.object('/pass/' + id)
    //  .update({From2:a,To2:b,reason:c});
    // this.Pass.id2=id;
    // this.Pass.From2=a;
    // this.Pass.To2=b;
    // this.createUser( this.Pass)
    //  }
   verifyUser(id)
   {
    let returndata = this.getBookingList1();
    returndata.snapshotChanges().subscribe((data) => {
      // this.UserList=[]
      data.forEach(d => {
        // console.log(d.payload.toJSON());
        let a=d.payload.toJSON();
        console.log(a);
        
       if( a['vehiclenum2']===id)
       { 
        a['$key2']=d.key;
         this.db.object('/pass/' + a['$key2'])
         .update({ status:2 ,acpd:'Accepted' })
       }
      })
    })
   }
   verifyUser1(id)
   {
    let returndata = this.getBookingList1();
    returndata.snapshotChanges().subscribe((data) => {
      // this.UserList=[]
      data.forEach(d => {
        // console.log(d.payload.toJSON());
        let a=d.payload.toJSON();
        console.log(a);
        
       if( a['vehiclenum2']===id)
       { 
        a['$key2']=d.key;
         this.db.object('/pass/' + a['$key2'])
         .update({ status:3,acpd:'Denied' })
       }
      })
    })
   }
  // createpass(Pass:pass)
  // {
  //   return this.bookingListRef.push({
  //     id2:Pass.id2,
  //     From2:Pass.From2,
  //     To2:Pass.To2,
  //   })
  // }
//   updatebooking( user: User) {
//     let newdata=this.loginPage.ionViewWillEnter();
//     var test=this.UserList.FirstOrDefault(d => d.Email == email);

//     var test = dbContext.Users.FirstOrDefault(x => x.id == id);
// if (test!= null)
//             {
//                 test.From = user.From;
//                 test.To = user.To;
//                 // this.UserList.Update(test);
//                 this.UserList.SaveChanges();
//             }
//     return this.bookingListRef.push({
      
//       From: user.From,
//       To: user.To
//     })
//   }
  
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
  //   this.bookingRef.remove();
   }
  
   maskUser(id)
   {
    let returndata = this.getBookingList2();
    returndata.snapshotChanges().subscribe((data) => {
      // this.UserList=[]
      data.forEach(d => {
        // console.log(d.payload.toJSON());
        let a=d.payload.toJSON();
        console.log(a);
        
       if( a['nomask']===id)
       { 
        a['$key2']=d.key;
         this.db.object('/mask/' + a['$key2'])
         .update({ nomask:0 , paid:'paid' })
       }
      })
    })
   }
//   createUser( Pass:pass){
//     // this.firestore.collection('users').doc().set(user)
//     // this.firestore.collection('users').doc().set(Object.assign({}, user))
//     // this.firestore.collection('users').doc().set({ name: user.Name})
//     return this.firestore.collection('pass').doc().set(Pass);
// }
}
