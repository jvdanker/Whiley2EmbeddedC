function index(r0, r1){//function(Access_Valid_1:list,int) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.getValue(r1);
            return r2;//return %2 : any
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
            var r7 = new WyJS.Integer(0);
            var r6 = index(r0, r7);//invoke %6 = (%0, %7) Access_Valid_1:index : function(Access_Valid_1:list,int) -> any
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 487;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 487:
            var r10 = new WyJS.Integer(1);
            var r9 = index(r0, r10);//invoke %9 = (%0, %10) Access_Valid_1:index : function(Access_Valid_1:list,int) -> any
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 488;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 488:
            var r13 = new WyJS.Integer(2);
            var r12 = index(r0, r13);//invoke %12 = (%0, %13) Access_Valid_1:index : function(Access_Valid_1:list,int) -> any
            var r14 = new WyJS.Integer(3);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 489;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 489:
      }
   }
}
