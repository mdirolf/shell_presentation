// set db and clean up
db = db.getSisterDB("crud");
db.dropDatabase();

/*
 * What is the shell?
 * Uses
 *  * Admin scripting
 *  * Exploring/debugging
 *  * Learning
 *
 */

db.deck.save({slide: 0,
              title: "CRUD and the JavaScript Shell",
              presenter: "Mike Dirolf, 10gen",
              handle: "@mdirolf"});

 // current slide
var current = 0;

// print current slide and advance
var next = function() {
    var slide = db.deck.findOne({slide: current});
    if (slide) {
        current++;
        delete slide._id;
        delete slide.slide;
        printjson(slide);
    } else {
        print("The End!");
    }
};
