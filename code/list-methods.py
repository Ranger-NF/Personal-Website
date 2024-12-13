my_list = [-6, 1, 2]
print("Original value: ", my_list)

my_list.append(3)
print("List after adding '3': ", my_list)

my_list.extend([4, 9, 5])
print("List after adding [4, 9, 5]: ", my_list)

my_list.remove(9)
print("List after removing the element '9': ", my_list)

my_list.pop(0)
print("List after removing the element at index at 0: ", my_list)

del my_list[0: 2]
print("List after removing first 2 elements: ", my_list)

