"""
Informatics.msk.ru — While Loop
Problems A–E
"""


# Problem A: Print numbers from 1 to N using while loop
def problem_a():
    n = int(input())
    i = 1
    while i <= n:
        print(i)
        i += 1


# Problem B: Sum of digits using while loop
def problem_b():
    n = int(input())
    total = 0
    n = abs(n)
    while n > 0:
        total += n % 10
        n //= 10
    print(total)


# Problem C: Reverse a number using while loop
def problem_c():
    n = int(input())
    reversed_num = 0
    temp = abs(n)
    while temp > 0:
        reversed_num = reversed_num * 10 + temp % 10
        temp //= 10
    print(reversed_num)


# Problem D: Count digits in a number using while loop
def problem_d():
    n = int(input())
    if n == 0:
        print(1)
    else:
        count = 0
        n = abs(n)
        while n > 0:
            count += 1
            n //= 10
        print(count)


# Problem E: Find GCD of two numbers (Euclidean algorithm)
def problem_e():
    a = int(input())
    b = int(input())
    while b != 0:
        a, b = b, a % b
    print(a)


if __name__ == "__main__":
    print("=== Problem A: Numbers 1 to N ===")
    problem_a()
