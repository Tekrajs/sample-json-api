# Introduction

Sample Json API was built to simulate an API server which response to the request from client. This API supports both mobile and web application. It uses Basic authentication and uses JWT to serving further request of the clients
# Setup

## Prerequisite
- NodeJS (latest LTS version)
- MongoDB

## Install 
- Install dependency
```
yarn install
```
- Setup environment variable
```
- cp .env.example .env
```
- Test
```
yarn test
```
- Start
```
yarn start
```

# Implementation

# Worker Usage

This project contains a worker file, which is build with the purpose of implementation of periodic synchronization of data from the third party api `https://dinotest.wpengine.com/wp-json/wp/v2/posts` . The project is availabe with the option to fetch data directly from the above api or from the data saved from database. For that an environment variable FETCH_LIVE_DATA is used.

## Endpoints
Currently there are five endpoints available, for user registration, for retrieving users, for loging users, for getting posts and for getting posts details.

### Status Codes
This API returns the following status codes.

| Status Code | Description   |
| :---        |    :----:     |
| 200         | `OK`          |
| 400         | `BAD REQUEST` |
| 401         | `Unauthorized`|
| 500         | `Server Error`|  

### User list Endpoint
`GET /api/users`
#### Response

```
{ 
    error: boolean,
    message: String
    users: [string] 
}
```
#### Response Example

```
{
    "error": false,
    "users": [
        {
            "_id": "6205714701df7ac90cdc72cc",
            "username": "tekraj",
            "email": "shrestharj64@gmail.com",
            "createdAt": "2022-02-10T20:10:47.984Z",
            "updatedAt": "2022-02-10T20:10:47.984Z"
        },
        {
            "_id": "62057267af6ac140341a78ab",
            "username": "tekrajs",
            "email": "shrestharj64@keptify.com",
            "createdAt": "2022-02-10T20:15:35.931Z",
            "updatedAt": "2022-02-10T20:15:35.931Z"
        },
        {
            "_id": "62059162b5d0da7950dfe26c",
            "username": "test",
            "email": "test@keptify.com",
            "createdAt": "2022-02-10T22:27:46.820Z",
            "updatedAt": "2022-02-10T22:27:46.820Z"
        }
    ]
}
```
The `error` attribute specifies whether the response was errornous or a successfull response.

The `users` attribute contains data of all the users available.

### User Registration Endpoint
`POST /api/users/registration`

#### Payload

```
{
    "users":
        {
            "username": "example123",
            "email": "example@example.com"
            "password": "example@123" 
        }
}
```

#### Response

```
{
    "error": boolean,
    "message": string,
    "currentUser": [string],
}
```
#### Response Example

```
{
    "error": false,
    "message": "success",
    "currentUser": {
        "username": "test",
        "email": "test@keptify.com"
    }
}
```
The `error` attribute specifies whether the response was errornous or a successfull response.

Thr `message` attribute contains a message used to indicate errors.

The `currentUser` attribute contains recently created user data.

### Login Endpoint
`POST /api/users/login`

#### Payload

```
{
    "users": [
        {
            "email": "example@example.com",
            "password": "example@123"
        }
    ]
}
```

#### Response

```
{
    "error": boolean,
    "message": string,
    "user": [string]
}
```
#### Response Example

```
{
    "error": false,
    "user": {
        "username": "tekraj",
        "email": "shrestharj64@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDU3MTQ3MDFkZjdhYzkwY2RjNzJjYyIsInVzZXJuYW1lIjoidGVrcmFqIiwiaWF0IjoxNjQ0NTMxMzA0LCJleHAiOjE2NDQ1MzQ5MDR9.y64XvQFcqjhN4KHcPZpms_jJcixgmfirGHmntlWoj40"
    }
}
```
The `error` attribute specifies whether the response was errornous or a successfull response.

Thr `message` attribute contains a message used to indicate errors.

The `user` attribute contains recently logged in user data alon with json web token.


### Get all Posts Endpoint
`POST /api/posts`

#### Response

```
{
    "error": boolean,
    "message": string,
    "posts": [string]
}
```
#### Response Example

