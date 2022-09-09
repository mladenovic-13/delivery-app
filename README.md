# Bergamo Pizza Delivery

![Screenshot 2022-06-07 at 21.45.31.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/97590E6A-1582-4449-BEB6-4AB01736962F_2/iB7hEmtIgxsU1q4JFY1xI6bHw4RW7xYBmTalNJCwbu0z/Screenshot%202022-06-07%20at%2021.45.31.png)

This pizza delivery application is intended for the client but with additional options for the admin.

## Built With

- Next.js
- React.js
- Redux
- Styled-Components
- TailwindCSS (twin.macro)
- MongoDB (mongoose)
- Axios, Cookie, etc

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

```other
git clone https://github.com/mladenovic-13/delivery-app.git
npm install
npm run dev
```

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

```other
npm install
npm run build
npm start
```

You should run `npm run build` again any time you make changes to the site.

![Screenshot 2022-06-07 at 21.46.08.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/AC653551-01BA-4F54-8A1E-514CCF01FDF5_2/rUpTWOqLN0fy0MyVwrJBdnxw47fl56lgWyaj1yREpc4z/Screenshot%202022-06-07%20at%2021.46.08.png)

# Product Page

---

The user can choose the pizza size, toppings, and quantity on this page. He then adds the pizza to the cart. When he has finished adding, he orders it by going to the cart page.

![Screenshot 2022-06-07 at 21.46.39.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/E9A9D874-2647-4009-AB70-A0F753151B10_2/m2ZzLmUlc19z6mGDGmxEWAlk540HfZUhszvpXIzVtUwz/Screenshot%202022-06-07%20at%2021.46.39.png)

# Cart Page

---

This page shows the user the products he added to the cart. Users can make payments via PayPal and credit cards.


- PayPal API (You can try it with a Sandbox PayPal account

![Screenshot 2022-06-07 at 21.48.00.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/1B14C30C-C272-4560-9E71-3F3156C9F95B_2/OAH3WxI49iBQPVsFNPe4Yt0Br89yEi5M9aHBG7nwmKMz/Screenshot%202022-06-07%20at%2021.48.00.png)

![Screenshot 2022-06-07 at 21.48.48.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/6BF1FD32-ABB5-4930-AB1C-CB3901D03866_2/fhlVEZmGxBB7lPlQprp7yqUAQu2H0pIobzQVPxflBXAz/Screenshot%202022-06-07%20at%2021.48.48.png)

- If the payment is successful, the user is redirected to the tracking page of his order.

![Screenshot 2022-06-07 at 21.49.21.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/69CAD19A-A979-482A-BF65-C7D2C4871456_2/zJqb7e6gOHl5RKNlz7y9vRMqUC2qwtlZJWPLgVy4cuUz/Screenshot%202022-06-07%20at%2021.49.21.png)

# Admin Page

---

Through this admin panel, you can control the current products, as well as change the status of the order (Preparing, On the way, Delivered)

![Screenshot 2022-06-07 at 21.49.45.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/983FA703-14BE-403A-97AA-9B70285EB023_2/pHccCpeufBc0RWumx5hEgOIPFBcqdiDNsvvnKxgncUsz/Screenshot%202022-06-07%20at%2021.49.45.png)

By refreshing the browser, the user can see the status changes.

![Screenshot 2022-06-07 at 21.50.20.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/C2184224-7EDE-48F2-9885-C7232A1B4113_2/C8GDXBeLXRgyT9NwVPEobietyZD9aAz0OgOFIu9MQ64z/Screenshot%202022-06-07%20at%2021.50.20.png)

If you have logged in as an admin, a button to add a new product will appear on the home page.

![Screenshot 2022-06-07 at 21.50.47.png](https://res.craft.do/user/full/9becb574-f036-dae3-8b23-ef86b3c4a5d4/C559D293-8BCE-41D0-9064-F3C474D559E0_2/UmjBUZ1GManigTSK5l8VeaI9fohdmuTCxxnDPiA1ncYz/Screenshot%202022-06-07%20at%2021.50.47.png)

_::Created by **Mladenovic13 (Nikola Mladenovic)**::_
