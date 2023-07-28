import burger from '../assets/burgers.png';
import dogs from '../assets/dogs.png';
import drinks from '../assets/drinks.png';
import fries from '../assets/fries.png';
import milkshakes from '../assets/milkshakes.png';
import sandwiches from '../assets/sandwiches.png';
import lettuce from '../assets/lettuce.png';
import tomato from '../assets/tomato.jpeg';
import onion from '../assets/onion.png';
import pickels from '../assets/pickles.png';
import american from '../assets/cheese.png';
import ketchup from '../assets/ketchup.jpeg';
import mustard from '../assets/mustard.jpg';
import mayo from '../assets/mayo.png';
import relish from '../assets/relish.png';
import coke from '../assets/coke.png';
import sprite from '../assets/sprite.png';
import fanta from '../assets/fanta.png';
import regular from '../assets/regular.jpg';
import curly from '../assets/curly.png';
import waffle from '../assets/waffle.jpeg';
import swiss from '../assets/swiss.png';
import banana from '../assets/bannana.jpg';
import strawberry from '../assets/strawberry.jpg';
import chocolate from '../assets/chocolate.jpeg';
import vanilla from '../assets/vanilla.png';
export const foodInformation = [
  {
    id: 1,
    title: 'BURGERS',
    icon: burger,
    type: `HAMBURGER, CHEESEBURGER, BACON BURGER, BACON CHEESEBURGER, LITTLE HAMBURGER, LITTLE CHEESEBURGER, LITTLE BACON BURGER, LITTLE BACON CHEESEBURGER.`,
    description: `- American- style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun.Choose as many toppings as you want.`,
    calories: '920 Calories, 39 Carbs (g), 50 Total Fat (g), 690 Sodium (mg)',
    price: 10.59,
    options: [
      { id: 1, title: 'Lettuce', icon: lettuce, added: false },
      { id: 2, title: 'Tomato', icon: tomato, added: false },
      { id: 3, title: 'Onion', icon: onion, added: false },
      { id: 4, title: 'Pickles', icon: pickels, added: false },
      { id: 5, title: 'American Cheese', icon: american, added: false },
      { id: 6, title: 'ketchup', icon: ketchup, added: false },
      { id: 7, title: 'mustard', icon: mustard, added: false },
      { id: 8, title: 'mayonnaise', icon: mayo, added: false },
    ],
  },
  {
    id: 2,
    title: 'DOGS',
    icon: dogs,
    type: `HOT DOG, CHEESE DOG, BACON DOG, BACON CHEESE DOG.`,
    description: `- American- style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun.Choose as many toppings as you want.`,
    calories: '920 Calories, 39 Carbs (g), 50 Total Fat (g), 690 Sodium (mg)',
    price: 8.19,
    options: [
      { id: 1, title: 'Onion', icon: onion, added: false },
      { id: 2, title: 'Pickles', icon: pickels, added: false },
      { id: 3, title: 'Relish', icon: relish, added: false },
      { id: 4, title: 'ketchup', icon: ketchup, added: false },
      { id: 5, title: 'mustard', icon: mustard, added: false },
      { id: 6, title: 'mayonnaise', icon: mayo, added: false },
    ],
  },
  {
    id: 3,
    title: 'DRINKS',
    icon: drinks,
    type: `COKE, SPRITE, FANTA`,
    description: `- We proudly serve Coca-Cola products.`,
    calories: '139 Calories, 75 Sodium (mg)',
    price: 3.09,
    options: [
      { id: 1, title: 'Coke', icon: coke, added: false },
      { id: 2, title: 'Sprite', icon: sprite, added: false },
      { id: 3, title: 'Fanta', icon: fanta, added: false },
    ],
  },
  {
    id: 4,
    title: 'FRIES',
    icon: fries,
    type: `FIVE GUYS STYLE, CAJUN STYLE .`,
    description: `Freshly made boardwalk-style fries, cooked in pure, cholesterol-free, 100% peanut oil, and then showered with a heavy dose of Cajun spice. Cut fresh and cooked twice – firm on the outside and mashed potato on the inside.`,
    calories: '1310 Calories, 139 Carbs (g), 41 Total Fat (g), 960 Sodium (mg)',
    price: 5.19,
    options: [
      { id: 1, title: 'Regular', icon: regular, added: false },
      { id: 2, title: 'Curly', icon: curly, added: false },
      { id: 3, title: 'Waffle', icon: waffle, added: false },
    ],
  },
  {
    id: 5,
    title: 'MILKSHAKES',
    icon: milkshakes,
    type: `BACON, BANANAS, REESE'S CUPS, STRAWBERRIES, CHOCOLATE, MALTED MILK, OREO COOKIES, PEANUT BUTTER, SALTED CARAMEL`,
    description: `- As is the case with most works of art, a great milkshake starts with a great foundation. At Five Guys, rather than messing with multiple ice cream flavors or a bunch of flavored syrups to create different milkshake variations, the restaurant starts with a consistent base that will always taste great: vanilla. Widely considered to be one of the world's favorite flavors, vanilla is anything but basic. At its best, vanilla is fragrant and complex while still providing a relatively blank canvas for the layering of other flavors.`,
    calories: '520 Calories, 20 Carbs (g), 20 Total Fat (g), 1190 Sodium (mg)',
    price: 6.69,
    options: [
      { id: 1, title: 'Banana', icon: banana, added: false },
      { id: 2, title: 'Vanilla', icon: vanilla, added: false },
      { id: 3, title: 'Strawberry', icon: strawberry, added: false },
      { id: 4, title: 'Chocolate', icon: chocolate, added: false },
    ],
  },
  {
    id: 6,
    title: 'SANDWICHES',
    icon: sandwiches,
    type: `VEGGIE SANDWICH, CHEESE VEGGIE SANDWICH, GRILLED CHEESE, BLT.`,
    description: `- Freshly grilled onions, mushrooms and green peppers layered with lettuce, tomatoes and slices of American-style cheese on a soft, toasted sesame seed bun. Or start with the bun and cheese and build your own from scratch. Not a veggie burger.`,
    calories: '720 Calories, 30 Carbs (g), 40 Total Fat (g), 945 Sodium (mg)',
    price: 6.99,

    options: [
      { id: 1, title: 'Lettuce', icon: lettuce, added: false },
      { id: 2, title: 'Tomato', icon: tomato, added: false },
      { id: 3, title: 'Onion', icon: onion, added: false },
      { id: 4, title: 'Swiss', icon: swiss, added: false },
      { id: 5, title: 'mayonnaise', icon: mayo, added: false },
    ],
  },
];
