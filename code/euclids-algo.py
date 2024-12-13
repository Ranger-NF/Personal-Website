def greatest_com_divisor(a, b):
	if b == 0:
		return a
	return greatest_com_divisor(b, a % b)	

num1 = int(input("enter first number: "))
num2 = int(input("enter second number: "))

result = greatest_com_divisor(num1, num2)

print(f"The Greatest Common Divisor of {num1} and {num2} is {result}")
