function f(r0){//function(bool) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1274;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1275;
            control_flow_repeat = true;
            continue outer;//goto label1275
         case 1274:
            var r2 = new WyJS.Integer(1);
            return r2;//return %2 : int
            control_flow_pc = 1276;
            control_flow_repeat = true;
            continue outer;//goto label1276
         case 1275:
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
         case 1276:
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
            var r1 = true;
            var r0 = f(r1);//invoke %0 = (%1) BoolIfElse_Valid_2:f : function(bool) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1277;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1277:
            var r4 = false;
            var r3 = f(r4);//invoke %3 = (%4) BoolIfElse_Valid_2:f : function(bool) -> int
            var r5 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 1278;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1278:
      }
   }
}
