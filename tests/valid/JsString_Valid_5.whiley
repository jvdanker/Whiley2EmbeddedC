import string from js::core

public export method test():
    // generate normal string
    int[] ascii = "hello"
    // coerce to js string
    string js = (string) ascii
    //
    assert ascii == "hello"
    assert ascii[0] == 'h'
    assert ascii[1] == 'e'
    assert ascii[2] == 'l'
    assert ascii[3] == 'l'
    assert ascii[4] == 'o'
    assert js == "hello"
    assert js[0] == 'h'
    assert js[1] == 'e'
    assert js[2] == 'l'
    assert js[3] == 'l'
    assert js[4] == 'o'
    