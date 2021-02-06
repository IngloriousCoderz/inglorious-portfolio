  a     b       a || b
true    true    true
true    false   true
false   true    true
false   false   false

  a     b        a && b
true    true     true
true    false    false
false   true     false
false   false    false

  a      !a
true     false
false    true

  a     b       a + b
  1     1       2 -> true
  1     0       1 -> true
  0     1       1 -> true
  0     0       0 -> false

  a     b       a * b
  1     1       1 -> true
  1     0       0 -> false
  0     1       0 -> false
  0     0       0 -> false

  a    1 - a
  1    0
  0    1

a && (b || c) && d
a * (b + c) * d
DeMorgan Laws:
- !(a || b) === !a && !b
- !(a && b) === !a || !b