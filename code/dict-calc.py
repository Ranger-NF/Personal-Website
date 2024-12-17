print("""Enter the operation
    1) add
    2) subtract
    3) Multiply
    4) Divide
    5) Modulus""")

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

func_dict = {
	1: add,
	2: subtract,
	3: multiply,
	4: divide,
	5: modulus
}

resulting_func = func_dict.get(operation)

if resulting_func:
	print('\nThe result is' ,resulting_func(x,y))
else:
	print('\nInavlid operation (Available option numbers are: 1 to 5)')
