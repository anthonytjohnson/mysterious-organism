// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(object) {
      const common = this.dna.reduce((acc, curr, id, array) => {
        if (array[id] === object.dna[id]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const sharedPercentage = ((common / this.dna.length).toFixed(2) * 100);
      console.log(`Specimen ${this.specimenNum} and Specimen ${object.specimenNum} have ${sharedPercentage}% DNA in common`)
    },
    willLikelySurvive() {
      const survivalDNA = this.dna.filter(el => el === "C" || el === "G");
      return survivalDNA.length / this.dna.length >= 0.6;
    }
  }
}

const goodSpecimens = [];
let counter = 0;
while (goodSpecimens.length < 30) {
  let newSpec = pAequorFactory(counter, mockUpStrand());
  if (newSpec.willLikelySurvive()) {
    goodSpecimens.push(newSpec);
  }
  counter += 1;
}








