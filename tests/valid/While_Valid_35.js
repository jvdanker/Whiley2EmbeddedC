function lastIndexOf(r0, r1){//function([int],int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(1);
            var r8 = r7.neg();//neg %8 = %7 : int
            var r6 = r8;//assign %6 = %8  : int
            var r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19)
               var r16 = r0.length;//lengthof %16 = %0 : [int]
               if(WyJS.gt(r2, r16, true)){
                  control_flow_pc = 746;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r17 = r0[r2];
               if(r17  !=  r1){
                  var r18 = new WyJS.Integer(1);
                  var r19 = r2.add(r18);//add %19 = %2, %18 : int
                  var r2 = r19;//assign %2 = %19  : int
                  continue;
               }
               var r3 = r2;//assign %3 = %2  : int
               var r18 = new WyJS.Integer(1);
               var r19 = r2.add(r18);//add %19 = %2, %18 : int
               var r2 = r19;//assign %2 = %19  : int
            }
         case 746:
            var r20 = new WyJS.Integer(1);
            var r21 = r20.neg();//neg %21 = %20 : int
            if(WyJS.equals(r3, r21, false)){
               control_flow_pc = 748;
               control_flow_repeat = true;
               continue outer;
            }
            var r22 = null;/n            return r22;//return %22 : null|int
            control_flow_pc = 749;
            control_flow_repeat = true;
            continue outer;//goto label749
         case 748:
            return r3;//return %3 : null|int
         case 749:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = [r2, r3, r4, r5, r6, r7];
            var r1 = r8;//assign %1 = %8  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r10 = new WyJS.Integer(0);
            var r9 = lastIndexOf(r0, r10);//invoke %9 = (%0, %10) While_Valid_35:lastIndexOf : function([int],int) -> int|null
            var r11 = null;/n            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 750;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 750:
            var r13 = new WyJS.Integer(1);
            var r12 = lastIndexOf(r0, r13);//invoke %12 = (%0, %13) While_Valid_35:lastIndexOf : function([int],int) -> int|null
            var r14 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 751;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 751:
            var r16 = new WyJS.Integer(2);
            var r15 = lastIndexOf(r0, r16);//invoke %15 = (%0, %16) While_Valid_35:lastIndexOf : function([int],int) -> int|null
            var r17 = new WyJS.Integer(5);
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 752;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 752:
            var r19 = new WyJS.Integer(3);
            var r18 = lastIndexOf(r0, r19);//invoke %18 = (%0, %19) While_Valid_35:lastIndexOf : function([int],int) -> int|null
            var r20 = new WyJS.Integer(3);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 753;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 753:
      }
   }
}
