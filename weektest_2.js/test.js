const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];
///##task 3

// const mergeOrders=(orders,...moreOrders) =>{
//       return orders = [...orders,...moreOrders].flat(Infinity);
//       return moreOrders;
// }
//  console.log(mergeOrders(orders, moreOrders)); // Should print the merged array of orders
// console.log(mergeOrders(orders));

/// # try;
// const mergeOrders=(orders,moreOrders=[]) =>{
//       return orders = [...orders,...moreOrders];
      
// }
//  console.log(mergeOrders(orders, moreOrders,[2,3,4,5,], [12,31432,4,523,])); // Should print the merged array of orders
// console.log(mergeOrders(orders));

///task 2


// const getFirstNDishNames=(orders,n) =>{

//     return orders.slice(0,n).map (order=> order.dishName).join(", ");
// }

// console.log(getFirstNDishNames(orders, 3));
// task 1;
// const getHighRatedDishes =(orders)=>
// {
// const dish = orders.filter(order => order.ratings.every(rating =>rating >= 4));
// const dishes=dish.map(order=>order.dishName);
// return dishes.join(", ")

// }
// Task 4;
// console.log(getHighRatedDishes(orders));

// const getDishNamesByIds = (orders,...ids)=>{
//   return ids.map(id =>orders.find(order => order.id == id) ? orders.find(order => order.id == id).dishName : "unknown dish")
//   .join(", ");
// }
// const getDishNamesByIds = (orders,...ids)=>{
//   return ids.map(id =>orders.find(order => order.id == id) ?.dishName ?? "unknown dish")
//   .join(", ");
// }


//   console.log(getDishNamesByIds(orders, 1, 3, 5));
//    // Should print: Selected Dishes: Burger, Pasta, Sushi
//    console.log(getDishNamesByIds(orders, 1, 6));
//    // Should print: Selected Dishes: Burger, Unknown Dish
//    console.log(getDishNamesByIds(orders, 5, 1));
//    // Should print: Selected Dishes: Sushi, Burger
   //---------------------------------------------------------------
   /// Task 5
// const listOrders=(...orders)=>{
//   orders.map(order => `${order?.dishName ?? 'unknown dish'} (${order?.category ?? 'unknown category'})`)
//   .join(", ");
// }
// console.log(listOrders(...orders));
//    // Should print: Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)
//    console.log(listOrders(orders[0], orders[1], orders[111]));
//    // Should print: Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
//--------------------------------------------------------------------------------------

/// task 6;
const getTotalRatingsForChefs=(orders)=>{
  return orders.reduce((acc,order)=>({...acc,[order.chef]: order.ratings.length})  ,{} )

}


console.log(getTotalRatingsForChefs(orders));
   // Should print: { "John Doe": 6, "Jane Smith": 3, "Tom Brown": 3, "Alice Green": 3 }
   