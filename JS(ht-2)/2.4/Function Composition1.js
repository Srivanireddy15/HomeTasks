const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);



function compose() {
    // Your solution
    
    let args=Array.from(arguments).reverse();
    return function(x)
    {
      for(let i=0;i<args.length;i++)
        {
          x=args[i](x);
        }
      return x;
    }
    
  }