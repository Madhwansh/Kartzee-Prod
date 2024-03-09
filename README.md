Welcome to the Kartzee E-comm Project with Admin Dashboard Controls 

Installation->

For the client side / FrontEnd (react.js Framework has been used) , for the styling (Bootstrap and External css has been used) . Hence for the installation we just need to run the npm start command and then provide the localhost server link where the backend server would be hosted in a env file 


For the server side / Backend (Express , mongodb and node.js has been used ) , we need to create a env file in root directory where the Port , Mongodb url , JWT key and BRAINTREE API keys would needed to be stored , Braintree is used for the payment integration within the app.


Admin Dashboard


Firstly for the admin dashboard , i created a sidepanel called AdminMenu which is present in the (Client->src->components->AdminMenu.js) , the AdminMenu.js contains the options and their routing to the specific screen 
<img width="236" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ea50e58d-525e-4159-b055-bd9597340efb">

When we open the Dashboard screen initally , an introductory screen is being presented which contains the admin credentials and the operations which can be performed by the admin , the AdminDashboard file is located at (client->src->pages->Admin->AdminDashboard.js)
<img width="841" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/ee190169-fedf-4e60-b362-b5eada149703">

Now we coming towards the First option in AdminMenu i.e Summary (client->src->pages->Admin->Summary.js)
Summary screen provides the summary of Key metrics which are available in the app . Number of orders , users , products and total revenue is being display initially , these metrics are dynamic i.e they get updated as the products being added , orders being placed , users being joined and revenue being updated 
<img width="710" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/b013a03e-ca49-4297-9834-b776f65c088b">

After this screen , there are two charts being presented , First chart is of the Category to Product ratio which shows the Number of products being available in the specific category , second chart is of the revenue and profit being generated in a month.(Client->src->components->ProductCategoryBarChart.js)  , (Client->src->components->AdminMenu.js->OrderAreaChart.js)
<img width="700" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/20649cf2-e41c-482f-aefc-bee947ce0073">

Finally in the summary screen there is an OrderCalendar component which displays the calendar and provides the date which displays the order placed on the certain date with its order id
<img width="706" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/55e5399c-7129-40cc-b2d8-d3e9949125f8">


Then we move to the second option called CreateCategory , in this screen we can add a new category where the product would belong to , edit the category name and delete the category
<img width="443" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/90d3d479-dfe6-4e29-9441-2d0df4ab22e2">

Third option is Create Product where we can add a product by entering the required details 
<img width="577" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/188ad785-1501-4992-a229-70e8d40d3459">

Fourth Option is All Products where all the products are being displayed in a tabular format and details are being shown , and there is an edit where we can update and delete the product

Products Screen:-
<img width="706" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/eb9b1054-fd01-44e1-8795-c672b50c2384">

Edit Product screen:-
<img width="590" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/c86ccae6-6d93-49f0-b702-2027b7241e3e">

FIfth Option is the All Orders screen where we can toggle the status of the order placed by the users , and see the details of the order being placed by the user
<img width="722" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/6e8329d4-b26b-4428-9592-61389deaab89">

Lastly is the All Users screen where we can the users available on the app and can see the required details of the user,
<img width="651" alt="image" src="https://github.com/Madhwansh/Kartzee-Prod/assets/108359887/b655ae6d-10eb-41bd-8253-a27fd280503f">






