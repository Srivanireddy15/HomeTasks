function add(n){
  console.log(n);
  const sum=function(b)
  {
    console.log(b);
    console.log(n+b);
    return add(n+b);
  }
  sum.valueOf=function()
  {
    return n;
  }
  return sum;
}