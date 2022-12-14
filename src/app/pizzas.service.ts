import {EventEmitter, Injectable, Output} from '@angular/core';
import {RecipesService, Recipe} from "./recipes.service";


@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  availableToppings : Topping[] = [];

  @Output()
  updateToppingsEvent = new EventEmitter

  constructor(
    private cookBook : RecipesService
  ) {}
  recipes: Recipe[] = this.cookBook.openCookBook() as Pizza[]
  pizzas: Pizza[] = this.recipes.map(pizza => ({...pizza,
    get toppingsStr() {return this.toppingsStrArr.map(topping => (topping.toString()))},
    get amountOfRequiredToppings() {return (this.toppingsStrArr).length},
    type: 'Italian',
    toppingsObj: [],
    hitRate: 0
  }))

  allToppings : Topping[] = [
    {name:'Tomato sauce'},
    {name: 'Mozzarella'},
    {name: 'Onions'},
    {name: 'Oregano'},
    {name: 'Broccoli'},
    {name: 'Garlic'},
    {name: 'Chili peppers'},
  ].map(topping => ({
    ...topping,
    isAvailable: false
  }))

  bakePizzas(){
    this.pizzas.forEach((item, index) => {item.toppingsObj = this.getToppingsAsObjects(item.toppingsStrArr)})
  }

  deliverPizzas(){
    return this.pizzas
  }

  getToppingsAsObjects(toppingsinput : string[]){
    let temp: Topping[] = [];
    for (let i = 0; i < toppingsinput.length; i++) {
      for (let j = 0; j < this.allToppings.length; j++) {
        if (toppingsinput[i] === this.allToppings[j].name.toString()){
          temp[i] = this.allToppings[j]}}}
    return temp
  }

  getAvailableToppings(){
    return this.allToppings.filter(topping => topping.isAvailable === true)
  }

  getExcludedToppings(){
    return this.allToppings.filter(topping => topping.isExcluded === true)
  }

  crossCheckToppings(){
    let allRequiredToppings = this.pizzas.map(pizza =>  pizza.toppingsStrArr).flat(1)
    let allRequiredToppingsUnique = [...new Set(allRequiredToppings)];
    for (let i = 0; i < allRequiredToppingsUnique.length; i++) {
      if (this.allToppings.every(e => e.name != allRequiredToppingsUnique[i])){
        this.allToppings.push({name: allRequiredToppingsUnique[i], isAvailable: false})}}
  }

  stockTopping(index: number) {
    if (!this.allToppings[index].isAvailable) {
      console.log(this.allToppings[index].name + " vefügbar")
      this.allToppings[index].isAvailable = true;
      this.updateToppingsEvent.emit()
      this.updated()
    } else {
      console.log(this.allToppings[index].name + " nicht verfügbar")
      this.allToppings[index].isAvailable = false;
      this.updateToppingsEvent.emit();
      this.updated()
    }
  }

  removeTopping(index:number) {
    if (!this.allToppings[index].isExcluded) {
      console.log(this.allToppings[index].name + "ausgeschlossen")
      this.allToppings[index].isExcluded = true;
      console.log(this.pizzas)
      console.log(this.allToppings)
      this.updateToppingsEvent.emit()
      this.updated()
    } else {
      console.log(this.allToppings[index].name + "inkludiert")
      this.allToppings[index].isExcluded = false;
      this.updateToppingsEvent.emit()
      this.updated()
    }
  }

  updated(){
    return this.updateToppingsEvent;
  }
}

export interface Topping{
  name: string
  isAvailable ?: boolean
  isExcluded ?: boolean
}

export interface Pizza extends Recipe{
  name: string
  toppingsStrArr: string[]
  toppingsObj : Topping[]
  toppingsStr ?: string[]
  amountOfRequiredToppings : number
  hitRate : number
  type ?: string
}
