try:
    number = input("Input a number between 10 and 101: ")
    if(int(number) == 42):
        print("Thats a nice one")
    elif(int(number) == -1):
        print("You're a smart one")
    elif(int(number) < 10 or int(number) > 101):
        print("I said less than 101 or more than 10 moron")
    else:
        print("Well done, your number %s is within the values I gave you" % (number))
except ValueError:
    print("You did not enter a number")    
#####################################################
try:
    first_num = int(input("Number 1\n"))
    last_num = int(input("Number 2\n"))
except ValueError:
    print("You input a text")
    exit()

print("The result is %s." % (first_num/last_num))
#################################################### Extra
cont = False
while not cont:
    try:
        firstNum = int(input("Number 1\n"))
        cont = True
    except ValueError:
        print("First Number is not a number")
cont = False
while not cont:  
    try:
        secondNum = int(input("Number 2\n"))
        cont = True
    except:
        print("Second Number is not a number")

try:
    print("The result is %s." % (firstNum/secondNum))

except ZeroDivisionError:
    print("You divided by zero")