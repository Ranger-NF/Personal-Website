a = float(input("Enter the length of first side of the triangle: "))
b = float(input("Enter the length of second side of the triangle: "))
c = float(input("Enter the length of  third side of the triangle: "))

if a == b and b == c:
	print("Equilateral")
elif a == b or b == c or a == c:
	print("Isosceles")
else:
	print("Scalene")
