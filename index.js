function superbowlWin(array) {
    const sbWin = array.find(object => object.result === 'W');
    return (!!sbWin ? sbWin.year : undefined)
}