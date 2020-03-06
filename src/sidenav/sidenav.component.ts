import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './../app/data.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [DataService]
})
export class SidenavComponent implements OnInit {

  @Input() serv:DataService;


  constructor(private datService:DataService) { }

  ngOnInit() {
  }


  onClickMe(plantName) {
    localStorage.setItem("plantName", plantName);
  //this.datService.changeChart();
   window.location.reload();


 }
}
