import { Component, OnInit } from '@angular/core';
//import * as particlesJS from 'particles';

declare var particlesJS:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('home_container', './assets/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

}
