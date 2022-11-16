# c8-48-t-typescript-react

## Start from scratch
First let's make some boilerplate

Just to be sure we can install stuff using node. We are using 

```sh
nvm install 18
nvm use 18
node -v # should output something about using node v18
```

```sh
mkdir server && cd server
npm i -g @nestjs/cli
nest new . --strict
cd ..
```

```sh
mkdir client && cd client
npm create vite@latest 
# ✔ Project name: … .
# ✔ Select a framework: › React
# ✔ Select a variant: › TypeScript
cd ..
```

Now let's try on docker (check first it's installed using `docker -v`)

```sh
docker build -t c8-48 .
docker 
```

Using `docker-compose` you can do this:

```sh
docker compose build
docker compose up pgadmin
docker compose up run-server
```

if you inspect the [Dockerfile][./Dockerfile] you can notice it have several stages, you can run all of them using `docker-compose`.
