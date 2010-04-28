/*
 * Slides for presentation on CRUD and the JavaScript shell.
 *
 * Copyright 2010 Mike Dirolf (http://dirolf.com)
 *
 * This work is licensed under the Creative Commons
 * Attribution-Noncommercial-Share Alike 3.0 United States License. To view a
 * copy of this license, visit
 * http://creativecommons.org/licenses/by-nc-sa/3.0/us/ or send a letter to
 * Creative Commons, 171 Second Street, Suite 300,
 * San Francisco, California, 94105, USA.
 *
 * Originally given at MongoSF on 4/30/2010.
 *
 * To use: run `mongo --shell slides.js`
 */

// set db and clean up
db = db.getSisterDB("crud");
db.dropDatabase();

/*
 * What is the shell?
 *  * Full JS shell
 *  * MongoDB client
 * Uses
 *  * Admin scripting
 *  * Exploring/debugging
 *  * Learning
 * Help
 * Navigation
 * Quirks
 * Scripting
 */

// "slides"
db.deck.save({slide: 0,
              title: "CRUD and the JavaScript Shell",
              who: "Mike Dirolf, 10gen",
              handle: "@mdirolf"});
db.deck.save({slide: 1,
              question: "What is the shell?",
              answer: "A better Powerpoint?"});
db.deck.save({slide: 2,
              question: "What is the shell?",
              answer: "A full JavaScript environment"});
db.deck.save({slide: 3,
              question: "What is the shell?",
              answer: "A reference MongoDB client"});
db.deck.save({slide: 4,
              "use cases": ["Administrative scripting",
                            "Exploring and debugging",
                            "Learning"]});
db.deck.save({slide: 5,
              "getting help": ["help",
                               "db.help",
                               "db.foo.help"]
              });
db.deck.save({slide: 6,
              "show": ["dbs", "collections", "users", "profiles"]});
db.deck.save({slide: 7,
              navigating: "databases",
              how: "'use' or 'db.getSisterDB'"});
db.deck.save({slide: 8,
              navigating: "collections",
              how: "dots or brackets"});
db.deck.save({slide: 29,
              actions: ["Convince 2 friends to try MongoDB",
                        "Send feedback @mdirolf"]});
db.deck.save({slide: 30,
              url: "github.com/mdirolf/shell_presentation",
              questions: true});

 // current slide
var current = 0;

// go to slide and print
var go = function(n) {
    current = n;
    next();
};

// print current slide and advance
var next = function() {
    var slide = db.deck.findOne({slide: current});
    if (slide) {
        current++;
        delete slide._id;
        delete slide.slide;
        print(tojson(slide, null, false));
    } else {
        print("The End!");
    }
};
