function test(r0){//function(int) -> int
   return r0;//return %0 : int
}

function main(){//function() -> void
   var r1 = 1;//const %1 = 1 : int
   var r0 = test(r1);
   var r2 = 1;//const %2 = 1 : int
   if(r0 != r2){//assert
      throw {name: 'Assert Failed', message: 'r0 !eq r2'}
   }
   var r4 = 10;//const %4 = 10 : int
   var r3 = test(r4);
   var r5 = 10;//const %5 = 10 : int
   if(r3 != r5){//assert
      throw {name: 'Assert Failed', message: 'r3 !eq r5'}
   }
}

main();
