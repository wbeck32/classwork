Happy Numbers
===

Write a function that determines if the supplied argument is a happy number.

Take any positive integer, add the squares of its digits, rinse, repeat. If you eventually reach 1, the original number is happy; otherwise, it's inconsolable.

#### 19 is happy because

<pre>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

#### 4 is unhappy because

<pre>
4<sup>2</sup> = 16
1<sup>2</sup> + 6<sup>2</sup> = 37
3<sup>2</sup> + 7<sup>2</sup> = 58
5<sup>2</sup> + 8<sup>2</sup> = 89
8<sup>2</sup> + 9<sup>2</sup> = 145
1<sup>2</sup> + 4<sup>2</sup> + 5<sup>2</sup> = 42
4<sup>2</sup> + 2<sup>2</sup> = 20
2<sup>2</sup> + 0<sup>2</sup> = 4
// and so it repeats...
4<sup>2</sup> = 16
</pre>