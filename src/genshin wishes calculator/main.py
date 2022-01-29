total_wishes = 630
desired_copies = 7
rate = 0.006
pity_increase = 0.06
soft_pity = 74

# chance of getting first one on a specific wish number (no conditions around 50/50)
def calculate_single_rates():
    chance_of_win_at_specific_wish = []
    chance_of_losing_all_prev_wishes = 1
    curr_rate = rate
    for curr_wish_num in range(1, 91):
        if curr_wish_num >= soft_pity:
            curr_rate += pity_increase
            curr_rate = min(curr_rate, 1)
        chance_of_win_at_specific_wish.append(chance_of_losing_all_prev_wishes * curr_rate)
        chance_of_losing_all_prev_wishes *= 1 - curr_rate
    return chance_of_win_at_specific_wish

single_rates = calculate_single_rates()
print(*["{}: {}%".format(wish_num + 1, round(chance * 100, 6)) for wish_num, chance in enumerate(single_rates)], sep="\n")
##print(*single_rates, sep="\n")

def get_single_rate(wish_num):
    return single_rates[wish_num - 1]

memoize = [[None] * total_wishes for i in range(desired_copies)]
memoize_guaranteed = [[None] * total_wishes for i in range(desired_copies)]

def set_memoize(const, wish_num, rate):
    memoize[const][wish_num - 1] = rate

def get_memoize(const, wish_num):
    if const < 0:
        return 1
    if wish_num <= 0:
        return 0
    return memoize[const][wish_num - 1]

def set_memoize_guaranteed(const, wish_num, rate):
    memoize_guaranteed[const][wish_num - 1] = rate

def get_memoize_guaranteed(const, wish_num):
    if const < 0:
        return 1
    if wish_num <= 0:
        return 0
    return memoize_guaranteed[const][wish_num - 1];

def start():
    for const in range(0, desired_copies):
        for wish_num in range(1, total_wishes + 1):
            if wish_num > 90 and get_memoize(const - 1, wish_num - 90) >= 1:
                set_memoize_guaranteed(const, wish_num, 1)
            else:
                expected_rate = 0
                for curr_wish_num in range(1, min(91, wish_num + 1)):
                    expected_rate += get_single_rate(curr_wish_num) * get_memoize(const - 1, wish_num - curr_wish_num)
                set_memoize_guaranteed(const, wish_num, expected_rate)

        for wish_num in range(1, total_wishes + 1):
            if wish_num > 90 and get_memoize(const - 1, wish_num - 90) >= 1 and get_memoize_guaranteed(const, wish_num - 90) >= 1:
                set_memoize(const, wish_num, 1)
            else:
                expected_rate = 0
                for curr_wish_num in range(1, min(91, wish_num + 1)):
                    expected_rate += get_single_rate(curr_wish_num) * 0.5 * get_memoize(const - 1, wish_num - curr_wish_num)
                    expected_rate += get_single_rate(curr_wish_num) * 0.5 * get_memoize_guaranteed(const, wish_num - curr_wish_num)
                set_memoize(const, wish_num, expected_rate)

start()
print(*["{}: {}".format(wish_num, " | ".join([str(round(get_memoize(const, wish_num) * 100, 6)) + "%" for const in range(desired_copies)])) for wish_num in range(total_wishes, 0, -1)], sep="\n")
# print(*["{}: {}".format(wish_num, " | ".join([str(round(get_memoize_guaranteed(const, wish_num) * 100, 6)) + "%" for const in range(desired_copies)])) for wish_num in range(total_wishes, 0, -1)], sep="\n")