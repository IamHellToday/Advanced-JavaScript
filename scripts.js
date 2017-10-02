let starTree = function(row){
 for (i=1; i<=row; i++){
    let star = ''
    for(j=0; j<i; j++){
      star += '*' 
//       same as '' + * = '*'
    }
      console.log(star)
  }
}
starTree(10)
