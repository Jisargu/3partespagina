import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-poderosas',
  templateUrl: './imagenes-poderosas.component.html',
  styleUrls: ['./imagenes-poderosas.component.css']
})
export class ImagenesPoderosasComponent implements OnInit {


boton='MUSIC'
boton1='MANAGEMENT'
boton2='LIFESTYLE'
cont= 'What Your Music Preference Says About You and Your Personality.'
cont1= 'The Pomodoro Technique Really Works.'
cont2= 'Throwback To The Good Old Days.'
footer= 'John Doe.   December 29,2017'


  constructor() { }

  ngOnInit() {
  }

}
