  console.log('q1');

for (let x = 0; x<=100 ; x++){
    if (( 0 == x%3 ) && ( 0 == x%5) ){
        console.log("fizzbuzz" + " " + x);
    }
    else if (0 == x%5 ) {
        console.log("buzz" + " " + x);

    }
   else if ( 0 == x%5 ) {
        console.log("buzz" + " " + x );
    }else{
        console.log(x);
    }
}