//Object Warrior Stats

function Warrior(S,D,N){

this.strength = S;
this.defense = D;
this.name = N;
this.stats =function(){
  console.log(this.name +"has a current streght of" + this.strength);
  console.log(this.name + "has a current defense of"+ this.defense);
  };
}

function main(){

let Knight= newWarrior(6,4,"Knight");
console.log(Knight);
}
