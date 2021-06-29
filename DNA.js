// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// returns on object specimen
const pAequorFactory = (specimenNum, dna) => ({
  specimenNum,
  dna,
  // function for mutating one random dna base
  mutate() {
    // set initial dna bases variable for not returning same DNA base
    let dnaBases = ["A", "T", "C", "G"];
    // set variable for mutated DNA
    let mutatedDna = [...this.dna];
    // get random index from dna, set to variable
    let randomIndex = Math.floor(Math.random() * this.dna.length);
    // deletes random generated DNA base from variable dnaBases
    dnaBases.splice(dnaBases.lastIndexOf(this.dna[randomIndex]), 1);
    // replacing new random dna base value to initial DNA array with randomIndex
    mutatedDna.splice(randomIndex, 1, dnaBases[Math.floor(Math.random() * 3)]);
    return mutatedDna;
  },

  // function for comparing current pAequor‘s mutated DNA with passed DNA value of another mutated pAequor
  compareDNA(secondPAequor) {
    // set new array of filtered common DNA bases at same index between two pAequor's
    const commonDna = this.dna.filter(
      (dnaBase, i) => dnaBase === secondPAequor.dna[i]
    );
    console.log(
      `Specimen #${this.specimenNum} and specimen #${
        secondPAequor.specimenNum
      } have ${((100 * commonDna.length) / this.dna.length).toFixed(
        2
      )}% DNA in common.`
    );
  },

  // returns true if 60% > are DNA bases "C" and "G"
  willLikelySurvive() {
    // sets a variable and filters through object for C ang G separatedly -> after two arrays are concated into one
    const survivalDna = this.dna
      .filter((dnaBase) => dnaBase === "C")
      .concat(this.dna.filter((dnaBase) => dnaBase === "G"));
    // set variable to get count of survival DNA in %
    const survivalCountDna = (survivalDna.length * 100) / this.dna.length;
    // returns true or false if count of survival DNA is more than 60%
    return survivalCountDna > 60 ? true : false;
  },

  // returns A if T, returns C ig G and vice versa
  complementStrand() {
    // get an array of strand
    const strand = [...this.dna];
    // switch letters
    const newStrand = strand.map((letter) => {
      switch (letter) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "C":
          return "G";
        case "G":
          return "C";
      }
    });
    return newStrand;
  },
});

// set an empty array of pAequors
const pAequorsArray = [];
// get an array of arbitrary number of pAequors
function getpAequors(numberOfpAequors) {
  for (let i = 1; i <= numberOfpAequors; i++) {
    pAequorsArray.push(pAequorFactory(i, mockUpStrand()));
  }
}

getpAequors(30);

let specimen1 = pAequorsArray[0];
let specimen2 = pAequorsArray[1];

//console.log(specimen1.dna, specimen1.mutate()); // function for mutating one random dna base
//specimen1.compareDNA(specimen2); // function for comparing current pAequor‘s mutated DNA with passed DNA value of another mutated pAequor
//console.log(specimen1.willLikelySurvive()); // returns true if 60% > are DNA bases "C" and "G"
//console.log(specimen1.complementStrand()); // returns A if T, returns C ig G and vice versa

