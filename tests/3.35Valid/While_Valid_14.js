function extract(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            r2 = r3;//assign %2 = %3  : int
            r1 = r2;//assign %1 = %2  : int
            while(true){//loop (%1, %4, %5, %6)
               var r4 = r0.length;//lengthof %4 = %0 : [int]
               if(WyJS.gt(r1, r4, true)){
                  control_flow_pc = 553;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r5 = new WyJS.Integer(1);
               var r6 = r1.add(r5);//add %6 = %1, %5 : int
               r1 = r6;//assign %1 = %6  : int
            }
         case 553:
            return r1;//return %1 : int
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(2);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.Integer(3);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(23);
            var r10 = r9.neg();//neg %10 = %9 : int
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(2345);
            var r13 = new WyJS.Integer(4);
            var r14 = new WyJS.Integer(5);
            var r15 = new WyJS.List([r4, r6, r7, r8, r10, r11, r12, r13, r14], new WyJS.List('int'));
            var r2 = extract(r15);//invoke %2 = (%15) While_Valid_14:extract : function([int]) -> int
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r16 = new WyJS.Integer(9);
            if(WyJS.equals(r0, r16, true)){
               control_flow_pc = 554;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 554:
      }
   }
}
