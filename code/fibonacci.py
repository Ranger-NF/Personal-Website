def fibonacci(n):
	if n <= 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fibonacci(n - 1) + fibonacci(n - 2)


end_num = int(input("Enter the number of terms to be included in fibonacci series: "))

for i in range(end_num):
	print(fibonacci(i), end=" ")

print()
