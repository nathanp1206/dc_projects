word = input("Give me a word: \n")
letter_list = {}

for letter in word:
    if(letter in letter_list):
        letter_list[letter] += 1
    else:
        letter_list = 1

print(letter_list)

top_3 = []
for i in range(0,2):
    highest = None
    highest_value = 0
    for letter in letter_list:
        if letter_list[letter] > highest_value:
            highest_value = letter_list[letter]
            highest = letter
        print(highest, highest_value)
        del letter_list[letter]



