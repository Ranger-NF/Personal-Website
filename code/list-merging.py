list1 = list(map(int, input("Enter the elements of first list seperated by spaces: ").split()))
list2 = list(map(int, input("Enter the elements of second list seperated by spaces: ").split()))

merged_list = list1 + list2

sorted_list = sorted(merged_list, key=lambda x: (x%2, x))

print("Merged and sorted list with even numbers followed by odd numbhers: ", sorted_list)
