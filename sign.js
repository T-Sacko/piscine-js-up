function sign(x){
    if(x<0){
        return -1
    }else if (x>0){
        return 1
    }
    return 0
}

function sameSign(x,y){
    if (x>0&&y>0 || x<0&&y<0 || y===x) {
        return true
    }
    return false
}