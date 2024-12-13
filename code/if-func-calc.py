print("\nBasic Calculator (using if-else and functions) (Cycle 2, Exp. 1b)")
print("======\n")


print("Enter the operation \n1) add\n2) subtract\n3) Multiply\n4) Divide\n5) Modulus")
operation = int(input("Select your operation [1 to 5]: "))

x = float(input("Enter first number: "))
y = float(input("Enter second number: "))

def add(a, b):
	return a + b

def subtract(a, b):
	return a - b

def multiply(a, b):
	return a * b

def divide(a, b):
	return a/b

def modulus(a, b):
	return a % b


result = 0

if operation == 1:
	result = add(x, y)
	
elif operation == 2:
	result = subtract(x, y)
	
elif operation == 3:

	result = multiply(x, y)
	
elif operation == 4:
	result = divide(x, y)
	
elif operation == 5:
	result = modulus(x, y)
else:
	result = "None. REASON: Inavlid operation (Available option numbers are: 1 to 5)"

print('\nThe result is' ,result)
