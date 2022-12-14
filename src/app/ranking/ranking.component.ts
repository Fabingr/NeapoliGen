import { Component } from '@angular/core';
import {PizzasService, Pizza, Topping} from "../pizzas.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  pizzas: Pizza[] = [];
  availableToppings: Topping[] = []
  excludedToppings: Topping[] = []
  ranking: Pizza[] = [];
  constructor(
    private lieferdienst : PizzasService,
  ) {}

  ngOnInit(): void{
    this.updateRankedList()
    this.lieferdienst.updated().subscribe(() => this.updateRankedList())
  }

  updateRankedList(){
    this.availableToppings = this.lieferdienst.getAvailableToppings()
    this.excludedToppings = this.lieferdienst.getExcludedToppings()
    this.pizzas = this.lieferdienst.pizzas
    console.log(this.availableToppings)
    console.log(this.excludedToppings)
    if(Object.keys(this.availableToppings).length === 0 || this.availableToppings.length === 0 && this.excludedToppings.length === 0){
      this.ranking = this.pizzas.map(x => { if(x.hitRate){return {...x, hitRate: 0} } else{ return x}
      })}
    else {
      console.log("update rankedList...")
      this.ranking = this.pizzas.sort((pizza1, pizza2) => this.calculate(pizza2) - this.calculate(pizza1))
        .filter((pizza => pizza.hitRate > 0))
        .filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.name === value.name)))
      console.log("...rankedlist updated")}
  }

  private calculate(pizza: Pizza) {
    let hitRate = this.amountOfAvailableToppingsForPizza(pizza) / this.amountofRequiredToppings(pizza)
    pizza.hitRate = hitRate
    return hitRate
  }

  private amountOfAvailableToppingsForPizza(pizza: Pizza) {
    let count = 0;
    let ava = this.lieferdienst.getAvailableToppings()
    for (let i = 0; i < pizza.toppingsObj.length; i++) {
      for (let j = 0; j < ava.length; j++) {
        if (typeof pizza.toppingsObj[i].name != "undefined"){
          if(pizza.toppingsObj[i].name === ava[j].name){
            if(!ava[j].isExcluded){
              {count++;}}}}}}
    if (count < 1){return 0;}
    return count;
  }

  private amountofRequiredToppings(pizza: Pizza) {
    let count = pizza.amountOfRequiredToppings
    for (let i = 0; i < pizza.toppingsObj.length; i++) {
      if(pizza.toppingsObj[i].isExcluded){
        count -= 1;
      }
    }
    return count;
  }
}
