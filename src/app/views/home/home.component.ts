import { HeaderService } from './../../components/templates/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Ínicio',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
