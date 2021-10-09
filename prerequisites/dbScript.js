use manushTechExerciseDB
db.createCollection("menuitems")
db.menuitems.insertMany([
	{
		title: "Nachos",
		description: "Mexican cousine consisting of heated tortilla chips or totopos covered with melted cheese",
		price: 149.99,
		restaurantName: "Zana's Kitchen"
	},
	{
		title: "Sub Sandwich",
		description: "Hot sandwich made from a cylindrical bread roll split lengthwise and filled with meats, cheeses, vegetables, and condiments.",
		price: 139.99,
		restaurantName: "Zana's Kitchen"
	},
	{
		title: "Pizza",
		description: "An Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
		price: 159.99,
		restaurantName: "Zana's Kitchen"
	},
	{
		title: "BBQ Burger",
		description: "Basically a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bun.",
		price: 209.99,
		restaurantName: "Taxi Burger"
	},
	{
		title: "Nasi Goreng",
		description: "Refers to 'fried rice' in both the Indonesian and Malay languages. Served with vegetables and an egg.",
		price: 209.99,
		restaurantName: "Momo Inn"
	},
])