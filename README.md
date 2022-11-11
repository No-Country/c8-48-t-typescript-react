# c8-48-t-typescript-react

Nuestra plataforma , permite a los jóvenes deportistas mostrar su talento y lograr obtener becas universitarias. Sin necesidad de utilizar distintos puntos de contacto.

## Start from scratch
First let's make some boilerplate

Just to be sure we can install stuff using node. We are using 

```sh
nvm install 18
nvm use 18
node -v #should output something about using node v18
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
```
