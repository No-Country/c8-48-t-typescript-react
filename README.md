# c8-48-t-typescript-react

<!-- PROJECT SHIELDS -->
[![Backend Framework][backend-framework]][backend-framework-url]
[![Frontend Framework][frontend-framework]][frontend-framework-url]
[![contributions welcome][contributions-welcome]][issues-url]
[![License][badge-license]](License)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://">
	  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-football-football-soccer-flaticons-lineal-color-flat-icons.png" alt="Logo"/>
  </a>

  <h1 align="center">
	Football Connect
  </h1>

  <p align="center">
    A bridge between young dreamers and an opportunity
    <br />
	  🖊️
    <a href="https://www.figma.com/file/c3t2klUdEqJbUXWingUCbx/Dise%C3%B1o-pagian-para-deportistas?node-id=33%3A90">Check the design</a>
    🐞
    <a href="https://github.com/No-Country/c8-48-t-typescript-react/issues">Report a Bug</a>
    🙋‍♂️
    <a href="https://github.com/No-Country/c8-48-t-typescript-react/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [c8-48-t-typescript-react](#c8-48-t-typescript-react)
  - [Table of Contents](#table-of-contents)
  - [The Project](#the-project)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)

## The Project

Our platform allows young athletes to show their talent and obtain university scholarships. No need to use different contact points.

## Features

- Docker for reproducibility
- React 18 in the frontend
- NestJS in backend
- PostgreSQL as data base
- Material UI as style framework
- JS modules and ES6+ available for most browsers
- Sets eslint rules

## Prerequisites

- Some compatible Linux OS (We tested on Debian/Ubuntu derivatives). Windows and Mac should be fine.
- NodeJs v18 or superior. Check the [nvm file](.nvmrc) for details.
- Docker and docker compose
- `git` and normal development stuff
- Basic terminal and script knowledge
- Some common sense

## Getting Started

First let's make some boilerplate

Just to be sure we can install stuff using node. We are using 

```sh
nvm install 18
nvm use 18
node -v # should output something about using node v18
```

Now let's be sure we have the environmental variables

```sh
cp .env.example .env
```

Now, let's prepare the way for using the data base in the backend, without it the docker build won't work.

```sh
sudo rm -rf pgadmin
mkdir pgadmin_data && sudo chown -R 5050:5050 pgadmin_data
```

If you want to know more about pgadmin and how to run it, please check
[the documentation about how to run pgadmin](docs/pgadmin.md).

Now let's try on docker (check first it's installed using `docker -v`)

```sh
docker build -t c8-48 .
```

Using `docker-compose` you can do this:

```sh
docker compose build
docker compose up pgadmin
docker compose up run-server
docker compose up run-client
```

if you inspect the [Dockerfile](./Dockerfile) you can notice it have several stages, you can run all of them using `docker-compose`.

## Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="https://github.com/Eduardo-L-R" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/60417224?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Eduardo Leiva's Photo" width="200px">
            </a>
            <h2>
                <a href="https://github.com/Eduardo-L-R" target="_blank" rel="author">
                    Eduardo Leiva
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="https://github.com/Eduardo-L-R" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
  <tr>
    <td>
        <div align="center">
            <a href="https://github.com/Turyfay" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/39543882?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="David Enamorado's Photo" width="200px">
            </a>
            <h2>
                <a href="https://github.com/Turyfay" target="_blank" rel="author">
                    David Enamorado
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="https://github.com/Turyfay" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
  <tr>
    <td>
        <div align="center">
            <a href="https://github.com/garzo94" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/87275990?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Alexander Garzo's Photo" width="200px">
            </a>
            <h2>
                <a href="https://github.com/garzo94" target="_blank" rel="author">
                    Alexander Garzo
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="https://github.com/garzo94" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Israel Laguan's Photo" width="200px">
            </a>
            <h2>
                <a href="https://israel-laguan.github.io/" target="_blank" rel="author">
                    Israel Laguan
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:israellaguan@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    Email me to 
                    <a href="mailto:israellaguan@gmail.com">
                        israellaguan@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/israellaguan/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/Israel-Laguan" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table> 

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

## Show your support

🤗 Give a ⭐️ if you like this project!

## License

[![License][badge-license]](License)

📝 This project is licensed under the [apache-2](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[issues-url]: https://github.com/No-Country/c8-48-t-typescript-react/issues
[backend-framework]: https://img.shields.io/badge/backend-nestjs-E0234E?style=for-the-badge&logo=nestjs
[frontend-framework]: https://img.shields.io/badge/frontend-react-61DAFB?style=for-the-badge&logo=react
[backend-framework-url]: https://nestjs.com/
[frontend-framework-url]: https://reactjs.org/
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/badge/License-Apache--2-D22128?style=for-the-badge&logo=apache
