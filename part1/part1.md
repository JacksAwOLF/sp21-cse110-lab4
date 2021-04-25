
## Part 1a

1. "values added: 20" will print
2. "final result: 20" will print
3. "values added: 20" will print
4. an error will occur. the result variable only exists inside the if statement code block
5. an error will occur. the code attempt to reassign the value of a const variable
6. "final result: 0" will print


## Part 1b

1. "3" will print. this is because a var declaration ignores if and for loop blocks.
2. "150" will print. same reasoning as previous question. 
3. "150" will print. you are accessing a var variable within the same function, so the value will stay there.
4. the function will return [50, 100, 150]
5. an error will be thrown. this is because a let variable only exists in its code block, and on line 12 it is accessing a let variable that was declared inside the for loop.
6. an error will occur. same reasoning as above.
7. "300" will print. this is because it is accessing a let variable within the same scope
8. the function will return [50, 100, 150]
9. error will occur. you cannot access a let variable outside its scope.
10. "3" will be printed to the screen. 
11. error will be thrown, because on line 9 there is an attempt to modify a const variable
12.
	A. student.name
	B. student["Grad Year"]
	C. student.greeting()
	D. student["Favorite Teacher"]["name"]
	E. student.courseLoad[0]
13. 
	A. 5, strings are converted to numbers
	B. 1, strings are converted to numbers
	C. 3, null is converted to 0
	D. 3, strings are converted to numbers and null is converted to 0
	E. 4, true converts to 1
	F. 0, false and null both convert to 0
	G. NaN, undefined doesn't convert into a number
	H. NaN, undefined doesn't convert into a number
14.
	A. true, '2' turns into the number 2
	B. true, after converting strings to numbers, 2<12 is true
	C. true, == comparator converts strings to numbers
	D. false, === takes in type in the comparison
	E. false, true converts to the number 1
	F. true, 2 becomes a true boolean value
15. the == operator will convert both expressions to numbers before converting them, so that '2' == 2 is true. the === will not do that, and will return false if the type mismatches.
16. look at code
17. there will be an error, because in the function modifyArray, we are modifying a constant variable, which cannot be modified.
18. look at code
19. the output is 1 3 4 2
