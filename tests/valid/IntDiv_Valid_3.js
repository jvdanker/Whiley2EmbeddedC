function f(r0, r1){//function(IntDiv_Valid_3:nat,int) -> IntDiv_Valid_3:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 2320;
            control_flow_repeat = true;
            continue outer;//goto label2320
            control_flow_pc = 2321;
            control_flow_repeat = true;
            continue outer;//goto label2321
         case 2320:
            var r4 = r0.div(r1);//div %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 2322;
            control_flow_repeat = true;
            continue outer;//goto label2322
         case 2321:
            var r5 = r1.div(r0);//div %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 2322:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(2);
            var r0 = f(r1, r2);//invoke %0 = (%1, %2) IntDiv_Valid_3:f : function(IntDiv_Valid_3:nat,int) -> IntDiv_Valid_3:nat
            var r3 = new WyJS.Integer(5);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2323:
      }
   }
}

