"""
Informatics.msk.ru — Conditional Statements
Problems A–E
"""


# Problem A: Determine if a number is positive, negative, or zero
def problem_a():
    n = int(input())
    if n > 0:
        print("Positive")
    elif n < 0:
        print("Negative")
    else:
        print("Zero")


# Problem B: Find the maximum of two numbers
def problem_b():
    a = int(input())
    b = int(input())
    if a > b:
        print(a)
    elif b > a:
        print(b)
    else:
        print("Equal")


# Problem C: Find the maximum of three numbers
def problem_c():
    a = int(input())
    b = int(input())
    c = int(input())
    print(max(a, b, c))


# Problem D: Determine if a year is a leap year
def problem_d():
    year = int(input())
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        print("YES")
    else:
        print("NO")


# Problem E: Sort three numbers in ascending order
def problem_e():
    a = int(input())
    b = int(input())
    c = int(input())
    nums = sorted([a, b, c])
    print(nums[0], nums[1], nums[2])


if __name__ == "__main__":
    print("=== Problem A: Positive/Negative/Zero ===")
    problem_a()
