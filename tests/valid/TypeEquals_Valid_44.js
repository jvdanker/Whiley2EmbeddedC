function getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$$C3$d0FQ$B6$b0(r0){//function(TypeEquals_Valid_44:imsg) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 534;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 535;
            control_flow_repeat = true;
            continue outer;//goto label535
         case 534:
            var r1 = r0.fieldLoad("msg");//fieldload %1 = %0 msg : {int[] msg}
            return r1;//return %1 : any
            control_flow_pc = 536;
            control_flow_repeat = true;
            continue outer;//goto label536
         case 535:
            if(WyJS.is(r0, new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]))){
               control_flow_pc = 537;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 538;
            control_flow_repeat = true;
            continue outer;//goto label538
         case 537:
            var r2 = r0.fieldLoad("op");//fieldload %2 = %0 op : {int op}
            return r2;//return %2 : any
            control_flow_pc = 536;
            control_flow_repeat = true;
            continue outer;//goto label536
         case 538:
            return r0;//return %0 : any
         case 536:
            return;
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
            var r1 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(69), new WyJS.Integer(76), new WyJS.Integer(76), new WyJS.Integer(79), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(79), new WyJS.Integer(82), new WyJS.Integer(76), new WyJS.Integer(68)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = new WyJS.Record(["msg"], [r1], new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r0 = getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$$C3$d0FQ$B6$b0(r2);//invoke %0 = (%2) TypeEquals_Valid_44:getMessage : function(TypeEquals_Valid_44:imsg) -> any
            var r3 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(69), new WyJS.Integer(76), new WyJS.Integer(76), new WyJS.Integer(79), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(79), new WyJS.Integer(82), new WyJS.Integer(76), new WyJS.Integer(68)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 539;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 539:
            var r5 = new WyJS.Integer(1);
            var r4 = getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$$C3$d0FQ$B6$b0(r5);//invoke %4 = (%5) TypeEquals_Valid_44:getMessage : function(TypeEquals_Valid_44:imsg) -> any
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r6, true)){
               control_flow_pc = 540;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 540:
            var r8 = new WyJS.Integer(123);
            var r9 = new WyJS.Record(["op"], [r8], new WyJS.Type.Record(["op"], [new WyJS.Type.Int()]));
            var r7 = getMessage$Z9bFa7$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$o$$C3$d0FQ$B6$b0(r9);//invoke %7 = (%9) TypeEquals_Valid_44:getMessage : function(TypeEquals_Valid_44:imsg) -> any
            var r10 = new WyJS.Integer(123);
            if(WyJS.equals(r7, r10, true)){
               control_flow_pc = 541;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 541:
            return;
      }
   }
}

