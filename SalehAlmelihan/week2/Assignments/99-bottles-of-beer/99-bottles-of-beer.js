// Assignment 1: 99-bottles-of-beer

/** Write a script that prints the lyrics to “99 Bottles of Beer on the Wall” in the terminal. If you’re unfamiliar with the song, you can find the lyrics here
Make sure your program can handle both singular and plural cases (i.e. both “100 bottles of beer” and “1 bottle of beer”).
**/


/**
 * @author Saleh Almelihan <saleh.melinan@gmail.com>
 */

/**---------------------------------------------------Assignment(1) Solution---------------------------------------------------------------**/


for (i=99; i>=0; i--){
    if (i>1){
        // this is to print the first part when it's plural
        console.log(i + " bottles of beer on the wall, "+ i +" bottles of beer.");
    }
    else if (i==1){
        // this is to print the first part when it's singular
        console.log(i + " bottle of beer on the wall, "+ i +" bottle of beer.");
    }
    else if (i==0){
        // this is to print the first part when it's has zero value
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
    }
    for(j=1; j<2; j++){
        k = i-j
        if (k>1){
            // this is to print the second part when it's plural
            console.log("Take one down and pass it around, "+ k +" bottles of beer on the wall.");
        }
        else if (k==1){
            // this is to print the second part when it's singular
            console.log("Take one down and pass it around, "+ k +" bottle of beer on the wall.");
        }
        else if (k==0){
            // this is to print the second part when it's zero value
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        else if (k==-1){
            // this is to print the last part of the song
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        
    }
}



/**----------------------------------------------------------------------------------------------------------------------------**/