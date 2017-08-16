import {Component} from 'angular2/core';
import {ShoppingListComponent} from  './shopping-list.component'

@Component({
    selector: 'my-app',
    template: `this is the app component
    <shopping-list></shoppinglist> `
    ,
    directives=[ShoppingListComponent]
})
export class AppComponent {

}