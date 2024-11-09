# NodeJS Social Network

## Project initialization

In the project folder, run ```npm install```.

### Initialize database

Ensure MongoDB service is active on your computer.

Initialize database using the following command: ```npm run initDB```.

This will create a database according to the environment variable `DATABASE_NAME` (found in `.env` file, default is `social_network_dtvh`) and populate it with some data.

### Running the application

To run the application, run ```npm run build```.

This will start the application in an url according to the environment variables `SERVER_URI` and `PORT` (found in `.env` file, default url is `http://localhost:3001`).

## Available requests

The following requests have been implemented:

Access to certain requests is limited by whether or not the user is logged in, their role or email address. Lambda users have the access to their own chats only, while admin users are able to go everywhere (even in private chats). Only admin can list users or all the chats. The user `bob` is admin and have the password `password`. The user `alice` is just an user and have the password `password`.

### Authentication

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/auth/login`: get the login form

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/auth/login`: log in with the username and the password

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/auth/logout`: log out

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/auth/register`: register yourself in the database, with the required values such as birthday, firstname, lastname, ...


### Events

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event`: list all events

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event/new`: create an event

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id`: get the event with id `:event_id`

![put](https://img.shields.io/badge/PUT-c9983e?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/update`: update the event with id `:event_id`

![delete](https://img.shields.io/badge/DELETE-4c609c?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/delete`: delete the event with id `:event_id`

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/send_image`: get the form to change event image for event with id `:event_id`

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/send_image`: send the image for the event with id `:event_id`

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/get_image`: get the image for the event with id `:event_id`

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/like`: like the event with id `:event_id`

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/unlike`: unlike the event with id `:event_id`

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/event/:event_id/likes`: get users who liked the event with id `:event_id`



### Users

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/user/myprofile`: get user profile

![put](https://img.shields.io/badge/PUT-c9983e?style=for-the-badge&logo=test&logoColor=white)  `/user/update`: update user profile

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/user/all`: get every users list (for admin)

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/user/send_image`: get the form to change curent user image

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/user/send_image`: send the image for the current user

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/user/:user_username/get_image`: get the image of user with username `:user_username`

### Chats

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/chat`: get all chats of the connected user

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/chat/all`: get all chats (for admin)


### Messages

![get](https://img.shields.io/badge/GET-2adb59?style=for-the-badge&logo=test&logoColor=white)  `/chat/:chat_id`: get messages of chat with id `:chat_id`

![post](https://img.shields.io/badge/POST-c94a3e?style=for-the-badge&logo=test&logoColor=white)  `/chat/:chat_id/new`: create a new message in the chat with id `:chat_id`
