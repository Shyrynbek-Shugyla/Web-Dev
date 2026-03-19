"""
Informatics.msk.ru — Arrays (Lists)
Problems A–G
"""


# Problem A: Read N numbers into a list and print them
def problem_a():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    print(*arr)


# Problem B: Find the maximum element in a list
def problem_b():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    print(max(arr))


# Problem C: Find the index of the maximum element
def problem_c():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    max_idx = 0
    for i in range(1, n):
        if arr[i] > arr[max_idx]:
            max_idx = i
    print(max_idx)


# Problem D: Count even numbers in a list
def problem_d():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    count = sum(1 for x in arr if x % 2 == 0)
    print(count)


# Problem E: Reverse a list
def problem_e():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    arr.reverse()
    print(*arr)


# Problem F: Shift elements of a list to the right by 1
def problem_f():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    last = arr[-1]
    for i in range(n - 1, 0, -1):
        arr[i] = arr[i - 1]
    arr[0] = last
    print(*arr)


# Problem G: Sort a list using bubble sort
def problem_g():
    n = int(input())
    arr = [int(input()) for _ in range(n)]
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    print(*arr)


if __name__ == "__main__":
    print("=== Problem A: Read and print list ===")
    problem_a()
