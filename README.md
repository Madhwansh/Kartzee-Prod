# Welcome to the Kartzee E-commerce Project with Admin Dashboard Controls

## Installation

### Client Side / Frontend
The client-side utilizes the React.js framework with Bootstrap and External CSS for styling. To install, simply run the following command:
```bash
npm start
```
Ensure to provide the localhost server link where the backend server would be hosted in an env file.

### Server Side / Backend
The backend is built with Express, MongoDB, and Node.js. In the root directory, create an env file where the following configurations need to be stored:
- Port
- MongoDB URL
- JWT key
- BRAINTREE API keys (used for payment integration within the app)

## Admin Dashboard

### AdminMenu
The Admin Dashboard features a side panel called AdminMenu, located in [Client->src->components->AdminMenu.js](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ea50e58d-525e-4159-b055-bd9597340efb). AdminMenu contains options and routes to specific screens.

![AdminMenu](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ea50e58d-525e-4159-b055-bd9597340efb)

### AdminDashboard
Upon opening the Dashboard screen, an introductory screen is presented, containing the admin credentials and the operations that can be performed by the admin. Find the AdminDashboard file at [client->src->pages->Admin->AdminDashboard.js](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ee190169-fedf-4e60-b362-b5eada149703).

![AdminDashboard](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ee190169-fedf-4e60-b362-b5eada149703)

### Summary
The Summary screen provides a summary of key metrics available in the app, including the number of orders, users, products, and total revenue. These metrics dynamically update as products are added, orders are placed, users join, and revenue is updated.

![Summary](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/b013a03e-ca49-4297-9834-b776f65c088b)

Additionally, two charts are presented:
1. Category to Product ratio, showing the number of products available in each category.
2. Revenue and profit generated in a month.

![Charts](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/20649cf2-e41c-482f-aefc-bee947ce0073)

Finally, the summary screen includes an OrderCalendar component displaying the calendar and orders placed on specific dates with their corresponding order IDs.

![OrderCalendar](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/55e5399c-7129-40cc-b2d8-d3e9949125f8)

### Create Category
This option allows adding a new category where products would belong to, editing the category name, and deleting the category.

![CreateCategory](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/90d3d479-dfe6-4e29-9441-2d0df4ab22e2)

### Create Product
Here, products can be added by entering the required details.

![CreateProduct](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/188ad785-1501-4992-a229-70e8d40d3459)

### All Products
All products are displayed in a tabular format, showing details, and providing options to edit and delete the product.

Products Screen:
![ProductsScreen](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/eb9b1054-fd01-44e1-8795-c672b50c2384)

Edit Product screen:
![EditProduct](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/c86ccae6-6d93-49f0-b702-2027b7241e3e)

### All Orders
This section allows toggling the status of orders placed by users and viewing order details.

![AllOrders](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/6e8329d4-b26b-4428-9592-61389deaab89)

### All Users
Here, all users available on the app and their details can be viewed.

![AllUsers](https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/b655ae6d-10eb-41bd-8253-a27fd280503f)
