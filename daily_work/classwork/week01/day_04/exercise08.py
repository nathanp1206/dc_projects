numbers = []
number = None

while number != 0:
    number = int(input('Enter a number, if you enter 0 it will add the numbers up: \n'))
    numbers.append(number)
    print(numbers)

result = sum(numbers)
print(result)