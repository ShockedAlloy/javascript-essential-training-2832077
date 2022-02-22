/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

//Book properties name, author, totalPages, format, genre, bookOpen, pagesRead
const stateOfEmergency = new Book(
  "State of Emergency",
  "Tamika D. Mallory",
  239,
  "Hardcover",
  "Civil Rights",
  false,
  39
);

const will = new Book(
  "Will",
  "Will Smith",
  432,
  "Hardcover",
  "Rap & Hip-Hop Musician Biographies",
  false,
  50
);

const blackPrivilege = new Book(
  "Black Privilege: Opportunity Comes to Those Who Create It",
  "Charlamagne Tha God",
  320,
  "Hardcover",
  "General Broadcasting (Books)",
  false,
  320
);

let names = book.name(names)

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

console.log("I've read ", Book, " by ", names);
console.log("I've read a total of ", stateOfEmergency[currentPage()]);
