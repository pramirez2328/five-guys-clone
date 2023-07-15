import burger from '../assets/burgers.png';
import dogs from '../assets/dogs.png';
import drinks from '../assets/drinks.png';
import fries from '../assets/fries.png';
import milkshakes from '../assets/milkshakes.png';
import sandwiches from '../assets/sandwiches.png';
export const foodInformation = [
  {
    id: 1,
    title: 'BURGERS',
    icon: burger,
    type: `HAMBURGER, CHEESEBURGER, BACON BURGER, BACON CHEESEBURGER, LITTLE HAMBURGER, LITTLE CHEESEBURGER, LITTLE BACON BURGER, LITTLE BACON CHEESEBURGER.`,
    description: `- American- style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun.Choose as many toppings as you want.`,
    calories: '920 Calories, 39 Carbs (g), 50 Total Fat (g), 690 Sodium (mg)',
    price: 10.59,
  },
  {
    id: 2,
    title: 'DOGS',
    icon: dogs,
    type: `HOT DOG, CHEESE DOG, BACON DOG, BACON CHEESE DOG.`,
    description: `- American- style cheese melted between fresh patties and placed on a soft, toasted sesame seed bun.Choose as many toppings as you want.`,
    calories: '920 Calories, 39 Carbs (g), 50 Total Fat (g), 690 Sodium (mg)',
    price: 8.19,
  },
  {
    id: 3,
    title: 'DRINKS',
    icon: drinks,
    type: `COKE, SPRITE, FANTA`,
    description: `- We proudly serve Coca-Cola products.`,
    calories: '139 Calories, 75 Sodium (mg)',
    price: 3.09,
  },
  {
    id: 4,
    title: 'FRIES',
    icon: fries,
    type: `FIVE GUYS STYLE, CAJUN STYLE .`,
    description: `Freshly made boardwalk-style fries, cooked in pure, cholesterol-free, 100% peanut oil, and then showered with a heavy dose of Cajun spice. Cut fresh and cooked twice – firm on the outside and mashed potato on the inside.`,
    calories: '1310 Calories, 139 Carbs (g), 41 Total Fat (g), 960 Sodium (mg)',
    price: 5.19,
  },
  {
    id: 5,
    title: 'MILKSHAKES',
    icon: milkshakes,
    type: `BACON, BANANAS, REESE'S CUPS, STRAWBERRIES, CHOCOLATE, MALTED MILK, OREO COOKIES, PEANUT BUTTER, SALTED CARAMEL, LOTUS BISCOFF.`,
    description: `- As is the case with most works of art, a great milkshake starts with a great foundation. At Five Guys, rather than messing with multiple ice cream flavors or a bunch of flavored syrups to create different milkshake variations, the restaurant starts with a consistent base that will always taste great: vanilla. Widely considered to be one of the world's favorite flavors, vanilla is anything but basic. At its best, vanilla is fragrant and complex while still providing a relatively blank canvas for the layering of other flavors.`,
    calories: '520 Calories, 20 Carbs (g), 20 Total Fat (g), 1190 Sodium (mg)',
    price: 6.69,
  },
  {
    id: 6,
    title: 'SANDWICHES',
    icon: sandwiches,
    type: `VEGGIE SANDWICH, CHEESE VEGGIE SANDWICH, GRILLED CHEESE, BLT.`,
    description: `- Freshly grilled onions, mushrooms and green peppers layered with lettuce, tomatoes and slices of American-style cheese on a soft, toasted sesame seed bun. Or start with the bun and cheese and build your own from scratch. Not a veggie burger.`,
    calories: '720 Calories, 30 Carbs (g), 40 Total Fat (g), 945 Sodium (mg)',
    price: 6.99,
  },
];
