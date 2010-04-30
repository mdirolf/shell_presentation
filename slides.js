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

// some sample data
for (var i = 0; i < 1000; i += 1) {
    db.data.save({x: i});
}

// "slides"
db.deck.save({slide: 0,
              title: "CRUD and the JavaScript Shell",
              who: "Mike Dirolf, 10gen",
              handle: "@mdirolf"});
db.deck.save({slide: 1,
              question: "what is the shell?",
              answer: "a better Powerpoint?"});
db.deck.save({slide: 2,
              question: "what is the shell?",
              answer: "a full JavaScript environment"});
db.deck.save({slide: 3,
              question: "what is the shell?",
              answer: "a reference MongoDB client"});
db.deck.save({slide: 4,
              "use cases": ["administrative scripting",
                            "exploring and debugging",
                            "learning (and teaching!)"]});
db.deck.save({slide: 5,
              repl: ["arrows for history", "^L"]});
db.deck.save({slide: 6,
              "getting help": ["help",
                               "db.help",
                               "db.foo.help"]});
db.deck.save({slide: 7,
              "show": ["dbs", "collections", "users", "profiles"]});
db.deck.save({slide: 8,
              navigating: "databases",
              how: "'use' or 'db.getSisterDB'"});
db.deck.save({slide: 9,
              navigating: "collections",
              how: "dots, brackets, or 'db.getCollection'",
              note: "careful with names like foo-bar"});
db.deck.save({slide: 10,
              "fun with cursors": ["auto-iteration", "it"]});
db.deck.save({slide: 11,
              "error checking": "auto 'db.getLastError'"});
db.deck.save({slide: 12,
              "pro tip!": "commands and viewing JS source"});
db.deck.save({slide: 13,
              "getting help": "--help"});
db.deck.save({slide: 14,
              scripting: "run .js files",
              tools: ["--eval", "--shell", "runProgram"]});
db.deck.save({slide: 15,
              warning: "dates in JS suck"});
db.deck.save({slide: 16,
              warning: "array iteration in JS sucks"});
db.deck.save({slide: 17,
              homework: ["convince 2 friends to try MongoDB",
                         "send feedback @mdirolf"]});
db.deck.save({slide: 18,
              url: "github.com/mdirolf/shell_presentation",
              questions: "?"});

 // current slide
var current = 0;

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

// go to slide and print
var go = function(n) {
    current = n;
    next();
};

// repeat the previous slide
var again = function() {
    current--;
    next();
};
