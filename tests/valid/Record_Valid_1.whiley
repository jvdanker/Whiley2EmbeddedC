type Point is { int x, int y }

function fromXY(int x, int y) -> (Point r)
ensures r.x == x && r.y == y:
    return Point{x:x, y:y}

public export method test():
    Point p = fromXY(1,2)
    //
    assert p.x == 1 && p.y == 2