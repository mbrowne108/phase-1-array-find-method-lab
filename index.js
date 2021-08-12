function superbowlWin(array) {
    function win(array) {
        if (array.result === 'W'){
            return array.year;
        }
    }
    array.find(win);
}