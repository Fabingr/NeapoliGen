import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: object[] = [
    {
      name: 'Aglio e olio',
      toppingsStrArr: ['Tomato sauce', 'Garlic', 'Olive oil']
    },
    {
      name: 'Ai Broccoli',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Broccoli', 'Garlic', 'Chili peppers', 'Oregano']
    },
    {
      name: 'Al Salmone',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Salmon', 'Garlic']
    },
    {
      name: 'Alla Vongole',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Garlic', 'Small clams', 'Chili powder']
    },
    {
      name: 'Alle Verdure Grigliate',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Grilled vegetables']
    },
    {
      name: 'Anchovis',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Anchovies', 'Garlic', 'Hot chili peppers']
    },
    {
      name: 'Bianca',
      toppingsStrArr: ['Ricotta', 'Mozzarella', 'Garlic']
    },
    {
      name: 'Bolognese',
      toppingsStrArr: ['Bolognese sauce', 'Mozzarella']
    },
    {
      name: 'Calabrese',
      toppingsStrArr: ['Tomato sauce', 'Parmigian Reggiano (Parmesan)', 'Tuna', 'Olives', 'Capers', 'Garlic', 'Onion', 'Hot Calabrian chili peppers']
    },
    {
      name: 'Calabria (Spianata calabrese piccante)',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Spianata calabrese piccante (Hot Italian salami from Calabria)', 'Hot Calabrian chili peppers']
    },
    {
      name: 'Calzone',
      toppingsStrArr: ['Folded pizza', 'ingredients vary']
    },
    {
      name: 'Caprese',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Cherry tomatoes']
    },
    {
      name: 'Capri',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Arugula', 'Cherry tomatoes', 'Parmigiano Reggiano (Parmesan)']
    },
    {
      name: 'Capricciosa',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Mushrooms', 'Artichokes', 'Cooked ham', 'Olives', 'Olive oil']
    },
    {
      name: 'Caprina',
      toppingsStrArr: ['Tomato sauce', 'Goat’s cheese', 'Other ingredients vary and may include the following: Arugula', 'Chili peppers', 'Baby spinach leafes', 'Olives', 'Olive oil']
    },
    {
      name: 'Carbonara',
      toppingsStrArr: ['Pecorino Romano Cheese', 'Heavy cream', 'Scallions', 'Eggs', 'Black pepper']
    },
    {
      name: 'Carciofi',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Artichokes']
    },
    {
      name: 'Carpaccio',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Beef carpaccio', 'Arugula', 'Parmigiano Reggiano (Parmesan)']
    },
    {
      name: 'Cipolla',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Onions', 'Oregano']
    },
    {
      name: 'Contadina',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Eggplants', 'Artichokes', 'Garlic', 'Basil']
    },
    {
      name: 'Con cozze',
      toppingsStrArr: ['Mussels', 'Garlic', 'Olive oil', 'Parsley']
    },
    {
      name: 'Diavola',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Hot Italian salami', 'Hot chili peppers']
    },
    {
      name: 'Etna',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Anchovies', 'Capers', 'Olives']
    },
    {
      name: 'Frutti di Mare',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Seafood', 'Clams (Vongole)', 'Tiger prawns and Mussels as Topping']
    },
    {
      name: 'Funghi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Fresh mushrooms']
    },
    {
      name: 'Gamberetti',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Shrimps (Gamberetti)']
    },
    {
      name: 'Mamma Mia',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Tuna', 'Peppers', 'Corn', 'Onions']
    },
    {
      name: 'Margherita',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Olive oil', 'Basil leaves']
    },
    {
      name: 'Mari e monte',
      toppingsStrArr: ['Tomatoes', 'Seafood', 'Champignons', 'Garlic', 'Onion']
    },
    {
      name: 'Marinara',
      toppingsStrArr: ['Marinara sauce', 'Garlic', 'Olive oil', 'Basil', 'Oregano']
    },
    {
      name: 'Mazza',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Bacon', 'Eggs', 'Onions', 'Chili peppers']
    },
    {
      name: 'Mozzarella',
      toppingsStrArr: ['Tomato Sauce', 'Buffalo mozzarella']
    },
    {
      name: 'Napoletana',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Anchovies', 'Olive oil']
    },
    {
      name: 'Napoli',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Capers', 'Anchovies', 'Olive oil']
    },
    {
      name: 'O Sole Mio',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Ham', 'Salami', 'Egg', 'Onions']
    },
    {
      name: 'Parma (Prosciutto di Parma)',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Parma ham', 'Arugula', 'Cherry tomatoes']
    },
    {
      name: 'Peperoni',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Chili peppers']
    },
    {
      name: 'Piccantino',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Salame piccantino']
    },
    {
      name: 'Pizza al taglio (al trancio)',
      toppingsStrArr: ['the dough is baked in large rectangular trays']
    },
    {
      name: 'Pizza bread',
      toppingsStrArr: ['Ingredients and shape vary', 'no tomato sauce is used']
    },
    {
      name: 'Prosciutto',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Prosciutto (Italian ham)']
    },
    {
      name: 'Prosciutto e funghi',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Prosciutto', 'Mushrooms']
    },
    {
      name: 'Pugliese',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella and Onions']
    },
    {
      name: 'Quattro Formaggi',
      toppingsStrArr: ['Tomato Sauce', 'Mozzarella', 'Gorgonzola Piccante', 'Parmigiano Reggiano', 'Pecorino']
    },
    {
      name: 'Quattro Stationi',
      toppingsStrArr: ['Four Seasons Pizza with Tomato Sauce', 'Mozzarella', 'Parmesan', 'Basil', 'Mushrooms', 'Artichokes', 'Cooked ham', 'Olives']
    },
    {
      name: 'Regina',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Ham', 'Champignons']
    },
    {
      name: 'Romana',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Anchovies', 'Oregano', 'Olive oil']
    },
    {
      name: 'Rusticana',
      toppingsStrArr: ['Tomato sauce', 'Buffalo ricotta', 'Oyster mushrooms']
    },
    {
      name: 'Salame',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Italian salami']
    },
    {
      name: 'Salmone',
      toppingsStrArr: ['Tomato sauce', 'Mascarpone cheese', 'Smoked salmon and rocket salad (arugula)']
    },
    {
      name: 'Salsiccia',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Salsiccia', 'Radicchio Trevisano']
    },
    {
      name: 'Sardenaira (Pizza all’Andrea)',
      toppingsStrArr: ['Tomato sauce', 'Salted anchovies', 'Olives', 'Garlic cloves', 'Capers']
    },
    {
      name: 'Siciliana',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Garlic', 'Salami', 'Hot peppers', 'Olive oil']
    },
    {
      name: 'Siciliana Bianca',
      toppingsStrArr: ['Four cheese', 'Anchovies', 'Capers']
    },
    {
      name: 'Speziale',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Ham', 'Salami', 'Champignons', 'Olives', 'Artichoke']
    },
    {
      name: 'Spinaci',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Spinach', 'Salt', 'Pepper', 'Olive oil']
    },
    {
      name: 'Spinaci e Uovo',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Spinach', 'Salt', 'Pepper', 'Olive oil', 'Egg']
    },
    {
      name: 'Spinaci e Gorgonzola',
      toppingsStrArr: ['Tomato sauce', 'Gorgonzola', 'Spinach']
    },
    {
      name: 'Tartufata',
      toppingsStrArr: ['Mozzarella', 'Mushrooms', 'Oyster mushrooms', 'Arugula', 'Parmesan', 'Truffle oil']
    },
    {
      name: 'Tirolese',
      toppingsStrArr: ['Tomato sauce', 'Stracchino cheese', 'Speck (smoked ham)', 'sometimes mushrooms']
    },
    {
      name: 'Tonno (al Tonno)',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Tuna']
    },
    {
      name: 'Tonno e Cipola',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Tuna', 'Onions']
    },
    {
      name: 'Toscana',
      toppingsStrArr: ['Tomato sauce', 'Pecorino cheese', 'Bell pepper', 'Anchovies or tuna', 'Fresh basil leafes']
    },
    {
      name: 'Vegetariana (Verdure, Ortolana)',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'Vegetables']
    },
    {
      name: 'Viennese',
      toppingsStrArr: ['Tomato sauce', 'Mozzarella', 'German sausage', 'Oregano', 'Olive oil']
    },
    {
      name: 'Vitello Tonnato',
      toppingsStrArr: ['Tomato sauce', 'Capers', 'Arugula', 'Veal schnitzel', 'Anchovy fillets', 'Garlic', 'Black pepper']
    }
  ]


  constructor() { }

  openCookBook(){
    return this.recipes
  }
  openGlossar(){
  }
}

export interface Recipe{
  name: string,
  toppingsStrArr: string[];
}
