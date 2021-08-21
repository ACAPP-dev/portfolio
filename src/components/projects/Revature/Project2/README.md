# Barker User Interface

## Project Description

The front-end user interface for the Barker API developed by Yasmine, Gray, Gerardo, Cory, and Andrew.

### What is Barker?

Barker is a full stack web application that enables shelters to input dogs available for adoption. These dogs can be viewed, ‘liked’, and ‘disliked’ by users interested in adopting a dog.

## Technologies Used

<ul>
<li>TypeScript / JavaScript</li>
<li>React, React-Router</li>
<li>Tailwind CSS</li>
<li>HTML 5</li>
<li>CSS</li>
</ul>

## Features

### Users (Seeking to Adopt a Dog)

- Create an account and input their dog preferences.
- Login and logout functionality.
- Update name, email, and dog preferences as needed.
  - Currently Breed and Gender preferences will impact which dogs are viewable.
- View a series of dogs that match their preferences.
  - If user chooses to 'swipe' left, that dog will not be shown again.
  - If user chooses to 'swipe' right, that dog will be added to the list of 'liked' dogs.
- View a list of all previously ‘liked’ dogs.
  - 'Unlike' a dog directly from this list.

### Shelters (Have Dogs Available for Adoption)

- Create an account.
- Login / logout functionality.
- Update shelter name, address, and contact information.
- Create dog profiles that are viewable by a user.
- View a list of all dogs currently available for adoption (for logged in shelter only).
- Edit dog profile as needed.

## Additional Planned Features

- When a user decides to adopt a dog, we will send the application directly to the shelter for the user.
- Expand dog preferences that are applied to dogs viewable in the 'swipe' page to include age, size, good-with, coat length, and energy level.
- Login with Facebook, Google, and Apple.
- A dashboard for shelters to show how many 'likes' and 'dislikes' for each dog.
- The ability for shelters to add animals other than just dogs, i.e. reptiles, cats, birds etc.
- The ability for users to be able to select additional animals as preferences.
- Implement machine learning to better provide users with the animals that they like best.
- Geolocation so users are seeing shelters that are near them.

## Getting Started

### User or Shelter

Hosted on Amazon Web Services S3 static website server.
Access at: http://corith.com/

### Developer

Github user interface source files: https://github.com/ACAPP-dev/BarkerFrontEnd

### Installation

```
git clone https://github.com/ACAPP-dev/BarkerFrontEnd

npm install

npm start
```

Github API source files: https://github.com/ACAPP-dev/project2-DT

Refer to Readme for API features, database details, and installation instructions.

## Usage

### Home Page Options

- Create Account (if looking to adopt a dog).
- Create Shelter Account (if you have dogs to adopt).
- Login - works for both users and shelters.

![home page](./images/home.png)

## User Functionality

### Create Account

- Enter full name.
- Enter email address.
- Enter password.
- Select Sign Up! to create account (will automatically login also).

![create user account](./images/create-user-account.png)

### User Options

- Click on Barker Logo to return to user menu at any time.
- Choose Select Dog Preferences (or Update User from nav bar) to modify name and email as well as select any desired dog preferences.
- Select Look at Available Dogs (or Swipe from nav bar) to view dogs available for adoption.
- Click on View Liked Dogs (or Liked Dogs from nav bar) to view a list of previously liked dogs.
- Choose LOGOUT to log out of system.

![user menu](./images/user-home.png)

### Update User

- Update name and email if desired.
- Select from any drop down menu to define dog preferences.
- Click on Save Updates to save changes.

![update user](./images/update-user.png)

### Swipe

- Look at dog picture and details.
- Click Growl (Dislike) to remove dog from your list of available dogs (logged in user only).
- Click Bark (Like) to add dog to list of 'liked' dogs.
  - Liked dogs are viewable in the Liked Dogs page.
- If Growl or Bark is clicked then the next dog will be shown (if there are additional available dogs).
  - Otherwise a message will appear that no more dogs are currently available.

![swipe](./images/user-swipe.png)

### Liked Dogs

- Review list of previously 'liked' dogs along with the shelter where they are located.
- Select Unlike Dog to remove dog from this list.

![dog list](./images/user-liked-dogs.png)

## Shelter

### Create Account

- Enter shelter name.
- Enter shelter address.
- Enter shelter contact information (email address or phone number).
- Enter password.
- Click Sign Up! to create account (shelter will be automatically logged in).

![create shelter account](./images/shelter-create-account.png)

### Shelter Options

- Click on Barker Logo to return to shelter menu at any time.
- Select Add Dog to create a dog that is viewable by users seeking to adopt.
- Choose Review Dogs (or My Dogs on navbar) to view list of dogs previously added.
- Click on Update Shelter (or shelter name on navbar) to modify shelter details.
- Select LOGOUT to log out of system.

![shelter menu](./images/shelter-home.png)

### Add Dog

- Enter dog name and details including age and breed.
- Select gender, shedding level, and energy level from drop down menus.
- Enter link to photo (will be viewable by users).
- Enter additional information about dog in Bio.
- Click on Create Dog to save dog information and make viewable.

![add dog](./images/shelter-create-dog.png)

### View List of Dogs

- Select Edit Dog to view and change dog details.

![view dogs](./images/shelter-dog-list.png)

### Update Dog Details

- All fields can be changed as needed.
- Select Update to save changes.

![update dog](./images/shelter-update-dog.png)

### Update Shelter Details

- All fields can be changed as needed.
- Select Save Changes to update database.

![update shelter](./images/update-shelter.png)

## Contributors

Written by **Yasmine**, **Gray**, **Gerardo**, **Cory**, and **Andrew** in conjunction with _Revature_ - January 2021.

## License

This application is available as open source under the terms of the [The MIT License](https://github.com/2011JavaReact/AdeptusAdministratumFrontend/blob/master/LICENSE.md).
