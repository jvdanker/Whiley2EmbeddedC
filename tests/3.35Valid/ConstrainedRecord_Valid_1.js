function f(r0){//function(ConstrainedRecord_Valid_1:UNIT) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op}
            var r2 = new WyJS.List([r1], new WyJS.List('int'));
            return r2;//return %2 : [int]
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
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["op"], [r3], new WyJS.Type.Record(["op"], '{int op}'));
            var r2 = f(r4);//invoke %2 = (%4) ConstrainedRecord_Valid_1:f : function(ConstrainedRecord_Valid_1:UNIT) -> [int]
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.List([r5], new WyJS.List('int'));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1352;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1352:
      }
   }
}

