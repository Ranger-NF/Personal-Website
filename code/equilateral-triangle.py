pyramid_size = int(input("Enter the size for the equilateral pyramid: "))

spaces = (2 * pyramid_size) - 2

for i in range(1, pyramid_size + 1):
    for j in range(spaces):
        print(end=" ")
    
    spaces -= 1
    
    for k in range(1, i + 1):
        print("*", end=" ")
    
    print() # New line