print("""Calculator
Operations: +,-,*,/,%""")

operation=input("Enter your choice[+,-,*,/,%]:")
a=int(input("Enter the first number:"))
b=int(input("Enter the second number:"))

match operation:
 case "+":
  print(a + b)
 case "-":
  print(a - b)
 case "*":
  print(a * b)
 case "/":
  print(a / b)
 case "%":
  print(a % b)
