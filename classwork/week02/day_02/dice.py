# diceType = int(input("Choose a 6 12 or 20 sided dice. Type the number:\n"))

# import random

# def diceRoll():
#     if diceType == 6:
#         roll = random.randint(1,6)
#         print("Your roll is %s!" % roll)
#     elif diceType == 12:
#         roll = random.randint(1,12)
#         print("Your roll is %s!" % roll)
#     elif diceType == 20:
#         roll = random.randint(1,20)
#         print("Your roll is %s!" % roll)
#     elif diceType != 6 and diceType != 12 and diceType != 20:
#         print("Please input a 6, 12 or 20")

# diceRoll()

#-------------------------------------------------------------------------------------------------------------------------
class Dice():
    def __init__(self):
        pass

    def diceRoll():
        import random

        rolls = []
        count = 0
        cheats = 1
        loop = True

        def cheat():
            target = int(input("What is your target number?\n"))
            cheatRoll = random.randint(0,100)
            if cheatRoll <= 49 and target <= 20:
                if target != 20 and target != 19:
                    roll = random.randint(target, target + 2)
                    print("\nYour roll is %s!" % roll)
                    rolls.append(roll)
                elif target == 20:
                    roll = random.randint(target - 2, target)
                    print("\nYour roll is %s!" % roll)
                    rolls.append(roll)
                elif target == 19:
                    roll = random.randint(target - 2, target + 1)
                    print("\nYour roll is %s!" % roll)
                    rolls.append(roll)
            else:
                if target != 0 and target != 1:
                    roll = random.randint(target, target + 2)
                    print("\nYour roll is %s!" % roll)
                    rolls.append(roll)
                elif target == 0:
                    roll = random.randint(target, target + 2)
                    print("\nYour roll is %s!" % roll)
                    rolls.append(roll)
                elif target == 1:
                    roll = random.randint(target - 1, target + 2)
                    print("\nYour roll is %s!" % roll)   
                    rolls.append(roll)

        while loop == True:
            def averageRoll(rolls): 
                return sum(rolls) / len(rolls)

            diceType = int(input("\nChoose a 6 12 or 20 sided dice. Type 6,12,20 to play, 0 to quit, 1 for the average of your rolls, or 2 for a cheat die(Once every 10 rolls):\n"))             
            
            if diceType == 6:
                roll = random.randint(1,6)
                print("\nYour roll is %s!" % roll)
                count += 1
                rolls.append(roll)

            elif diceType == 12:
                roll = random.randint(1,12)
                print("\nYour roll is %s!" % roll)
                count += 1
                rolls.append(roll)

            elif diceType == 20:
                roll = random.randint(1,20)
                print("\nYour roll is %s!" % roll)
                count += 1
                rolls.append(roll)

            elif diceType == 1:
                average = averageRoll(rolls)
                print("Your average roll so far is %s" % average)
            elif diceType == 2 :
                if cheats != 0:
                    cheat()
                    cheats -= 1
                else:
                    print("You have 0 cheat rolls left")

            elif diceType == 0:
                print("\nYour total rolls were %s and your rolls were %s" % (count, rolls))
                loop = False

            elif diceType != 6 and diceType != 12 and diceType != 20:
                print("\nPlease input a 6, 12, 20 or the optional numbers")
            

    diceRoll()

