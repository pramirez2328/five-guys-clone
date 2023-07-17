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
      { item: 'Lettuce', imgIcon: lettuce },
      { item: 'Tomato', imgIcon: tomato },
      { item: 'Onion', imgIcon: onion },
      { item: 'Pickles', imgIcon: pickels },
      { item: 'American Cheese', imgIcon: american },
      { item: 'ketchup', imgIcon: ketchup },
      { item: 'mustard', imgIcon: mustard },
      { item: 'mayonnaise', imgIcon: mayo },
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
      { item: 'Onion', imgIcon: onion },
      { item: 'Pickles', imgIcon: pickels },
      { item: 'Relish', imgIcon: relish },
      { item: 'ketchup', imgIcon: ketchup },
      { item: 'mustard', imgIcon: mustard },
      { item: 'mayonnaise', imgIcon: mayo },
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
      { item: 'Coke', imgIcon: coke },
      { item: 'Sprite', imgIcon: sprite },
      { item: 'Fanta', imgIcon: fanta },
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
      { item: 'Regular', imgIcon: regular },
      { item: 'Curly', imgIcon: curly },
      { item: 'Waffle', imgIcon: waffle },
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
      { item: 'Banana', imgIcon: banana },
      { item: 'Vanilla', imgIcon: vanilla },
      { item: 'Strawberry', imgIcon: strawberry },
      { item: 'Chocolate', imgIcon: chocolate },
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
      { item: 'Lettuce', imgIcon: lettuce },
      { item: 'Tomato', imgIcon: tomato },
      { item: 'Onion', imgIcon: onion },
      { item: 'Swiss', imgIcon: swiss },
      { item: 'mayonnaise', imgIcon: mayo },
    ],
  },
];
