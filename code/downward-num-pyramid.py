rows = 5

row_num = 0

for i in range(rows, 0, -1):
    row_num += 1
    
    for j in range(1, i + 1):
        print(row_num, end=" ")
        
    print()
