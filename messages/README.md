# Michael Morisi
# Comp 20
# Lab: Messages

## What has been correctly implemented? What has not?

Things that come to mind for correct implementation are:
* The messages display correctly after having read them in from an input .json file
* The CSS passes validation

Nothing that comes to mind could have been implemented better.

## Acknowledgements
I discussed this assignment with Joseph Campbell and Tom Rind

## Time spent
About 2 hours

## Is it possible to request the data from a different origin from using XMLHttpRequest? Why or why not?
This is not possible due to the same origin policy, which restricts the loading
of documents unless they are considered of the "same origin". Two pages have the same origin
if their protocol, port, and host are the same. XMLHttpRequest cannot be used between
different origins.