import { Component, Input } from "@angular/core";


@Component({
    selector:'app-property-card',
    templateUrl:'propery-card.component.html',
    styleUrls:['propery-card.component.css']
})

export class PropertyCardComponent{

@Input() property :any 


}