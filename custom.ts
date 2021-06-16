
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
enum Cabinet1 {
    
}

/**
 * Josiahs blocks
 */
//% weight=100 color=#6ec2ff icon="ッ"
namespace custom {
    /**
     * Export wether something is less or greater then
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function FindIsGreaterOrLess (_1: number, _2: number) {
    let ToReturn;
    if (_1 > _2) {
    	ToReturn = "greater"
    } else {
        ToReturn = "less"	
    }
    return ToReturn;
 }
}
