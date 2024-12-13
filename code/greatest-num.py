a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
c = int(input("Enter the third number: "))

if a > b:
	if a > c:
		print("Greatest number is:", a)
	else:
		print("Greatest number is:", c)
else:
	if b > c:
		print("Greatest number is:", b)
	else:
		print("Greatest number is:", c)
