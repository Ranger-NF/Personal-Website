import numpy as np

arr = np.array([1, 2, 3])
print("Original array: ", arr)

arr = np.append(arr, 6)
print("Array after appending 6: ", arr)

arr = np.append(arr, [7, 8, 9])
print("Array after appending 7, 8 and 9: ", arr)

arr = np.delete(arr, 2)
print("Array after removing the element at index 2: ", arr)

arr = np.delete(arr, [0, 1])
print("Array after removing the element at indices 0 and 1: ", arr)

