def factorial(num):
	if num == 0 or num == 1:
		return 1
	else:
		return num * factorial(num - 1)


num_for_fact = int(input("Enter the number to find the factorial of: "))

result = factorial(num_for_fact)

print(f"The factorial of {num_for_fact} is {result}")
