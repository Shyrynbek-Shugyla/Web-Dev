"""
Informatics.msk.ru — Functions
Problems A–C
"""


# Problem A: Function to check if a number is even
def is_even(n):
    return n % 2 == 0


def problem_a():
    n = int(input())
    if is_even(n):
        print("YES")
    else:
        print("NO")


# Problem B: Function to compute factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def problem_b():
    n = int(input())
    print(factorial(n))


# Problem C: Function to check if a number is prime
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


def problem_c():
    n = int(input())
    if is_prime(n):
        print("YES")
    else:
        print("NO")


if __name__ == "__main__":
    print("=== Problem A: Is Even? ===")
    problem_a()
