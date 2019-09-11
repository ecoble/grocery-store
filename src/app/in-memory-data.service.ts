import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const categories = [
            {id: 'Fruits', items: [
                {
                    id: 'Banana',
                    price: 0.56,
                    imageUrl: 'assets/images/banana.jpg'
                },
                {
                    id: 'Apple',
                    price: 1.49,
                    imageUrl: 'assets/images/apple.jpg'
                },
                {
                    id: 'Orange',
                    price: 0.76,
                    imageUrl: 'assets/images/orange.jpg'
                },
                {
                    id: 'Pear',
                    price: 1.58,
                    imageUrl: 'assets/images/pear.jpg'
                },
                {
                    id: 'Grapefruit',
                    price: 1.33,
                    imageUrl: 'assets/images/grapefruit.jpg'
                },
                {
                    id: 'Grapes',
                    price: 1.39,
                    imageUrl: 'assets/images/grapes.jpg'
                },
                {
                    id: 'Watermelon',
                    price: 3.19,
                    imageUrl: 'assets/images/watermelon.jpg'
                },
                {
                    id: 'Cherries',
                    price: 4.95,
                    imageUrl: 'assets/images/cherries.jpg'
                },
                {
                    id: 'Lemon',
                    price: 0.75,
                    imageUrl: 'assets/images/lemon.jpg' 
                },
                {
                    id: 'Lime',
                    price: 0.69,
                    imageUrl: 'assets/images/lime.jpg'
                },
                {
                    id: 'Peach',
                    price: 1.19,
                    imageUrl: 'assets/images/peach.jpg'
                },
                {
                    id: 'Plum',
                    price: 0.99,
                    imageUrl: 'assets/images/plum.jpg'
                },
                {
                    id: 'Pineapple',
                    price: 2.39,
                    imageUrl: 'assets/images/pineapple.jpg'
                },
                {
                    id: 'Mango',
                    price: 2.25,
                    imageUrl: 'assets/images/mango.jpg'
                },
                {
                    id: 'Avocado',
                    price: 2.19,
                    imageUrl: 'assets/images/avocado.jpg'
                },
                {
                    id: 'Apricot',
                    price: 0.60,
                    imageUrl: 'assets/images/apricot.jpg'
                },
                {
                    id: 'Blackberries',
                    price: 3.49,
                    imageUrl: 'assets/images/blackberries.jpg'
                },
                {
                    id: 'Raspberries',
                    price: 3.59,
                    imageUrl: 'assets/images/raspberries.jpg'
                },
                {
                    id: 'Coconut',
                    price: 2.35,
                    imageUrl: 'assets/images/coconut.jpeg'
                },
                {
                    id: 'Cantaloupe',
                    price: 3.99,
                    imageUrl: 'assets/images/cantaloupe.jpg'
                },
                {
                    id: 'Honeydew',
                    price: 3.77,
                    imageUrl: 'assets/images/honeydew.jpg'
                },
                {
                    id: 'Papaya',
                    price: 5.45,
                    imageUrl: 'assets/images/papaya.jpg'
                },
                {
                    id: 'Strawberries',
                    price: 2.65,
                    imageUrl: 'assets/images/strawberries.jpg'
                }]
            },
            {id: 'Vegetables', items: [
                {
                    id: 'Broccoli',
                    price: 1.65,
                    imageUrl: 'assets/images/broccoli.jpg'
                },
                {
                    id: 'Spinach',
                    price: 2.98, 
                    imageUrl: 'assets/images/spinach.jpg'
                },
                {
                    id: 'Lettuce',
                    price: 2.99,
                    imageUrl: 'assets/images/lettuce.jpg'
                },
                {
                    id: 'Carrot',
                    price: 1.28,
                    imageUrl: 'assets/images/carrot.jpeg'
                },
                {
                    id: 'Cucumber',
                    price: 2.50,
                    imageUrl: 'assets/images/cucumber.jpg'
                },
                {
                    id: 'Potato',
                    price: 1.25,
                    imageUrl: 'assets/images/potato.jpg'
                },
                {
                    id: 'Corn',
                    price: 2.38,
                    imageUrl: 'assets/images/corn.jpg'
                },
                {
                    id: 'Tomato',
                    price: 0.77,
                    imageUrl: 'assets/images/tomato.jpg'
                },
                {
                    id: 'Onion',
                    price: 1.35,
                    imageUrl: 'assets/images/onion.jpg'
                },
                {
                    id: 'Mushrooms',
                    price: 1.99,
                    imageUrl: 'assets/images/mushrooms.jpg'
                },
                {
                    id: 'Asparagus',
                    price: 2.54,
                    imageUrl: 'assets/images/asparagus.jpg'
                },
                {
                    id: 'Bell Pepper',
                    price: 0.79,
                    imageUrl: 'assets/images/pepper.jpg'
                },
                {
                    id: 'Brussel Sprouts',
                    price: 2.79,
                    imageUrl: 'assets/images/brusselsprouts.jpg'
                },
                {
                    id: 'Celery',
                    price: 1.05,
                    imageUrl: 'assets/images/celery.jpg'
                },
                {
                    id: 'Beet',
                    price: 1.65,
                    imageUrl: 'assets/images/beet.jpg'
                },
                {
                    id: 'Artichoke',
                    price: 1.49,
                    imageUrl: 'assets/images/artichoke.jpg'
                },
                {
                    id: 'Eggplant',
                    price: 2.44,
                    imageUrl: 'assets/images/eggplant.jpg'
                },
                {
                    id: 'Cabbage',
                    price: 1.89,
                    imageUrl: 'assets/images/cabbage.jpg'
                },
                {
                    id: 'Cauliflower',
                    price: 1.75,
                    imageUrl: 'assets/images/cauliflower.jpg'
                },
                {
                    id: 'Kale',
                    price: 2.35,
                    imageUrl: 'assets/images/kale.jpg'
                },
                {
                    id: 'Arugula',
                    price: 2.29,
                    imageUrl: 'assets/images/arugula.jpg'
                },
                {
                    id: 'Jalapeno',
                    price: 0.79,
                    imageUrl: 'assets/images/jalapeno.jpg'
                },
                {
                    id: 'Radish',
                    price: 1.19,
                    imageUrl: 'assets/images/radish.jpeg'
                },
                {
                    id: 'Turnip',
                    price: 1.39,
                    imageUrl: 'assets/images/turnip.jpg'
                }]
            },
            {id: 'Meats', items: [
                {
                    id: 'Steak',
                    price: 9.99,
                    imageUrl: 'assets/images/steak.jpg'
                },
                {
                    id: 'Chicken',
                    price: 6.59,
                    imageUrl: 'assets/images/chicken.jpg'
                },
                {
                    id: 'Pork Chop',
                    price: 8.79,
                    imageUrl: 'assets/images/porkchop.jpg'
                },
                {
                    id: 'Sausage',
                    price: 3.95,
                    imageUrl: 'assets/images/sausage.jpg'
                },
                {
                    id: 'Bacon',
                    price: 3.99,
                    imageUrl: 'assets/images/bacon.jpg'
                },
                {
                    id: 'Burger',
                    price: 3.49,
                    imageUrl: 'assets/images/burger.jpg'
                },
                {
                    id: 'Lamb Chops',
                    price: 9.45,
                    imageUrl: 'assets/images/lambchop.jpg'
                },
                {
                    id: 'Pork Ribs',
                    price: 7.99,
                    imageUrl: 'assets/images/ribs.jpg'
                },
                {
                    id: 'Hot Dog',
                    price: 4.99,
                    imageUrl: 'assets/images/hotdog.jpg'
                },
                {
                    id: 'Turkey',
                    price: 10.78,
                    imageUrl: 'assets/images/turkey.jpg'
                },
                {
                    id: 'Ground Beef',
                    price: 7.99,
                    imageUrl: 'assets/images/groundbeef.jpg'
                },
                {
                    id: 'Shrimp',
                    price: 6.54,
                    imageUrl: 'assets/images/shrimp.jpg'
                },
                {
                    id: 'Salmon',
                    price: 9.89,
                    imageUrl: 'assets/images/salmon.jpg'
                },
                {
                    id: 'Tuna',
                    price: 10.59,
                    imageUrl: 'assets/images/tuna.jpg'
                },
                {
                    id: 'Crab',
                    price: 7.34,
                    imageUrl: 'assets/images/crab.jpg'
                },
                {
                    id: 'Lobster',
                    price: 11.99,
                    imageUrl: 'assets/images/lobster.jpg'
                }]
            },
            {id: 'Dairy', items: [
                {
                    id: 'Milk',
                    price: 2.18,
                    imageUrl: 'assets/images/milk.jpg'
                },
                {
                    id: 'Soy Milk',
                    price: 2.89,
                    imageUrl: 'assets/images/soymilk.jpeg'
                },
                {
                    id: 'Almond Milk',
                    price: 3.19,
                    imageUrl: 'assets/images/almondmilk.jpg'
                },
                {
                    id: 'Chocolate Milk',
                    price: 3.00,
                    imageUrl: 'assets/images/chocolatemilk.jpg'
                },
                {
                    id: 'Eggs',
                    price: 2.99,
                    imageUrl: 'assets/images/eggs.jpg'
                },
                {
                    id: 'Butter',
                    price: 1.99,
                    imageUrl: 'assets/images/butter.jpeg'
                },
                {
                    id: 'Cheese',
                    price: 2.49,
                    imageUrl: 'assets/images/cheese.jpg'
                },
                {
                    id: 'Coffee Cream',
                    price: 3.79,
                    imageUrl: 'assets/images/cream.jpg'
                },
                {
                    id: 'Yogurt',
                    price: 1.58,
                    imageUrl: 'assets/images/yogurt.jpg'
                },
                {
                    id: 'Ice Cream',
                    price: 3.65,
                    imageUrl: 'assets/images/icecream.jpg'
                },
                {
                    id: 'Sour Cream',
                    price: 2.99,
                    imageUrl: 'assets/images/sourcream.jpg'
                },
                {
                    id: 'Cream Cheese',
                    price: 2.30,
                    imageUrl: 'assets/images/creamcheese.jpg'
                },
                {
                    id: 'Whipped Cream',
                    price: 3.56,
                    imageUrl: 'assets/images/whippedcream.jpg'
                }]
            },
            {id: 'Bakery', items: [
                {
                    id: 'Bread',
                    price: 1.45,
                    imageUrl: 'assets/images/bread.jpg'
                },
                {
                    id: 'Pie',
                    price: 4.99,
                    imageUrl: 'assets/images/pie.jpg'
                },
                {
                    id: 'Cake',
                    price: 5.79,
                    imageUrl: 'assets/images/cake.jpeg'
                },
                {
                    id: 'Cookies',
                    price: 2.99,
                    imageUrl: 'assets/images/cookies.jpg'
                },
                {
                    id: 'Croissant',
                    price: 1.49,
                    imageUrl: 'assets/images/croissant.jpg'
                },
                {
                    id: 'Bagel',
                    price: 1.35,
                    imageUrl: 'assets/images/bagel.jpg'
                },
                {
                    id: 'Muffin',
                    price: 1.69,
                    imageUrl: 'assets/images/muffin.jpg'
                },
                {
                    id: 'Bread Rolls',
                    price: 2.49,
                    imageUrl: 'assets/images/breadrolls.jpg'
                },
                {
                    id: 'Donut',
                    price: 0.99,
                    imageUrl: 'assets/images/donut.jpg'
                    
                },
                {
                    id: 'Baguette',
                    price: 1.24,
                    imageUrl: 'assets/images/baguette.jpg'
                },
                {
                    id: 'Tortilla',
                    price: 2.28,
                    imageUrl: 'assets/images/tortilla.jpg'
                },
                {
                    id: 'Cupcake',
                    price: 1.17,
                    imageUrl: 'assets/images/cupcake.jpg'
                }]
            } 
        ]
        return {categories};
    }
}