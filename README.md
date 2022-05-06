- Para usar a aplicação acesse o link: https://space-rent-client-2tycf7ugz-martinezrafael.vercel.app/
- Para usar a API acesse: https://space-rent-api.herokuapp.com/

Rotas API:
| DOC               | METHOD | ENDPOINT     | PAYLOAD                                                    | RESPONSE       | ACTION             |
| ----------------- | ------ | ------------ | ---------------------------------------------------------- | -------------- | ------------------ |
| auth.routes.js    | POST   | /auth/signup | {username, password, biography}                            | {User}         | create new user    |
| auth.routes.js    | POST   | /login       | {username, password}                                       | {User}         | login              |
| user.routes.js    | GET    | /users       | \-                                                         | \[{Users}\]    | get all users      |
| user.routes.js    | GET    | /:userId     | \-                                                         | {User}         | get unique user    |
| user.routes.js    | PUT    | /:userId     | {username, biography}                                      | {User}         | update user        |
| space.routes.js   | POST   | /spaces      | {name, description, adress, size, purposes, images, price} | {Space}        | create new space   |
| space.routes.js   | GET    | /spaces      | \-                                                         | \[{Spaces}\]   | get all spaces     |
| space.routes.js   | GET    | /:spaceId    | \-                                                         | {Space}        | get unique space   |
| space.routes.js   | PUT    | /:spaceId    | {name, description, adress, size, purposes, images, price} | {Space}        | update space       |
| space.routes.js   | DELETE | /:spaceId    | \-                                                         |                | delete space       |
| event.routes.js   | POST   | /:spaceId    | {title, description, date, price}                          | {Event}        | create new event   |
| event.routes.js   | GET    | /events      | \-                                                         | \[{Events}\]   | get all events     |
| event.routes.js   | GET    | /:eventId    | \-                                                         | {Event}        | get unique event   |
| event.routes.js   | PUT    | /:eventId    | {title, description, date, price}                          | {Event}        | update event       |
| event.routes.js   | DELETE | /:eventId    | \-                                                         | \-             | Delete Event       |
| comment.routes.js | POST   | /:spaceId    | {comment}                                                  | {comment}      | create new comment |
| comment.routes.js | GET    | /:spaceId    | \[{comments}\]                                             | \[{comments}\] | get all comments   |
| comment.routes.js | PUT    | /:commentId  | {comment}                                                  | {comment}      | update comment     |
| comment.routes.js | DELETE | /:commentId  | \-                                                         | \-             | delete comment     |

Signup
![image](https://user-images.githubusercontent.com/33470634/167211600-542b1ead-f869-48dd-847a-7311681ab4d4.png)


Login
![image](https://user-images.githubusercontent.com/33470634/167211463-21f412d7-73d4-465a-a7bc-fff93b3fd875.png)


Profile
![image](https://user-images.githubusercontent.com/33470634/167211890-271fb4dd-fde8-4481-8bd4-280cc8ee8c52.png)

Form
![image](https://user-images.githubusercontent.com/33470634/167211969-3a74ed9a-9f3f-47a8-85eb-ccb61264f762.png)

Users
![image](https://user-images.githubusercontent.com/33470634/167212053-2a923247-8dfc-467a-ae5f-698282227e4f.png)

spaces
![image](https://user-images.githubusercontent.com/33470634/167212121-5dbebdce-2101-4b64-b5bf-bf802c3f802a.png)

