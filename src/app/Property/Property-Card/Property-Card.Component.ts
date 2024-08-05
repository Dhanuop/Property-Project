import { Component } from "@angular/core";


@Component({
    selector:'app-property-card',
    templateUrl:'propery-card.component.html',
    styleUrls:['propery-card.component.css']
})

export class PropertyCardComponent{

    Property:any = {
        "id":9,
        "Name":"Birla House",
        "Type":"House",
        "Price":12000
    }

}