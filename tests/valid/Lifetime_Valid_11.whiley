method swap<&a>(&a:int p, &a:int q):
    int tmp = *p
    *p = *q
    *q = tmp

public export method test():
    &this:int x = new 1
    &this:int y = new 2
    swap(x,y)
    assume *x > *y