# Bitflow's Backend API

- [Bitflow's Backend API](#bitflows-backend-api)
  - [Requirements](#requirements)
  - [Important step (don't miss this)](#important-step-dont-miss-this)
  - [Project setup](#project-setup)
  - [Available scripts in `package.json`](#available-scripts-in-packagejson)
  - [Frontend](#frontend)
  - [Extra notes](#extra-notes)

Dead, simple API for sending emails to any [`Gmail`](https://mail.google.com) inbox from [Bitflow](https://bitflow.vercel.app)

## Requirements

1. Git (duh 🙄...)
2. Node.js & npm
3. mkcert (to generate SSL `private key` and `certificate`)
4. Postman or your own request client

## Important step (don't miss this)

Proceeding create a `.env` file in the root of the `backend/` folder (not the project folder)

Populate the `.env` file with the following basic entries

```ini
GMAIL_ID = youraccount@gmail.com
GMAIL_PASSWORD = your_app_password
PORT = port_number
HOST = name_anything
NODE_ENV = development | testing | production
```

To get your `GMAIL_PASSWORD`, follow the steps:

1. Head over to your [Google Account](https://account.google.com)
2. Under `Security` choose `App passwords` (it'll only be available if you have `2FA Authentication` enable for the account)
3. Create a new app password for `Mail` on `any_device_choice`
4. Copy the password it'll generate and fill in the environment variable

**Important: this step is important as your normal `Gmail` account `password` will not work for this**

**Evenly important: The NODE_ENV variables will affect the final features the project will have with some features may be disabled like `SSL Certificates`**

## Project setup

Follow the below steps:

```powershell
# Clone the repository
$ git clone {REPOSITORY_URL}

# Install dependencies
$ npm install  # or
$ yarn install

# Generate SSL private key and certificate with mkcert certificate authorities
$ mkcert localhost 127.0.0.1 ::1

# The private key has -key.pem appended to the end by default
# Rename the certificate and private key
$ ren {GENRATED_CERTIFICATE.pem} cert.pem && ren {GENERATED_KEY.pem}  key.pem

# Start the development server with neccesary environment variables
$ npm run dev # or
$ yarn dev
```

## Available scripts in `package.json`

| Scripts | Description                                               |
|---------|-----------------------------------------------------------|
| `dev`   | Runs server in development mode (NODE_ENV=development)    |
| `test`  | Runs server in testing/staging mode (NODE_ENV=testing)    |
| `prod`  | Runs server in demo production mode (NODE_ENV=production) |

## Frontend

Are you looking for the frontend work of this project? Click the link to go to the [`frontend/`](../frontend/README.md)  

## Extra notes

Contributions are totally accepted. Follow the guidelines in [`CONTRIBUTING.md`](CONTRIBUTING.md) for more information

Missed anything in the `README`, file an `issue` or submit a `pull request`
