function sign(x){
   return x<0 ? -1 : (x>0 ? 1 :0)
}

function sameSign(x,y){
   return (x>0&&y>0) || (x<0 && y<0) ||(x==0 &&y==0)
}