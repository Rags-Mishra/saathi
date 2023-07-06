export const foodTemplates = [
  {
    category: 'vegDishes',
    dishes: [
      {
        id: 1,
        name: 'Pav Bhaji',
        src: require('../../assets/images/veg_dish_pav_bhaji.jpg'),
        calories: '118 cal',
        prepTime: '30 min',
        description:
          'Pav bhaji is a street food dish from India consisting of a thick vegetable curry (bhaji) served with a soft bread roll (pav) drizzled with butter.',
      },
      {
        id: 2,
        name: 'Shahi Paneer',
        src: require('../../assets/images/veg_dish_shahi_paneer.jpg'),
        calories: '471.1 cal',
        prepTime: '35 min',
        description:
          'Shahi Paneer is a preparation of paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, tomatoes and Indian spices.',
      },
    ],
  },
  {
    category: 'nonVegDishes',
    dishes: [
      {
        id: 1,
        name: 'Fish Curry',
        src: require('../../assets/images/non_veg_dish_fish_curry_2.jpg'),
        calories: '215 cal',
        prepTime: '40 min',
        description:
          'Simple fish curry made in Indian style. Mildly spicy, flavorful and delicious tasting fish curry. Serve it with rice or roti. Present with a wedge of lemon in the side',
      },
      {
        id: 2,
        name: 'Chicken Curry',
        src: require('../../assets/images/non_veg_dish_chicken_curry.jpg'),
        calories: '293 cal',
        prepTime: '40 min',
        description:
          'Indian chicken curry typically starts with whole spices, heated in oil. This is the slow cooked with number of Indian spices and fills your room with delicious aroma. ',
      },
    ],
  },
];
