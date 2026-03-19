def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)


def big_diff(nums):
    return max(nums) - min(nums)


def centered_average(nums):
    nums_sorted = sorted(nums)
    return sum(nums_sorted[1:-1]) // (len(nums) - 2)


def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total


def sum67(nums):
    total = 0
    in_block = False
    for n in nums:
        if n == 6:
            in_block = True
        elif in_block and n == 7:
            in_block = False
        elif not in_block:
            total += n
    return total


def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False


if __name__ == "__main__":
    print(count_evens([2, 1, 2, 3, 4]))  # 3
    print(big_diff([10, 3, 5, 6]))        # 7
    print(centered_average([1, 2, 3, 4, 100]))  # 3
    print(sum13([1, 2, 2, 1]))            # 6
    print(sum13([1, 1, 13, 2]))           # 2
    print(sum67([1, 2, 2]))               # 5
    print(has22([1, 2, 2]))               # True