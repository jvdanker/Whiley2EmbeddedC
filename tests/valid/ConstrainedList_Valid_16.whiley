

type nat is (int x) where x >= 0

function f(int[] xs) -> nat[]
requires |xs| == 0:
    return (nat[]) xs

public export method test() :
    nat[] rs = f([0;0])
    assume rs == []
