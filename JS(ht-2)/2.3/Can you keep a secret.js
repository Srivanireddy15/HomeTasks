function createSecretHolder(secret) {
  var obj={
 getSecret : function() {
    return secret;
},
  setSecret : function(n) {
    secret = n;
  }
}
  return obj;
}