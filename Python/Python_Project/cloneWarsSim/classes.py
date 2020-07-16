class Clone():
    def __init__(self):
        self.health = 150
        self.defence = 15
        self.attack = 15

class DarkSide():
    def __init__(self):
        self.health = 1000
        self.classType = "Melee"
        self.defence = 100
        self.attack = 100

class Jedi():
    def __init__(self):
        self.health = 1000
        self.classType = "Melee"
        self.defence = 100
        self.attack = 100

class Droid():
    def __init__(self):
        self.health = 100
        self.classType = "Ranged"
        self.defence = 10
        self.attack = 10

class Lightsaber():
    def __init__(self):
        self.classType = "Melee"
        self.chop = 60
        self.block = 0
        self.slash = 100
        self.lunge = 85
    


class Blaster():
    def __init__(self):
        self.classType = "Ranged"

class E5(Blaster):
    def __init__(self):
        self.shot = 60
        #Droids

class DC15(Blaster):
    def __init__(self):
        self.shot = 60
        #Republic Troopers

class DC15X(Blaster):
    def __init__(self):
        self.shot = 100
        #Sniper

class DC17M(Blaster):
    def __init__(self):
        self.shot = 70
        #Clone Commandos