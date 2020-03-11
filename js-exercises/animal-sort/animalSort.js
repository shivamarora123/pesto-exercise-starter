const animalSort = animals => {
  return  animals.sort((animalFirst,animalSecond)=>{
   if(animalFirst.numberOfLegs==animalSecond.numberOfLegs)
     return animalFirst.name.localeCompare(animalSecond.name)
   
     return animalFirst.numberOfLegs-animalSecond.numberOfLegs
 })
};
export { animalSort };
