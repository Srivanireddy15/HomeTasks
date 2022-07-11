function cache(func) {
    // do your magic here
    
    var obj={};
    return function(...a)
    {
      var args=JSON.stringify(...a);
      if(obj.hasOwnProperty(args))
        return obj[args];
      else
        return obj[args]=func(...a);
    }
    
  }