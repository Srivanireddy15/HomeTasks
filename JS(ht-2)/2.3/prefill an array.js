function prefill(n, v) {
    if(typeof(n) === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
      throw new TypeError (n+ " is invalid");
    else if(n==0)
      return [];
    else
      {
        var array=new Array(n);
        array.fill(v);
        return array;
      }
  }