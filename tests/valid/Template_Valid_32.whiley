type handler<T> is function(T)->(T)

type State is {
    bool flag
}

function map<T>(handler<T> h, T v) -> (T r):
    return h(v)

function id(int x) -> (int y):
    return x

function invert(State s) -> (State r):
    return {flag: !s.flag}

public export method test():
    State s1 = {flag: true}
    State s2 = {flag: false}    
    //
    assume map<int>(&id,0) == 0
    //
    assume map<State>(&invert,s1) == s2