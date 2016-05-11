var f = function(resolve,reject){
  $.get('http://api.icndb.com/jokes/random', {
  
  }).success(function(res){
    resolve();
  }).error(function(err){
    reject(err);
  });
};
var p = new Promise(f);

p.then(function(){console.log('resolve')}, function(){console.log('reject')});   