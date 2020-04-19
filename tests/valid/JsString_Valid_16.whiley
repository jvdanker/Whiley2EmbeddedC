import string from js::core

type Box1 is {
    string field
} where true

type Box2 is {
    int field
} where true

function get(bool f) -> (Box1|Box2 r)
ensures f ==> (r is Box1)
ensures !f ==> (r is Box2):
    if f:
        return {field: "hello"}
    else:
        return {field: 1}

public export method test():
    Box1|Box2 bs = get(true)
    // Must be true
    assert bs is Box1
    // Let's try again
    Box1|Box2 cs = get(false)
    // Must be true
    assert !(cs is Box1)
