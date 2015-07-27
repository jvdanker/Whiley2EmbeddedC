function EmptyBoard(){//function() -> Method_Valid_1:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(0);
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.List([r0, r1, r2, r3, r4, r5, r6, r7, r8], new WyJS.List('int'));
            return r9;//return %9 : [int]
      }
   }
}

function numPieces(r0, r1){//function(Method_Valid_1:Board,Method_Valid_1:Piece) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            var r8 = new WyJS.Integer(0);
            r7 = r8;//assign %7 = %8  : int
            r3 = r7;//assign %3 = %7  : int
            while(true){//loop (%2, %3, %4, %9, %10, %11, %12, %13, %14, %15)
               var r9 = r0.length;//lengthof %9 = %0 : [int]
               if(WyJS.gt(r3, r9, true)){
                  control_flow_pc = 1172;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r11 = r0.getValue(r3);
               r10 = r11;//assign %10 = %11  : int
               r4 = r10;//assign %4 = %10  : int
               if(WyJS.equals(r4, r1, false)){
                  var r14 = new WyJS.Integer(1);
                  var r15 = r3.add(r14);//add %15 = %3, %14 : int
                  r3 = r15;//assign %3 = %15  : int
                  continue;
               }
               var r12 = new WyJS.Integer(1);
               var r13 = r2.add(r12);//add %13 = %2, %12 : int
               r2 = r13;//assign %2 = %13  : int
            }
         case 1172:
            return r2;//return %2 : int
      }
   }
}

function update(r0){//method(Method_Valid_1:Board) -> Method_Valid_1:Board
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(2);
            r0.setValue(r2, r3);//update %0[%2] = %3 : [int] -> [int]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(1);
            r0.setValue(r5, r6);//update %0[%5] = %6 : [int] -> [int]
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(2);
            r0.setValue(r8, r9);//update %0[%8] = %9 : [int] -> [int]
            return r0;//return %0 : [int]
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
            var r2 = EmptyBoard();//invoke %2 = () Method_Valid_1:EmptyBoard : function() -> Method_Valid_1:Board
            r1 = r2.clone();//assign %1 = %2  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r3 = update(r0);//invoke %3 = (%0) Method_Valid_1:update : method(Method_Valid_1:Board) -> Method_Valid_1:Board
            r0 = r3.clone();//assign %0 = %3  : [int]
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Integer(0);
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.List([r4, r5, r6, r7, r8, r9, r10, r11, r12], new WyJS.List('int'));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1174;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1174:
      }
   }
}

