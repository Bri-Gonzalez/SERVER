# Server <!-- omit in toc -->

## Overview

_**Server** is a collection of forums where gamers can converse, share, and collaborate together through different video game related servers._

<br>

## MVP

_The **Server** MVP will allow a user to explore a variety of different video game servers. Once a user signs up and logs in, they will be allowed to create new servers, add posts, and leave comments._

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

#### Component Tree

[Component Tree](https://whimsical.com/server-PkfKKuwW5eojFuaNYCLNZJ)

![Component Tree](https://res.cloudinary.com/dfryxohde/image/upload/v1635823222/Server/server_component_tree_vugdpb.png)

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
            |__ Comment.jsx
            |__ Comment.css
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
      |__ comments.js
      |__ posts.js
      |__ servers.js
|__ App.js
|__ Index.js

```

#### Time Estimates

| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Back End Authentication         |    H     |     3 hrs      |     -     |    -    |
| Back End Database               |    H     |     3 hrs      |     -     |    -    |
| Seed and Create Data            |    H     |     2 hrs      |     -     |    -    |
| Test Back End Routes            |    H     |     1 hrs      |     -     |    -    |
| React File Structure            |    H     |     2 hrs      |     -     |    -    |
| Front End Authentication        |    H     |     3 hrs      |     -     |    -    |
| Front End Routes and Testing    |    H     |     3 hrs      |     -     |    -    |
| Layout Setup                    |    H     |     1 hrs      |     -     |    -    |
| Navbar                          |    H     |     1 hrs      |     -     |    -    |
| Footer                          |    H     |     1 hrs      |     -     |    -    |
| Home Screen                     |    H     |     2 hrs      |     -     |    -    |
| Search Screen                   |    H     |     1 hrs      |     -     |    -    |
| Get and Edit Servers            |    H     |     2 hrs      |     -     |    -    |
| Get, Edit, and Delete Posts     |    H     |     2 hrs      |     -     |    -    |
| Get, Edit, and Delete Comments  |    H     |     2 hrs      |     -     |    -    |
| Hamburger on Nav (tablet/mobile)|    H     |     2 hrs      |     -     |    -    |
| Join Screen CSS                 |    H     |     2 hrs      |     -     |    -    |
| Login Screen CSS                |    H     |     2 hrs      |     -     |    -    |
| Home Screen CSS                 |    H     |     2 hrs      |     -     |    -    |
| Search Screen CSS               |    H     |     2 hrs      |     -     |    -    |
| Server Screen CSS               |    H     |     2 hrs      |     -     |    -    |
| Create Post Screen CSS          |    H     |     2 hrs      |     -     |    -    |
| Edit Post Screen CSS            |    H     |     1 hrs      |     -     |    -    |
| Comments Screen CSS             |    H     |     2 hrs      |     -     |    -    |
| Carousel on Home Screen         |    M     |     3 hrs      |     -     |    -    |
| Modal - Create and Edit Server  |    M     |     2 hrs      |     -     |    -    |
| Modal - Edit Comment            |    M     |     2 hrs      |     -     |    -    |
| CSS for Modals                  |    H     |     2 hrs      |     -     |    -    |
| TOTAL                           |          |     53 hrs     |     -     |     -   |

<br>

### Server (Back End)

#### ERD Model

![ERD](https://res.cloudinary.com/dfryxohde/image/upload/v1635822726/Server/Server.drawio_ljplw5.png)
<br>

***

## Post-MVP

- _Users will be able to like comments and posts_
- _Timestamps to posts and comments_
- _User avatars next to username_
- _Create profiles for user where user can view posts, comments, and likes_

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
