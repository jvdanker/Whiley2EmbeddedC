function f(r0){//method([int]) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.length;//lengthof %3 = %0 : [int]
            r2 = r3;//assign %2 = %3  : int
            r1 = r2;//assign %1 = %2  : int
            var r4 = new WyJS.Integer(1);
            var r5 = r1.sub(r4);//sub %5 = %1, %4 : int
            var r6 = r0.getValue(r5);
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1162;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1162:
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
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.List('int'));
            r1 = r5.clone();//assign %1 = %5  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            f(r0);//invoke %(%0) ListGenerator_Valid_2:f : method([int]) -> void
      }
   }
}

