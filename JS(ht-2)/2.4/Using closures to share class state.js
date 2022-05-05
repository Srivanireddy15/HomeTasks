var Cat = (function () {
  // ... your code here.
   
   const cat_weights=[];
   const constructor=function(name,weight)
   {
     if(!name || !weight)
       {
         throw Error("invalid parameters");
       }
     else
       {
         Object.defineProperty(this,'name',{get : () =>name});
         Object.defineProperty(this,'weight',{get : () =>weight,set : (value) => weight=value});
         cat_weights.push(this);
       }
   }
   
   constructor.averageWeight=function()
   {
     let sum=0;
     for(let i=0;i<cat_weights.length;i++)
       {
         sum=sum+cat_weights[i].weight;
       }
     return sum/cat_weights.length;
   }
   return constructor;
   
 }());
 