# Would You
### A Full stack MERN website 
In the "Would You Rather?" Project, I build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.


## 🖥️ Tech Stack
**Frontend:**

![nextjs](https://img.shields.io/badge/Next-000?style=for-the-badge&logo=next.js&logoColor=white)&nbsp;
![mui](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)&nbsp;

**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-438000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;

**authentication:**
![auth0](https://img.shields.io/badge/Auth0-000?style=for-the-badge&logo=auth0&logoColor=white)&nbsp;




<h2>Setup Project</h2>

Creat your database using [mongodb](https://www.mongodb.com/cloud/atlas/lp/try2)
and add database with two collections <strong>users</strong> and <strong>questions</strong>

Link the Backend with your Database
Add your DB_CONNECT in Backend/.env file

```bash
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://www.mongodb.com/docs/drivers/node/current/quick-start/ for more details
 */
DB_CONNECT = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
```

Configure [Auth0](https://auth0.com/docs/quickstart/webapp/nextjs/01-login#configure-auth0) for your Next.js app 


Connecting Auth0 to MongoDB this [blog](https://auth0.com/blog/connecting-auth0-to-mongodb/) will heip you 



Run Backend with command
```bash
npm start
```

API routes can be accessed on [http://localhost:5000/user](http://localhost:3000/user) and [http://localhost:5000/question](http://localhost:3000/question)

<h2> API ENDPOINTS </h2>
<h4> User </h4>
<ul>
  <li> <b>POST</b> /user/ </li>
  <li> <b>GET</b>  /user/  </li>
  <li> <b>PUT</b>  /api/add/</li>
  <li> <b>PUT</b>  /api/answer/</li>
  <li> <b>PUT</b>  /api/avater/</li>
</ul>

<h4> Question </h4>
<ul>
  <li> <b>GET</b> /question/ </li>
  <li> <b>POST</b> /question/ </li>
  <li> <b>PUT</b> /question/answer </li>
  <li> <b>PUT</b> /question/:id </li>
</ul>

Use the package manager [yarn](https://yarnpkg.com/) to install Would You.

Run Frontend with command
```bash
yarn dev
```

That will be run in [http://localhost:3000](http://localhost:3000) with your browser.





