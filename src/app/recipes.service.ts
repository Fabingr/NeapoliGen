import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: object[] = [
    {
      name: 'Aglio e olio',
      toppingsStrArr: ['Tomato Sauce', 'Garlic', 'Olive Oil']
    },
    {
      name: 'Ai Broccoli',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Broccoli', 'Garlic', 'Chili Peppers', 'Oregano']
    },
    {
      name: 'Al Salmone',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Salmon', 'Garlic']
    },
    {
      name: 'Alla Vongole',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Garlic', 'Clams', 'Chili Powder']
    },
    {
      name: 'Alle Verdure Grigliate',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Grilled Vegetables']
    },
    {
      name: 'Anchovis',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Anchovies', 'Garlic', 'Chili Peppers']
    },
    {
      name: 'Bianca',
      toppingsStrArr: ['Ricotta', 'Mozzarella', 'Garlic']
    },
    {
      name: 'Bolognese',
      toppingsStrArr: ['Bolognese Sauce', 'Mozzarella']
    },
    {
      name: 'Calabrese',
      toppingsStrArr: ['Tomato Sauce', 'Parmigiano Reggiano', 'Tuna', 'Olives', 'Capers', 'Garlic', 'Onion', 'Chili Peppers']
    },
    {
      name: 'Calabria',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Spianata Calabrese', 'Chili Peppers']
    },
    {
      name: 'Caprese',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Cherry Tomatoes']
    },
    {
      name: 'Capri',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Arugula', 'Cherry Tomatoes', 'Parmigiano Reggiano']
    },
    {
      name: 'Capricciosa',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Mushrooms', 'Artichokes', 'Prosciutto', 'Olives', 'Olive Oil']
    },
    {
      name: 'Caprina',
      toppingsStrArr: ['Tomato Sauce', 'Goats Cheese', 'Arugula', 'Chili Peppers', 'Spinach', 'Olives', 'Olive Oil']
    },
    {
      name: 'Carbonara',
      toppingsStrArr: ['Pecorino Romano', 'Heavy Cream', 'Egg', 'Black Pepper']
    },
    {
      name: 'Carciofi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Artichokes']
    },
    {
      name: 'Carpaccio',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Beef carpaccio', 'Arugula', 'Parmigiano Reggiano']
    },
    {
      name: 'Cipolla',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Onion', 'Oregano']
    },
    {
      name: 'Contadina',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Eggplant', 'Artichokes', 'Garlic', 'Basil']
    },
    {
      name: 'Con cozze',
      toppingsStrArr: ['Mussels', 'Garlic', 'Olive Oil', 'Parsley']
    },
    {
      name: 'Diavola',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Hot Salami', 'Chili Peppers']
    },
    {
      name: 'Etna',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Anchovies', 'Capers', 'Olives']
    },
    {
      name: 'Frutti di Mare',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Clams', 'Prawns', 'Mussels']
    },
    {
      name: 'Funghi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Mushrooms']
    },
    {
      name: 'Gamberetti',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Shrimps']
    },
    {
      name: 'Mamma Mia',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Tuna', 'Pepper', 'Corn', 'Onion']
    },
    {
      name: 'Margherita',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Olive Oil', 'Basil']
    },
    {
      name: 'Mari e monte',
      toppingsStrArr: ['Tomato', 'Shrimps', 'Mussels', 'Mushrooms', 'Garlic', 'Onion']
    },
    {
      name: 'Marinara',
      toppingsStrArr: ['Marinara Sauce', 'Garlic', 'Olive Oil', 'Basil', 'Oregano']
    },
    {
      name: 'Mazza',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Bacon', 'Egg', 'Onion', 'Chili Peppers']
    },
    {
      name: 'Mozzarella',
      toppingsStrArr: ['Tomato Sauce', 'Buffalo Mozzarella']
    },
    {
      name: 'Napoletana',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Anchovies', 'Olive Oil']
    },
    {
      name: 'Napoli',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Capers', 'Anchovies', 'Olive Oil']
    },
    {
      name: 'O Sole Mio',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Prosciutto', 'Salami', 'Egg', 'Onion']
    },
    {
      name: 'Parma (Prosciutto di Parma)',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Parma Ham', 'Arugula', 'Cherry Tomatoes']
    },
    {
      name: 'Peperoni',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Chili Peppers']
    },
    {
      name: 'Piccantino',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Hot Salami']
    },
    {
      name: 'Prosciutto',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Prosciutto']
    },
    {
      name: 'Prosciutto e funghi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Prosciutto', 'Mushrooms']
    },
    {
      name: 'Pugliese',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Onion']
    },
    {
      name: 'Quattro Formaggi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Gorgonzola', 'Parmigiano Reggiano', 'Pecorino Romano']
    },
    {
      name: 'Quattro Stationi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Parmigiano Reggiano', 'Basil', 'Mushrooms', 'Artichokes', 'Prosciutto', 'Olives']
    },
    {
      name: 'Regina',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Prosciutto', 'Mushrooms']
    },
    {
      name: 'Romana',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Anchovies', 'Oregano', 'Olive Oil']
    },
    {
      name: 'Salame',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Salami']
    },
    {
      name: 'Salmone',
      toppingsStrArr: ['Tomato Sauce', 'Mascarpone', 'Smoked Salmon', 'Arugula']
    },
    {
      name: 'Salsiccia',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Salsiccia', 'Radicchio Trevisano']
    },
    {
      name: 'Sardenaira (Pizza all’Andrea)',
      toppingsStrArr: ['Tomato Sauce', 'Anchovies', 'Olives', 'Garlic', 'Capers']
    },
    {
      name: 'Siciliana',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Garlic', 'Salami', 'Chili Peppers', 'Olive Oil']
    },
    {
      name: 'Speziale',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Prosciutto', 'Salami', 'Mushrooms', 'Olives', 'Artichokes']
    },
    {
      name: 'Spinaci',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Spinach', 'Black Pepper', 'Olive Oil']
    },
    {
      name: 'Spinaci e Uovo',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Spinach', 'Black Pepper', 'Olive Oil', 'Egg']
    },
    {
      name: 'Spinaci e Gorgonzola',
      toppingsStrArr: ['Tomato Sauce', 'Gorgonzola', 'Spinach']
    },
    {
      name: 'Tartufata',
      toppingsStrArr: ['Mozzarella', 'Mushrooms', 'Arugula', 'Parmigiano Reggiano', 'Truffle Oil']
    },
    {
      name: 'Tirolese',
      toppingsStrArr: ['Tomato Sauce', 'Stracchino', 'Smoked Ham', 'Mushrooms']
    },
    {
      name: 'Tonno (al Tonno)',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Tuna']
    },
    {
      name: 'Tonno e Cipola',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Tuna', 'Onion']
    },
    {
      name: 'Toscana',
      toppingsStrArr: ['Tomato Sauce', 'Pecorino Romano', 'Pepper', 'Anchovies', 'Basil']
    },
    {
      name: 'Ortolana',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Zucchini', 'Eggplant', 'Basil']
    },
    {
      name: 'Viennese',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Wurstel', 'Oregano', 'Olive Oil']
    },
    {
      name: 'Vitello Tonnato',
      toppingsStrArr: ['Tomato Sauce', 'Capers', 'Arugula', 'Veal', 'Anchovies', 'Garlic', 'Black Pepper']
    }
  ]


  allToppings : Topping[] = [
    {name:'Tomato Sauce', type: "basics"},
    {name:'Mozzarella', type: "basics"},
    {name:'Olive Oil', type: "basics"},
    {name:'Basil', type: "basics"},
    {name:'Oregano', type: "basics"},
    {name:'Garlic', type: "basics"},
    {name:'Onion', type: "basics"},
    {name:'Black Pepper', type: "basics"},

    {name:'Broccoli', type: "vegetable"},
    {name:'Chili Peppers', type: "vegetable"},
    {name:'Olives', type: "vegetable"},
    {name:'Tomato', type: "vegetable"},
    {name:'Cherry Tomatoes', type: "vegetable"},
    {name:'Capers', type: "vegetable"},
    {name:'Arugula', type: "vegetable"},
    {name:'Mushrooms', type: "vegetable"},
    {name:'Artichokes', type: "vegetable"},
    {name:'Mushrooms', type: "vegetable"},
    {name:'Spinach', type: "vegetable"},
    {name:'Eggplant', type: "vegetable"},
    {name:'Parsley', type: "vegetable"},
    {name:'Pepper', type: "vegetable"},
    {name:'Corn', type: "vegetable"},
    {name:'Radicchio Trevisano', type: "vegetable"},
    {name:'Zucchini', type: "vegetable"},


    {name:'Buffalo Mozzarella', type: "cheese"},
    {name:'Parmigiano Reggiano', type: "cheese"},
    {name:'Pecorino Romano', type: "cheese"},
    {name:'Goats Cheese', type: "cheese"},
    {name:'Ricotta', type: "cheese"},
    {name:'Gorgonzola', type: "cheese"},
    {name:'Mascarpone', type: "cheese"},
    {name:'Stracchino', type: "cheese"},

    {name:'Anchovies', type: "fish"},
    {name:'Tuna', type: "fish"},
    {name:'Clams', type: "fish"},
    {name:'Shrimps', type: "fish"},
    {name:'Salmon', type: "fish"},
    {name:'Smoked Salmon', type: "fish"},
    {name:'Mussels', type: "fish"},
    {name:'Prawns', type: "fish"},

    {name:'Hot Salami', type: "meats"},
    {name:'Beef carpaccio', type: "meats"},
    {name:'Salami', type: "meats"},
    {name:'Spianata Calabrese', type: "meats"},
    {name:'Bacon', type: "meats"},
    {name:'Prosciutto', type: "meats"},
    {name:'Parma Ham', type: "meats"},
    {name:'Smoked Ham', type: "meats"},
    {name:'Salsiccia', type: "meats"},
    {name:'Wurstel', type: "meats"},
    {name:'Veal', type: "meats"},

    {name:'Chili Powder', type: "other"},
    {name:'Egg', type: "other"},
    {name:'Heavy Cream', type: "other"},
    {name:'Bolognese Sauce', type: "other"},
    {name:'Marinara Sauce', type: "other"},
    {name:'Grilled Vegetables', type: "other"},
    {name:'Truffle Oil', type: "other"},

  ].map(topping => ({
    ...topping,
    isAvailable: false,
  }))

  constructor() { }

  openCookBook(){
    return this.recipes
  }
  openGlossar(){
    return this.allToppings
  }
}

export interface Recipe{
  name: string,
  toppingsStrArr: string[];
}

export interface Topping{
  name: string
  isAvailable ?: boolean
  isExcluded ?: boolean
  type ?: string
}
