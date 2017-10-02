let starTree = function(row){
 for (i = 0; i<row; i++){
    let star = ''
    for(j= 0; j<i; j++){
      star += '*'
    }
      console.log(star)
  }
}
starTree(7)
