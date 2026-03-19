"""
HackerRank: Symmetric Difference
Topic: Sets
"""

n = int(input())
set_a = set(map(int, input().split()))
m = int(input())
set_b = set(map(int, input().split()))

symmetric_diff = sorted(set_a.symmetric_difference(set_b))
for item in symmetric_diff:
    print(item)
