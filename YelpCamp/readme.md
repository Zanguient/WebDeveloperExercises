# YelpCamp

## 1) Initial Setup

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:

* Name
* Image

## 2) Layout and Basic Styling

* Create the header and footer partials
* Add in Bootstrap

## 3) Creating New Campgrounds

* Setup a new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## 4) Style the Campgrounds Page

* Add a be header / title
* Make campgrounds display in a grid

## 5) Style the Navbar and Form

* Add a navbar to all templates
* Style the new campground form

## 6) Add Mongoose

* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

## 7) Show Page

* Review the RESTFUL routes
* Add description to campground model
* Use db.collection.drop()
* Add a show route/template

## RESTful Routes Example

|name        |url           |verb          |description   |
|------------|:-------------|:------------:|:-------------|
|INDEX       |/campgrounds          |GET        |Display a list of all campgrounds|
|NEW         |/campgrounds/new      |GET        |Displays form to make a new campground|
|CREATE      |/campgrounds          |POST       |Add new campground to DB|
|SHOW        |/campgrounds/:id      |GET        |Shows info about one campground|
|EDIT        |/campgrounds/:id/edit |GET        |Shows edit form for one campground|
|UPDATE      |/campgrounds/:id      |PUT        |Update a particular campground, then redirect somewhere|
|DESTROY     |/campgrounds/:id      |DELETE     |Delete a particular campground, then redirect somewhere|

## 8) Refactor Mongoose Code

* Create a models directory
* Use model.exports
* Require everything correctly

## 9) Add Seeds File

* Add a seeds.js file
* Run the seeds file every time the server starts

## 10) Add the Comment model

* Fix errors
* Display comments on campground SHOW page

## 11) NEW & CREATE Comment Routes

* Use nested routes
  * ie: campgrounds/:id/comments/new
* Add the NEW and CREATE routes
* Add the new comment form

## 12) Style Show Page

* Add sidebar to show page
* Display comments nicely

## 13) Finish Styling Show Page

* Add public directory
* Add custom stylesheet

## 14) Add User Model (Authentication pt. 1)

* Install all packages needed for authentication
* Define User Model

## 15) Register (Authentication pt. 2)

* Configure Passport
* Add register routes
* Add register template

## 16) Login (Authentication pt. 3)

* Add login routes
* Add login template

## 17) Logout/Navbar (Authentication pt. 4)

* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly
  * ie - Only show logout link, if user is signed in

## 18) Show/Hide Links (Authentication pt. 5)

* Show/hide authentication links in navbar

## 19) Refactor the Routes

* Use Express router to reorganize all routes

## 20) Users + Comments

* Associate users and comments
* Save author's name to a comment automatically

## 21) Users + Campgrounds

* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

## 22) Editing Campgrounds

* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

## 23) Deleting Campground

* Add Destroy Route
* Add Delete button

## 24) Edit/Delete Campgrounds (Authorization pt. 1)

Authentication: Refers to finding out if someone is who they say they are
Authorization: Once you know someone is, you figure out what they are allowed and not allowed to do

* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

## 25) Editing Comments (Authorization pt. 2)

* Add Edit route for comments
* Add Edit Button
* Add Update route
* User can only edit his/her comment
* Hide/Show edit button

## 26) Deleting Comments (Authorization pt. 3)

* Add Destroy route
* Add Delete button
* User can only delete his/her comment
* Hide/Show delete button

## 27) Refactor Middleware

* Extract Middleware code into a separate file and require that file.

## 28) Adding in Flash Messages

* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

## 29) Google Maps API

* Get Google Maps API Key
  * Restrict Google Maps API Key
* Get another key for Geocoding API
  * Add to application as ENV variable
* Add Google Maps scripts to your application
* Display the campground location in show.ejs
* Update campground model
* Update new and edit forms
  * Add location input field
* Update campground routes

## 30) Time since created with Moment JS

* Install moment js
* Require moment and add to app.locals
* Update campground and comment models
* Use moment in show.ejs file

## 31) User Profile Page

* Update User Schema
* Create User Edit Route
* Create User Update Route
* Add Middleware to Authenticate and Authorization
