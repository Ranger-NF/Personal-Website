end_num = int(input("Enter the number up to which prime number should be found: "))


def check_prime_num(current_num):
	for j in range(2, current_num):
		if current_num % j == 0:
			return
	print(i, "is a prime number")

for i in range(2, end_num):
	check_prime_num(i)
