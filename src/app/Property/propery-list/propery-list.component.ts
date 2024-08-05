import { Component } from '@angular/core';

@Component({
  selector: 'app-propery-list',
  templateUrl: './propery-list.component.html',
  styleUrls: ['./propery-list.component.css']
})
export class ProperyListComponent {

  properties:Array<any> =[
    {
    "id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
    },
    {
      "id":2,
      "Name":"Dhananjay House",
      "Type":"House",
      "Price":12000
    },
    {
      "id":3,
      "Name":"Bhavesh House",
      "Type":"banglow",
      "Price":12000
    },
    {
      "id":4,
      "Name":"Anmol House",
      "Type":"House",
      "Price":12000
    },

]


}
