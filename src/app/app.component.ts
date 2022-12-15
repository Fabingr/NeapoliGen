import { Component } from '@angular/core';
import {PizzasService} from "./pizzas.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {Topping} from "./recipes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  popup: boolean = false;
  title = 'PizzaNeapoliGen';
  allToppings : Topping[] = [];
  availableToppings: Topping[] = [];
  constructor(
    private lieferdienst: PizzasService
  ) {}

  ngOnInit(): void{
    this.allToppings = this.lieferdienst.allToppings
    this.availableToppings = this.lieferdienst.availableToppings
    this.lieferdienst.crossCheckToppings()
  }

  ngAfterContentInit(){
    this.lieferdienst.bakePizzas();
  }

  changeTopping(){
    this.availableToppings = this.allToppings.filter(x => x.isAvailable === true)
      this.lieferdienst.updateToppings()
  }

  listClick(i: number, e: MatSlideToggleChange) {
    if(e.checked){
      this.allToppings[i].isExcluded = false
      this.lieferdienst.updateToppings()
    }else{
      this.allToppings[i].isExcluded = true
      this.lieferdienst.updateToppings()
    }
  }

  chipClick(i: number) {
      this.allToppings[i].isAvailable = false
      this.lieferdienst.updateToppings()
  }
}





