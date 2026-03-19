def string_times(str, n):
    return str * n


def front_times(str, n):
    return str[:3] * n


def string_bits(str):
    return str[::2]


def string_splosion(str):
    result = ""
    for i in range(len(str) + 1):
        result += str[:i]
    return result


def last2(str):
    if len(str) < 2:
        return 0
    last = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i + 2] == last:
            count += 1
    return count


def array_count9(nums):
    return nums.count(9)


def array_front9(nums):
    for i in range(min(4, len(nums))):
        if nums[i] == 9:
            return True
    return False


def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False


def string_match(a, b):
    shorter = min(len(a), len(b))
    count = 0
    for i in range(shorter - 1):
        if a[i:i + 2] == b[i:i + 2]:
            count += 1
    return count


if __name__ == "__main__":
    print(string_times("Hi", 2))       # HiHi
    print(front_times("Chocolate", 2))  # ChoCho
    print(string_bits("Hello"))         # Hlo
    print(string_splosion("Code"))      # CCoCodCode
    print(last2("hixxhi"))              # 1