# Cors Nginx Proxy Example

## About

This project is a simple example of how to use nginx as a proxy for a api that doesn't support CORS. My use case was:

- I had to develop an frontend that is decoupled from the back-end, but in production they both run in the same server.
- Since they run under the same server, there is no need for the back-end to have CORS enabled.
- I didn't want to run the back-end locally (because it would be a pain to setup the database and all the other dependencies), so I needed a way to proxy the requests to the remote back-end hmg server.
- I achieved this by using nginx as a proxy, and this project is an example of how to do it. I made this project because I couldn't find a complete example of how it would be done.

I will explain how it works in an [article](#). If for some reason the link is broken, try to find it on my [blog](https://pietrobondioli.com.br).

## Details

The project is composed by 3 services:

- nginx
- backend (express.js)
- frontend (next.js)

Technologies used:

- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)
- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitlint](https://commitlint.js.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

The backend is just a simple CRUD made with express.js and mongodb. It was added middlewares to handle: logging, error handling, req validation, and api key validation. Most of the implementation has interfaces to base the implementation on, so it can be easily extended. There is only 1 entity: `User`.

The frontend has 3 pages: Home, About, Users. The Users page is the most important page on this project, since it is the page that makes the requests to the backend through the nginx proxy. The Users page has a table that shows all the users.

## How to run

### Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/) (optional)

All the env variables needed to run the project are in the `.env.development` files in the root folder of each service. You can change them if you want, but it's not necessary.

### Running

#### First way

- Clone this repository
- Go to the project root folder
- Run `docker-compose --env-file .env.development -f ./docker-compose.yml --profile full up -d --build`

In this way you will run all the services (nginx, api and frontend) inside docker containers.

#### Second way

- Clone this repository
- Go to the project root folder
- Run `docker-compose --env-file .env.development -f ./docker-compose.yml --profile backend-proxy up -d --build`
- Open a new terminal
- Go to the frontend folder `cd ./frontend`
- Run `npm install && npm run dev`

In this way you will run the nginx and the api inside docker containers, and the frontend locally.

## Conclusion

I hope this project along with the [article](#) can help you to have a better understand of CORS, Nginx and Docker containers.

## Contributors

- [Pietro Bondioli](github.com/pietrobondioli)

## License

[MIT](./LICENSE.md)
