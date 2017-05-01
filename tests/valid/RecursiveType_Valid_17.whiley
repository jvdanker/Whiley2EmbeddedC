

type State is ({int[] input, int pos} s)
    where (s.pos >= 0) && (s.pos <= |s.input|)

type Expr is {int num} | {int op, Expr rhs, Expr lhs} | {int[] err}

function parse(int[] input) -> Expr:
    Expr e
    State st
    e,st = parseAddSubExpr({input: input, pos: 0})
    return e

function parseAddSubExpr(State st) -> (Expr e, State nst):
    return {num: 1}, st

public export method test() :
    Expr e = parse("Hello")
    assume e == {num:1}

