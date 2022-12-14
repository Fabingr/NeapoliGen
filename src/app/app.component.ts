import { Component } from '@angular/core';
import {PizzasService, Topping, Pizza} from "./pizzas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PizzaNeapoliGen';
  allToppings : Topping[] = [];
  constructor(
    private lieferdienst: PizzasService
  ) {}

  ngOnInit(): void{
    this.allToppings = this.lieferdienst.allToppings
    this.lieferdienst.crossCheckToppings()
  }

  ngAfterContentInit(){
    this.lieferdienst.bakePizzas();
  }

  toggleTopping(index : number){
    this.lieferdienst.stockTopping(index)
  }

  toggleExcludeTopping(index : number){
    this.lieferdienst.removeTopping(index)
  }
}

// exlude topping from query moz tomato,..
// i have these toppings available-> i want to make these pizzas -> these are the toppings im missing -> I already have:
// i want these toppings on my pizza -> i want to make these pizzas -> i already have these toppings & these are the toppings im still missing ->Desire





