"""
Informatics.msk.ru — For Loop
Problems A–M
"""


# Problem A: Print numbers from 1 to N
def problem_a():
    n = int(input())
    for i in range(1, n + 1):
        print(i)


# Problem B: Print numbers from N down to 1
def problem_b():
    n = int(input())
    for i in range(n, 0, -1):
        print(i)


# Problem C: Sum of numbers from 1 to N
def problem_c():
    n = int(input())
    total = 0
    for i in range(1, n + 1):
        total += i
    print(total)


# Problem D: Sum of even numbers from 1 to N
def problem_d():
    n = int(input())
    total = 0
    for i in range(2, n + 1, 2):
        total += i
    print(total)


# Problem E: Factorial of N
def problem_e():
    n = int(input())
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
    print(factorial)


# Problem F: Count digits in a number
def problem_f():
    n = input().strip()
    print(len(n))


# Problem G: Sum of digits of a number
def problem_g():
    n = input().strip()
    total = sum(int(d) for d in n)
    print(total)


# Problem H: Power without using ** operator
def problem_h():
    a = int(input())
    n = int(input())
    result = 1
    for _ in range(n):
        result *= a
    print(result)


# Problem I: Print multiplication table for N
def problem_i():
    n = int(input())
    for i in range(1, 11):
        print(f"{n} * {i} = {n * i}")


# Problem J: Find minimum of N numbers
def problem_j():
    n = int(input())
    numbers = [int(input()) for _ in range(n)]
    print(min(numbers))


# Problem K: Fibonacci sequence up to N terms
def problem_k():
    n = int(input())
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print()


# Problem L: Check if a number is prime
def problem_l():
    n = int(input())
    if n < 2:
        print("NO")
    else:
        is_prime = True
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                is_prime = False
                break
        print("YES" if is_prime else "NO")


# Problem M: Reverse a number
def problem_m():
    n = input().strip()
    print(n[::-1])


if __name__ == "__main__":
    print("=== Problem A: Numbers 1 to N ===")
    problem_a()
