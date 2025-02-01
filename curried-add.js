/** if receives a number it returns a new function to you
 * returns a new function
 * returns the total of all the numbers you've passed to it so far
 */
function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
        if (num === undefined) return total;
        total += num;
        return addNext;
    }

}

module.exports = { curriedAdd };
