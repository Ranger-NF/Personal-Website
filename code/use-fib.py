import fib

end_num = int(input("Enter the number of terms to be included in fibonacci series: "))
 
for i in range(end_num):
	print(fib.fibonacci(i), end=" ")

print()
