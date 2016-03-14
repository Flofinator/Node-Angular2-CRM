# Node-Angular2-CRM

This project started out as a project for me to learn Node and Angular2 but it's starting to become more serious.  I am spending quite a
bit of my time refactoring and making the code base that exists better before I add on more functionality.

This is an ongoing project to build a CRM system in Node and Angular2.

My Goals for this project are as follows:

-A complete backend so you can put any front-end on it that you or  your company might need without having to use my custom front-end.
-A complete system so smaller companies can use it for free and make it scalable so when those companies need to grow so can this system.
-Try to keep the base of this application completely open-source and free for people to use.

This is not even in Alpha stage yet, but it's getting there!  

I have a ton of work to do, and a lot of refactoring/bettering of the code I still have to do.  You will find todos scattered throughout.  If you have corrections or comments please feel free to post them!

What I am working on now for future updates:

-Building in a calendar, there are a lot of moving parts to this!

-Making menu's dynamic based on roles the loggedin user has.

-Add Encryption across the board.  Currently passwords saved, and JWT are not encrypted.  Looking into bcrypt and some of the other libraries, as this is a work in progress and no one is actively using it I am going to wait a little longer before I saddle down and pick an encryption algorithm to do this.

-Add security header files on API passes on Client

-Sanitize data on the backend for user inputs

-Adding of many comments, I will use ESDoc to build out a Wiki

-Going to build unit tests, although this should be done sooner than later this is on the backburner until I fix the bullet points previous to this.

#This Repository is Under the GPL

I am more than happy to give this out for free to anyone who would like to use it, but if you have additions or changes to make please contribute!

#Use This as Reference Material

Also hopefully this can be a decent reference to anyone struggling to understand a few things:

-How NodeJS and MySQL work together as there are not a lot of resources online for this still.

-MVC architecture, my Models are all of the files in the 'modules' directory.

-How to build/use REST calls between Angular2 and NodeJS

-How to manage JWT's, I currently use localStorage and have not put a heartbeat to auto-renew tokens yet.  Also remember localStorage can open you up to XSS attacks, luckily Angular2 has a lot of protection baked in.
