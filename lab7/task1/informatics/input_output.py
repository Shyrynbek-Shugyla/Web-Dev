"""
Informatics.msk.ru — Input/Output, Assignment Operators
Problems A–E
"""


# Problem A: Read two numbers and print their sum
def problem_a():
    a = int(input())
    b = int(input())
    print(a + b)


# Problem B: Read two numbers and print their product
def problem_b():
    a = int(input())
    b = int(input())
    print(a * b)


# Problem C: Read a number and print its square
def problem_c():
    n = int(input())
    print(n ** 2)


# Problem D: Read three numbers and print their sum and product
def problem_d():
    a = int(input())
    b = int(input())
    c = int(input())
    print(a + b + c)
    print(a * b * c)


# Problem E: Read two numbers, swap them, and print
def problem_e():
    a = int(input())
    b = int(input())
    a, b = b, a
    print(a)
    print(b)


if __name__ == "__main__":
    print("=== Problem A: Sum of two numbers ===")
    problem_a()
