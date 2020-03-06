import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { AuthService } from '../../core/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'my-plant-selector',
  templateUrl: './plant-selector.component.html',
  styleUrls: ['./plant-selector.component.css']
})
export class PlantSelectorComponent implements OnInit {

  @ViewChild('mail') email:ElementRef;

  constructor(public auth:AuthService, private router: Router) { }

  sendPlantData(){
    var firebase = require("firebase/app"); // <-- use this to see emailVerified == true
    var user = firebase.auth().currentUser;
    var form = document.getElementsByTagName("FORM")[0];
    var plantBoxes = form.getElementsByTagName("INPUT")
    var plants = []

    // fill plants with the checked plants
    for (let plant of Array.from(plantBoxes)){
      if ((<HTMLInputElement>document.getElementById((<HTMLInputElement>plant).value)).checked){
        plants.push((<HTMLInputElement>plant).value)
      }
    }


    this.auth.updateUserData(user, plants)
    alert('Se han actualizado sus preferencias!')
    this.auth.signOut();
    this.router.navigate(['my-subscribed']);
  }

  ngOnInit() {
  }

}
