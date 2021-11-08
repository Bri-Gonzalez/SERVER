# SERVR <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## Overview

_**SERVR** is a collection of forums where gamers can converse, share, and collaborate together through different video game related servers._

[Deployed Site](https://find-your-server.netlify.app/)

<br>

## MVP

_The **SERVR** MVP will allow a user to explore a variety of different video game servers. Once a user signs up and logs in, they will be allowed to create new servers, add posts, and leave comments._

<br>

### Goals

- _Users will be able to create servers, posts, and comments_
- _Users will be able to edit servers they create._
- _Users will be able to edit and delete their own posts and comments._
- _Users will be able to like comments and posts_
- _Users will be able to have their own profile pages where they can see their own posts, comments, and likes_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React            | _A JavaScript library that is used for building user interfaces_ |
| React Router     | _A library used for routing in React_ |
| React Router DOM | _DOM bindings for React Router_ |
| Axios            | _Promise based HTTP client used to communicate with the backend_ |
| Node.js          | _Javascript runtime environment for executing JavaScript code server-side_ |
| Ruby on Rails    | _Server-side MVC framework used for the back end_ |
| JWT              | _Used to create access tokens for an application_ |
| bcrypt           | _Password hashing function_ |
| [React Modal](https://www.npmjs.com/package/react-modal)| _Accessible modal dialog component for React_ |
| [React Material UI Carousel](https://www.npmjs.com/package/react-material-ui-carousel)| _Carousel UI component for React using Material UI_ |
| [React Spinners](https://www.npmjs.com/package/react-spinners) | _Loading Spinners_ |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes](https://www.figma.com/file/1duXVVpHdZlsy3maTSeN1N/Server?node-id=0%3A1)

Desktop Home
![Desktop Home](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/HomeLanding_ci7uve.png)

Create Account 
![Create Account](https://res.cloudinary.com/dfryxohde/image/upload/v1636326767/Server/CreateAccount_vitzd2.png)

Login
![Login](https://res.cloudinary.com/dfryxohde/image/upload/v1636326766/Server/Login_khd1uc.png)

Search Server
![Search Server](https://res.cloudinary.com/dfryxohde/image/upload/v1636326766/Server/Search_zuoucv.png)

Create Server
![Create Server](https://res.cloudinary.com/dfryxohde/image/upload/v1636326766/Server/CreateServer_ti7dgw.png)

Server
![Server](https://res.cloudinary.com/dfryxohde/image/upload/v1636336171/Server/Server_p9r2u6.jpg)

Edit Server
![Edit Server](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/EditServer_xr5zns.png)

Create Post
![Create Post](https://res.cloudinary.com/dfryxohde/image/upload/v1636326766/Server/CreatePost_jhtj8f.png)

Edit Post
![Edit Post](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/EditPost_pfmy3v.png)

Post Details
![Post Details](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/PostDetails_ix0sh4.png)

Edit Comment
![Edit Comment](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/EditComment_eehzim.png)


#### Component Tree

[Component Tree](https://whimsical.com/server-PkfKKuwW5eojFuaNYCLNZJ)

![Component Tree](https://res.cloudinary.com/dfryxohde/image/upload/v1636327533/Server/component_tree_hrd87d.png)

#### Component Architecture

``` structure

src
|__ layouts/
      |__ Layout/
            |__ Layout.jsx
            |__ Layout.css
|__ components/
      |__ Footer/
            |__ Footer.jsx
            |__ Footer.css
      |__ Nav/
            |__ Nav.jsx
            |__ Nav.css
|__ containers/
      |__ MainContainer/
            |__ MainContainer.jsx
|__ screens/
      |__ Comments/
            |__ Comments.jsx
            |__ Comments.css
      |__ CreatePost/
            |__ CreatePost.jsx
            |__ CreatePost.css
      |__ CreateServer/
            |__ CreateServer.jsx
            |__ CreateServer.css
      |__ EditComment/
            |__ EditComment.jsx
            |__ EditComment.css
      |__ EditPost/
            |__ EditPost.jsx
            |__ EditPost.css
      |__ EditServer/
            |__ EditServer.jsx
            |__ EditServer.css
      |__ Home/
            |__ Home.jsx
            |__ Home.css
      |__ Join/
            |__ Join.jsx
            |__ Join.css
      |__ Login/
            |__ Login.jsx
            |__ Login.css
      |__ Search/
            |__ Search.jsx
            |__ Search.css
      |__ Server/
            |__ Server.jsx
            |__ Server.css
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ comments.js
      |__ posts.js
      |__ servers.js
|__ App.js
|__ Index.js

```

#### Time Estimates

| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Back End Authentication         |    H     |     3 hrs      |     1.5hrs    |    1.5hrs   |
| Back End Database               |    H     |     3 hrs      |     2hrs      |    2hrs     |
| Seed and Create Data            |    H     |     2 hrs      |     1hr       |    1hr      |
| Test Back End Routes            |    H     |     1 hrs      |     1.5hrs    |    1.5hrs   |
| React File Structure            |    H     |     2 hrs      |     .5hrs     |    .5hrs    |
| Front End Authentication        |    H     |     3 hrs      |     1.5hrs    |    1.5hrs   |
| Front End Routes and Testing    |    H     |     3 hrs      |     5hrs      |    5hrs     |
| Layout Setup                    |    H     |     1 hrs      |     1hr       |    1hr      |
| Navbar                          |    H     |     1 hrs      |     .5hrs     |    .5hrs    |
| Footer                          |    H     |     1 hrs      |     10mins    |    10mins   |
| Home Screen                     |    H     |     2 hrs      |     1hr       |    1hr      |
| Search Screen                   |    H     |     1 hrs      |     1.5hrs    |    1.5hrs   |
| Get and Edit Servers            |    H     |     2 hrs      |     1hr       |    1hr      |
| Get, Edit, and Delete Posts     |    H     |     2 hrs      |     4hrs      |    4hrs     |
| Get, Edit, and Delete Comments  |    H     |     2 hrs      |     5hrs      |    5hrs     |
| Hamburger on Nav (tablet/mobile)|    H     |     2 hrs      |     1hr       |    1hr      |
| Join Screen CSS                 |    H     |     2 hrs      |     2hrs      |    2hrs     |
| Login Screen CSS                |    H     |     2 hrs      |     2hrs      |    2hrs     |
| Home Screen CSS                 |    H     |     2 hrs      |     2hrs      |    2hrs     |
| Search Screen CSS               |    H     |     2 hrs      |     2hrs      |    2hrs     |
| Server Screen CSS               |    H     |     2 hrs      |     1.5hrs    |    1.5hrs   |
| Create Post Screen CSS          |    H     |     2 hrs      |     1hr       |    1hr      |
| Edit Post Screen CSS            |    H     |     1 hrs      |     .5hrs     |    .5hrs    |
| Comments Screen CSS             |    H     |     2 hrs      |     1.5hrs    |    1.5hrs   |
| Carousel on Home Screen         |    M     |     3 hrs      |     1.5hrs    |    1.5hrs   |
| TOTAL                           |          |     47 hrs     |  42hrs 10mins |42hrs 10mins |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://res.cloudinary.com/dfryxohde/image/upload/v1635868403/Server/Server.drawio_rri5w1.png)
<br>

***

## Post-MVP

- _Form Error handeling_
- _Users will be able to like comments and posts_
- _Timestamps to posts and comments_
- _User avatars next to username_
- _Create profiles for user where user can view posts, comments, and likes_

***

## Code Showcase

```
{props.currentUser?.id === server.user_id && (
  <Link to={`/server/${server.id}/edit`}>
    <EditIcon style={{ fontSize: 20 }}/>
  </Link>
)}
```
This piece of code shows the logic behind connecting a user to their content. It is the logic that makes sure that only the user who created a server, post, or comment, is the only user that can edit or delete that server, post, or comment. This is something I am very grateful for learning how to do during this project.

```
validates :name, presence: true, uniqueness: { case_sensitive: false }
```
This line of code was used in the server model on the back end. The case sensitivity is set to false to prevent multiple servers with the same name from being created (i.e. Bloodborne and bloodborne). 

```
validates :password, length: { minimum: 6 }, confirmation: { case_sensitive: false }
```
This line of code is similar to one above, but for user model on the back end. Case sensitive is also set to false here so that users passwords must match the case they put in when joining. 

## Code Issues & Resolutions

I ran into issues with connecting specific posts and comments with their parent post or server. The solution was to be specific with my use params, setting the id as a number, and making sure my routes matched with the params. Provided is a solution that worked for me when grabing a post to edit:

``` useParams
const { server_id, id } = useParams()
```
``` Setting server_id as a number
const [formData, setFormData] = useState({
  title: '',
  text: '',
  image: '',
  server_id: Number(server_id),
})
```
``` Route matching params
<Route path='/server/:server_id/post/:id/edit'>
  <EditPost />
</Route>
```

