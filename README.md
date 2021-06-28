# Welcome to spinup-host-product 👋

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)

> Product Side of spinup.host, an alternative to RDS

## Prerequisites

- You will need a GitHub Token, which you can get from,

```sh
https://github.com/settings/developers
```

- Set the redirect URL to http://localhost:3000/login

- Setup the tokens in the frontend first, create a .env file in the root of your frontend folder
- In the .env file, add the following environment variable

```sh
REACT_APP_URL = https://github.com/login/oauth/authorize?client_id=<YOUR_CLIENT_ID>&redirect_uri=http://localhost:3000/login
```

- You also need to setup environment variables in the backend folder
- Go into the OauthBackend folder,

```sh
cd OauthBackend
```

- Create the .env file, and set up the following environment variables

```sh
CLIENT_ID = <YOUR_CLIENT_ID>
CLIENT_SECRET = <YOUR_CLIENT_SECRET>
```

## Install

- First install all dependencies

```sh
cd spinup-dash && npm install
cd OauthBackend && npm install
```

## Usage

- To run the frontend

```sh
cd spinup-dash && npm start
cd OauthBackend && node index.js
```

## Authors

👤 **Rajat Maheshwari, Hiten Sharma**

## Show your support

Give a ⭐️ if this project helped you!

---
