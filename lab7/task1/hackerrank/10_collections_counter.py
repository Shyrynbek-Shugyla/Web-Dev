"""
HackerRank: Collections.Counter()
Topic: Collections
"""

from collections import Counter

x = int(input())
shoe_sizes = Counter(map(int, input().split()))
n = int(input())

total_revenue = 0
for _ in range(n):
    size, price = map(int, input().split())
    if shoe_sizes[size] > 0:
        total_revenue += price
        shoe_sizes[size] -= 1

print(total_revenue)
