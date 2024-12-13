print("\nBasic Calculator (using if-else only) (Cycle 2, Exp. 1a)")
print("======\n")

print("Enter the operation \n1) add\n2) subtract\n3) Multiply\n4) Divide\n5) Modulus")
operation = int(input("Select your operation [1 to 5]: "))

x = float(input("Enter first number: "))
y = float(input("Enter second number: "))

result = 0

if operation == 1:
	result = x + y
elif operation == 2:
	result = x - y
elif operation == 3:
	result = x * y
elif operation == 4:
	result = x / y
elif operation == 5:
	result = x % y
else:
	result = "None. REASON: Inavlid operation (Available option numbers are: 1 to 5)"

print('\nThe result is' ,result)
