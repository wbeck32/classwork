Code Challenge: Bulb Switcher
===

Write a function that takes a number `n` (which represents both the number of light bulbs and number of rounds) and return the number of bulbs that are `on` according to the following procedure:

* All `n` bulbs are initially `off`
* You first turn `on` all bulbs
* Then you turn `off` every second bulb
* On the third round, you toggle every third bulb
* Continue incrementing through `n`
* The last round should toggle the last bulb only

Find out how many bulbs are on after `n` rounds

## Example

Given `n = 3`:

* At first, the three bulbs are `[off, off, off]`
* After first round, the three bulbs are `[on, on, on]`
* After second round, the three bulbs are `[on, off, on]`
* After third round, the three bulbs are `[on, off, off]`

Return `1`, because there is only `1` bulb `on`
