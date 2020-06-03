# name = input('What is your name? ')
# print("Hello, %s" % name)
############################################################################################################################################
# name = input('WHAT IS YOUR NAME? ')
# print(("HELLO, %s! YOUR NAME HAS %s LETTERS IN IT! AWESOME!" % (name.upper(), len(name))))
############################################################################################################################################
# print("Complete this madlib:\n____(name)____'s favorite subject in school is ____(subject)____.")
# name = input("What is the name?\n")
# subject = input("What is the subject?\n")
# print("Your madlib says:\n%s's favorite subject in school is %s." % (name, subject))
############################################################################################################################################
# day = int(input('Day (0-6)? '))
# if(day == 0):
#     print("%s Sunday" % day)
# elif(day == 1):
#     print("%s Monday" % day)
# elif(day == 2):
#     print("%s Tuesday" % day)
# elif(day == 3):
#     print("%s Wednesday" % day)
# elif(day == 4):
#     print("%s Thursday" % day)
# elif(day == 5):
#     print("%s Friday" % day)
# else:
#     print("%s Saturday" % day)
############################################################################################################################################
# billAmount = input('What was the total bill amount?\n')
# billAmount = float(billAmount)
# service = input('Was the service good, fair or bad?\n')
# if service == "good":
#     tipAmount = 0.2
#     tipAmount = float(tipAmount * billAmount)
# elif service == "fair":
#     tipAmount = 0.15
#     tipAmount = float(tipAmount * billAmount)
# elif service == "bad":
#     tipAmount = 0.1
#     tipAmount = float(tipAmount * billAmount)
# else:
#     print('Please enter good, bad or fair only')

# split = input('Split how many ways?\n')

# split = float(split)

# totalAmount = tipAmount + billAmount

# splitAmount = totalAmount / split

# print('Tip Amount: %s' % tipAmount)
# print('Total amount: %s' % totalAmount)
# print('Amount Per Person: %s' % splitAmount)
############################################################################################################################################
# count = 0
# choice = 'yes'

# while choice == 'yes':
#     print('You have %s coins' % count)
#     count += 1
#     choice = input('Do you want another? ')

# if choice == 'no':
#     print('Bye')
############################################################################################################################################
print('I am thinking of a number between 1 and 10.')
numberGuess = 0
count = 1
import random
number = random.randint(1, 10)
guesses = 1
playAgain = 0
plays = 1
while numberGuess != number and guesses <= 5:
    numberGuess = input('Whats the number? ')
    numberGuess = int(numberGuess)
    if numberGuess != number:
        print('Nope, try again.')
        triesLeft = 5 - guesses
        if numberGuess < number:
            print('Your guess is too low\n')
        else:
            print('Your guess is too high\n')
        print('You have %s tries left\n' % triesLeft)
    else:
        if count == 1:
            print('Congrats! You got it, it took you %s try\n' % count)
        else:
            print('Congrats! You got it, it took you %s tries\n' % count)
        playAgain = input('Would you like to play again?(Y/N) ')
        if playAgain == 'Y':
            number = random.randint(1, 10)
            numberGuess = 0
            count = 1
            guesses = 1
            plays += 1
        else:
            print('Goodbye, you played %s times' % plays)
            exit()
    count += 1
    guesses += 1