

function reverse([int] input) -> {int=>int}:
    {int=>int} rs = {=>}
    for i in 0 .. |input|:
        int c = input[i]
        rs[c] = i
    return rs

public export method test() -> void:
    {int=>int} xs = reverse("abcdefghijklmnopqrstuvwxyz")
    assume xs == {97=>0, 98=>1, 99=>2, 100=>3, 101=>4, 102=>5, 103=>6, 104=>7, 105=>8, 106=>9, 107=>10, 108=>11, 109=>12, 110=>13, 111=>14, 112=>15, 113=>16, 114=>17, 115=>18, 116=>19, 117=>20, 118=>21, 119=>22, 120=>23, 121=>24, 122=>25}

