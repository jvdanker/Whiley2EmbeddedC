function dup(int x) -> (int a, int b)
// Make sure returns match argument
ensures (a == x) && (b == x):
    return (x,x)

function swap(int x, int y) -> (int a, int b)
// Make sure values are swapped
ensures (x == b) && (y == a):
    //
    return y,x

function mirror(int x, int y) -> (int a, int b)
// ensure nothing changes!
ensures (x == a) && (y == b):
    return swap(y,x)

public export method test():
    //
    assert dup(1) == (1,1)
    //
    assert swap(1,2) == (2,1)
    //
    assert mirror(1,2) == (1,2)