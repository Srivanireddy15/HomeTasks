function partitionOn(pred, items) {
  let crct=items.filter(pred);
  //console.log(crct);
  let ncrct=items.filter(x => !pred(x));
  //console.log(ncrct);
  items.splice(0,items.length,...ncrct,...crct);
  return ncrct.length;
}