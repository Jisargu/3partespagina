import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  boton = "TAGS"
  boton1 = "SALAD"
  boton2 = "RECIPE"
  boton3 = "PLACES"
  boton4 = "TIPS"
  boton5 = "FRIENDS"
  boton6 = "TRAVEL"
  boton7 = "EXERCISE"
  boton8 = "READIG"
  boton9 = "RUNNING"
  boton10 = "SELF-HELP"
  boton11= "VACATION"

  constructor() { }

  ngOnInit() {
  }

}
