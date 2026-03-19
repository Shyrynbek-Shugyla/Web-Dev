"""
HackerRank: Find the Runner-Up Score!
Topic: Data Types
"""

n = int(input())
arr = list(map(int, input().split()))

arr.sort()
max_score = arr[-1]

runner_up = max(x for x in arr if x != max_score)
print(runner_up)
