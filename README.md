
# Our E-commerce web application (SPM_SER035)


Choco web App functionality and branches information:

- IT20074418 => Chanuth => Product Managemen & User Management 
- IT20166038 => Shalani => Category Management & Brand Management
- IT20069186 => Imasha  => Order Management
- IT20083328 => Ihill   =>  Promotion Management & Review Management

To just get it running after you `git clone`, set up [GIT URL](https://github.com/Chanuth10/SPM_SER035.git), and then follow these CLI steps:


To develop it yourself from scratch, follow CLI steps below, and copy the code from this repo to fill in the files you create.



<details>
<summary><span style="font-size:x-large">Backend Setup</span></summary>

```bash
cd backend
npm install express cors mongoose dotenv
npm install -g nodemon
npm ren dev `or`  npm start 
```

</details>

<details>
<summary><span style="font-size:x-large">Useful Git Command</span></summary>

<h1>Git BRANCH</h1>

<b>To see `local branches</b>
```
git branch
```
<b>To see remote branches</b>
```
git branch -r 
```
<b>Create a New Branch</b>
```
git checkout -b my-branch-name
```
<b>For Checkout remote branch(Please Only go to the your branch)</b>
```
git checkout --track origin/my-branch-name 
```
<b>Push to a Branch</b>
```
git push -u origin my-branch-name
```
<b>If your local branch already exists on the remote, run this command</b>
```
git push 
```
<b>Download remote branch</b>
```
git checkout -t origin/remote_branch
```

</details>

<details>
<summary><span style="font-size:x-large">How to Put your work into the git Repo</span></summary>


<b>Firstly You are working Please Checkout your branch</b>
```
git checkout  Your-branch-name
```
<b>After Checkout your branch pull the current information from development branch</b>
```
git pull origin/development
```
<b>Now you are update your details into the your branch. After update details add the details stage area</b>
```
git add .
```
<b>Give the commit message</b>
```
git commit -m "Your meassge "
```
<b>Push to Your Branch</b>
```
git push -u origin Your-branch-name
```
<b>If your local branch already exists on the remote, run this command</b>
```
git push 
```

</details>

## Notes

- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `bootstrap` for styling, `react-router-dom` for React routes, `react-datepicker` for React Datepicker component, and `axios` to connect to the backend).
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).


