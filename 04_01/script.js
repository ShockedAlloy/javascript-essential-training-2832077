/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
 import Backpack from "./Backpack.js";

<<<<<<< HEAD
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
 
 const content = `
   <main>
     <article>
       <h1>${everydayPack.name}</h1>
       <ul>
         <li>Volume: ${everydayPack.volume}</li>
         <li>Color: ${everydayPack.color}Color:</li>
         <li>Age: ${everydayPack.age}</li>
         <li>Number of pockets: ${everydayPack.pocketNum}</li>
         <li>Left strap length: ${everydayPack.strapLengthL}</li>
         <li>Right strap length: ${everydayPack.strapLengthR}</li>
         <li>Lid status: ${everydayPack.lidOpen}</li>
       </ul>
     </article>
   </main>
 `;
 
 document.body.innerHTML = content;
 
 console.log("The everydayPack object:", everydayPack);
 console.log("The pocketNum value:", everydayPack.pocketNum);
 console.log("Days since aquired:", everydayPack.backpackAge());
 
=======
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

const content = `
  <main>
    <article>
      <h1>${everydayPack[name]}</h1>
      <ul>
        <li>Volume: ${everydayPack[volume]}</li>
        <li>Color: ${everydayPack[color]}Color:</li>
        <li>Age: ${everydayPack[age]}</li>
        <li>Number of pockets: ${everydayPack[pocketNum]}</li>
        <li>Left strap length: ${everydayPack[strapLengthL]}</li>
        <li>Right strap length: ${everydayPack[strapLengthR]}</li>
        <li>Lid status: ${everydayPack[lidOpen]}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
>>>>>>> b6553eb8de5b3f56b78ba1f3db09911aa9b4e707