```
{
    "error": false,
    "posts": [
        {
            "id": 41,
            "date": "2019-12-03T10:24:29",
            "date_gmt": "2019-12-03T10:24:29",
            "guid": {
                "rendered": "http://dinotest.wpengine.com/?p=41"
            },
            "modified": "2019-12-03T10:24:29",
            "modified_gmt": "2019-12-03T10:24:29",
            "slug": "post-4",
            "status": "publish",
            "type": "post",
            "link": "https://dinotest.wpengine.com/post-4/",
            "title": {
                "rendered": "Post 4"
            },
            "content": {
                "rendered": "\n<p>Post 4</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>Post 4</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "closed",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                1
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/41"
                    }
                ],
                "collection": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/comments?post=41"
                    }
                ],
                "version-history": [
                    {
                        "count": 0,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/41/revisions"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/media?parent=41"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/categories?post=41"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/tags?post=41"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        },
        {
            "id": 5,
            "date": "2019-09-09T10:50:52",
            "date_gmt": "2019-09-09T10:50:52",
            "guid": {
                "rendered": "http://dinotest.wpengine.com/?p=5"
            },
            "modified": "2019-09-09T10:50:52",
            "modified_gmt": "2019-09-09T10:50:52",
            "slug": "post-1",
            "status": "publish",
            "type": "post",
            "link": "https://dinotest.wpengine.com/post-1/",
            "title": {
                "rendered": "Post 1"
            },
            "content": {
                "rendered": "\n<p>This is text for post 1</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>This is text for post 1</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "open",
            "ping_status": "open",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                1
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/5"
                    }
                ],
                "collection": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/comments?post=5"
                    }
                ],
                "version-history": [
                    {
                        "count": 0,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/5/revisions"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/media?parent=5"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/categories?post=5"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/tags?post=5"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        }
    ]
}
```
The `error` attribute specifies whether the response was errornous or a successfull response.

Thr `message` attribute contains a message used to indicate errors.

The `posts` attribute contains all the posts data.

### Get all Posts Endpoint
`POST /api/posts/:post_id`

#### Response

```
{
    "error": boolean,
    "message": string,
    "post": [string]
}
```
#### Response Example

```
{
    "error": false,
    "posts":
        {
            "id": 41,
            "date": "2019-12-03T10:24:29",
            "date_gmt": "2019-12-03T10:24:29",
            "guid": {
                "rendered": "http://dinotest.wpengine.com/?p=41"
            },
            "modified": "2019-12-03T10:24:29",
            "modified_gmt": "2019-12-03T10:24:29",
            "slug": "post-4",
            "status": "publish",
            "type": "post",
            "link": "https://dinotest.wpengine.com/post-4/",
            "title": {
                "rendered": "Post 4"
            },
            "content": {
                "rendered": "\n<p>Post 4</p>\n",
                "protected": false
            },
            "excerpt": {
                "rendered": "<p>Post 4</p>\n",
                "protected": false
            },
            "author": 2,
            "featured_media": 0,
            "comment_status": "closed",
            "ping_status": "closed",
            "sticky": false,
            "template": "",
            "format": "standard",
            "meta": [],
            "categories": [
                1
            ],
            "tags": [],
            "_links": {
                "self": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/41"
                    }
                ],
                "collection": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts"
                    }
                ],
                "about": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/types/post"
                    }
                ],
                "author": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/users/2"
                    }
                ],
                "replies": [
                    {
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/comments?post=41"
                    }
                ],
                "version-history": [
                    {
                        "count": 0,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/posts/41/revisions"
                    }
                ],
                "wp:attachment": [
                    {
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/media?parent=41"
                    }
                ],
                "wp:term": [
                    {
                        "taxonomy": "category",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/categories?post=41"
                    },
                    {
                        "taxonomy": "post_tag",
                        "embeddable": true,
                        "href": "https://dinotest.wpengine.com/wp-json/wp/v2/tags?post=41"
                    }
                ],
                "curies": [
                    {
                        "name": "wp",
                        "href": "https://api.w.org/{rel}",
                        "templated": true
                    }
                ]
            }
        }
}
```
The `error` attribute specifies whether the response was errornous or a successfull response.

Thr `message` attribute contains a message used to indicate errors.

The `post` attribute contains specific post data.

