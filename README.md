# Prerequisites for running the project

1. Nodejs should be installed
2. MongoDB shoudl be installed

# How to run the project?

1. Execute following commands:

    `cd prerequisites/`

    `chmod +x script.sh`

    `bash script.sh`

2. Run `npm i` to install all the dependencies of this project.

3. Run `node index.js` to finally run the project.

4. To test the APIs, import the "prerequisites/ManushTechCodingExercise.postman_collection.json" file in the "Postman".

# API Reference

|HTTP Method| API URL | What it does | Sample Request Body |
|:---------:|:-------:|:------------:|:-----------:|
|POST   |  /api/v1/users     | Register | { "email": "testUser2@gmail.com","username": "testUser2","password": "asdf123" } |
|POST   |  /api/v1/auth | Login | { "email": "testUser2@gmail.com","password": "asdf123" } |
|GET  |  /api/v1/menuItems     | Get all menu items | - |
|POST  |  /api/v1/orders     | Place an order | { "menuItemsList": [{"menuItemId": "6161257a65bf8690dbcff42f", "quantity": 3, "unitPrice": 10.99 },
{ "menuItemId": "6161257a65bf8690dbcff430", "quantity": 5, "unitPrice": 100.99 } ],
"orderLocation": "Lalbagh, Dhaka",
"phoneNumber": "01771855282" } |
