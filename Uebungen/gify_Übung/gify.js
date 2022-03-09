var opts = {
    width: 300
  };
  
  gify('out.mp4', 'out.gif', opts, function(err){
    if (err) throw err;
  });