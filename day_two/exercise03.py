username = input("Enter your Username: \n")
password = input("Enter your Password: \n")

if len(username) < 6 or len(password) < 6:
    print("Your username or password is too short")
elif len(username) > 12 or len(password) > 12:
    print("Your username or password is too long")

confirmation = input("Confirm your password: \n")

if password == confirmation:
    print("Your passwords match!")
    if confirmation.isdigit():
        print("Can't be just digits for your password")
else:
    print("Your passwords do not match")

