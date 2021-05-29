import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/alert-info/alert-service.service';



@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(public alertservice:AlertService) { }

  ValidateName(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { 
            //alert('You have entered an invalid data!') 
            this.alertservice.Alert('You have entered an invalid data!',2,null,null);
          }
        }
        return (false)
      }
    }
  }

  ValidatePassword(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { 
            //alert('You have entered an invalid Password!')
            this.alertservice.Alert('You have entered an invalid Password!',2,null,null);
           }
        }
        return (false)
      }
    }
  }

  
  ValidateUserName(name, alt) {
    {
      {
        if (name.length > 2) {
          return (true)
        }
        else {
          if (alt) { 
          //  alert('You have entered an invalid data!') 
          this.alertservice.Alert('You have entered an invalid data!',2,null,null);
          }
        }
        return (false)
      }
    }
  }
  validatedate(date, alt) {
    {
      if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(date)) {
        return (true)
      }
      else { if (alt) { 
      //  alert("You have entered an invalid Date!"); 
        this.alertservice.Alert("You have entered an invalid Date!",2,null,null);
      } }

      return (false)
    }
  }
  ValidateEmail(mail, alt) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    else {
      if (alt) {
       // alert("You have entered an invalid email address!");
    this.alertservice.Alert("You have entered an invalid email address!",2,null,null);
      }
    }
    return (false)
  }


  ValidateMobile(mobile, alt) {
    if (/^(\+[\d]{1,5}|0)?[6-9]\d{9}$/.test(mobile)) {
      return (true)
    }
    else {
      if (alt) {
        //alert("You have entered an invalid mobile number!");
        this.alertservice.Alert("You have entered an invalid mobile number!",2,null,null);
      }
      return (false)
    }
  }
  ValidateRate(name, alt) {
    {
      {
        if (name > 0) {
          return (true)
        }
        else { if(alt){
         // alert(" Enter Rate"); }
          this.alertservice.Alert("Enter Rate",2,null,null);
        }
        }
        return (false)
      }
    }
  }

  ValidateService(name, alt) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else { if(alt){
        //  alert("Please Select Service"); 
        this.alertservice.Alert("Please Select Service",2,null,null);
        }
      }
        return (false)
      }
    }
  }


  ValidateWebsite(name,IsRegistered, alt) {
    
    //   {
    //     if (name.length > 0) {
    //       return (true)
    //     }
    //     else { if(alt){alert("Please Select Service"); }}
    //     return (false)
    //   }
    // }

    if(IsRegistered==1)
    {
      return (true)
    }
    else
    {

      if(name.length>0)
      {
        return (true)
      }
       else 
       { 
         if(alt)
        {
          //alert("Please Enter Webiste"); 
          this.alertservice.Alert("Please Enter Webiste",2,null,null);
        }}
         return (false)
          

    }
  }
  ValidateNmuber(name, alt) {
    {
      {
        if (name > 0) {
          return (true)
        }
        else { if(alt){
         // alert("Enter mandatory fields");
      this.alertservice.Alert("Enter mandatory fields",2,null,null);
         }}
        return (false)
      }
    }
  }

  ValidateMobileNumberForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (/^(\+[\d]{1,5}|0)?[6-9]\d{9}$/.test(name)) {
        return (true)
      }
      else {
        if (alt) {
          //alert("You have entered an invalid mobile number!");
          this.alertservice.Alert("You have entered an invalid mobile number!",2,null,null)
        }
        return (false)
      }
    }
  
  }


  ValidateEmailForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
        return (true)
      }
      else {
        if (alt) {
        //  alert("You have entered an invalid email address!");
        this.alertservice.Alert("You have entered an invalid email address!",2,null,null);
        }
      }
      return (false)
    }
  
  }
  ValidatePasswordForRegisteredTemple(name,IsRegistered,alt)
  {
    if(IsRegistered==0)
    {
      return (true)
    }
    else
    {
      if (name.length > 0) {
        return (true)
      }
      else {
        if (alt) 
        { 
        //  alert('You have entered an invalid Password!')
        this.alertservice.Alert("You have entered an invalid Password!",2,null,null);
         }
      }
      return (false)
    }
  
  }

  ValidateStringItems(name, alt,item) {
    {
      {
        if (name.length > 0) {
          return (true)
        }
        else {
          if (alt) 
          { //alert('Please Enter '+item+' !') }
this.alertservice.Alert('Please Enter '+item+' !',2,null,null); }
        }
        return (false)
      }
    }
    }
}

