var check=true,operand,x;

function zero() {
  if(check==true)
  {
    x=0;
    return 0;
  }
  else
  {
    check=true;
    return Math.floor(eval("0"+operand+"x"));
  }
}
function one() {
  if(check==true)
  {
    x=1;
    return 1;
  }
  else
  {
    check=true;
    return Math.floor(eval("1"+operand+"x"));
  }
}
function two() {
  if(check==true)
  {
    x=2;
    return 2;
  }
  else
  {
    check=true;
    return Math.floor(eval("2"+operand+"x"));
  }
}
function three() {
  if(check==true)
  {
    x=3;
    return 3;
  }
  else
  {
    check=true;
    return Math.floor(eval("3"+operand+"x"));
  }
}
function four() {
  if(check==true)
  {
    x=4;
    return 4;
  }
  else
  {
    check=true;
    return Math.floor(eval("4"+operand+"x"));
  }
}
function five() {
  if(check==true)
  {
    x=5;
    return 5;
  }
  else
  {
    check=true;
    return Math.floor(eval("5"+operand+"x"));
  }
}
function six() {
  if(check==true)
  {
    x=6;
    return 6;
  }
  else
  {
    check=true;
    return Math.floor(eval("6"+operand+"x"));
  }
}
function seven() {
  if(check==true)
  {
    x=7;
    return 7;
  }
  else
  {
    check=true;
    return Math.floor(eval("7"+operand+"x"));
  }
}
function eight() {
  if(check==true)
  {
    x=8;
    return 8;
  }
  else
  {
    check=true;
    return Math.floor(eval("8"+operand+"x"));
  }
}
function nine() {
  if(check==true)
  {
    x=9;
    return 9;
  }
  else
  {
    check=true;
    return Math.floor(eval("9"+operand+"x"));
  }
}

function plus() {
  check=false;
  operand="+";
}
function minus() {
  check=false;
  operand="-";
}
function times() {
  check=false;
  operand="*";
}
function dividedBy() {
  check=false;
  operand="/";
}