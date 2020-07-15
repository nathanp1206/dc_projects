# def test_func():
#     print('Do something')

# test_func()

# test_func02 = test_func

# test_func02()

# #----------------------------------------------------------------------------------------------------------------------------

# def myfunction():
#     print("Go some place")

# item = {
#     "func":myfunction
# }

# item["func"]()

#----------------------------------------------------------------------------------------------------------------------------

class Character():
    def __init__(self, name):
        #print("I've started")
        self.speed = 10
        self.position = {
            "x":0,
            "y":0
        }
        self.name = name
        self.health = 100

    def move(self, dir):
        if dir == "right":
            self.position["x"] += self.speed
        if dir == "left":
            self.position["x"] -= self.speed
        if dir == "up":
            self.position["y"] -= self.speed
        if dir == "down":
            self.position["y"] += self.speed

class Player(Character):
    def heal(self):
        self.health += 25

class Enemy(Character):
    def roll(self):
        self.position["x"] -= 25

player1 = Player("Hunter")
player1.heal()
print(player1.health)