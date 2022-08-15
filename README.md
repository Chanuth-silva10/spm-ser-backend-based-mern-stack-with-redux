# SPM_SER035
# Our E-commerce web application

## Notes

- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `bootstrap` for styling, `react-router-dom` for React routes, `react-datepicker` for React Datepicker component, and `axios` to connect to the backend).
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).

Choco web App functionality and branches information:

- IT20074418 => Chanuth => Product Managemen & User Management 
- IT20166038 => Shalani => Category Management & Brand Management
- IT20069186 => Imasha  => Order Management
- IT20083328 => Ihill   =>  IT20083328 & Review Management

To just get it running after you `git clone`, set up [GIT URL](https://github.com/Chanuth10/SPM_SER035.git), and then follow these CLI steps:


To develop it yourself from scratch, follow CLI steps below, and copy the code from this repo to fill in the files you create.



<details>
<summary><span style="font-size:x-large">Backend Setup</span></summary>

```bash
cd backend
npm install express cors mongoose dotenv
npm install -g nodemon
npm ren dev or npm start 
```

</details>

<summary><span style="font-size:x-large"><a href="https://github.com/hchiam/learning-eslint-google">ESLint</a> Setup (Optional)</span></summary>
