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

db.deck.save({slide: 0,
              title: "CRUD and the JavaScript Shell",
              presenter: "Mike Dirolf, 10gen",
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
              });
db.deck.save({slide: 29,
              actions: ["Convince 2 friends to try MongoDB",
                        "Send feedback @mdirolf"]});
db.deck.save({slide: 30,
              url: "github.com/mdirolf/shell_presentation",
              questions: true});

 // current slide
var current = 0;

// print current slide and advance
var next = function() {
    var slide = db.deck.findOne({slide: current});
    if (slide) {
        current++;
        delete slide._id;
        printjson(slide);
    } else {
        print("The End!");
    }
};
