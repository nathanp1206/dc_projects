from classes import DarkSide
from classes import Lightsaber
from classes import Clone
from classes import DC15, DC15X, DC17M
from classes import Jedi
from classes import Droid


class Dooku(DarkSide):
    def __init__(self):
        self.lightsaberColor = "Red"
        self.weaponType = "Ranged"
        self.healthLeft = 1000

class Stormtrooper(Clone):
    def __init__(self):
        print("We're just clones, sir.")
        self.weaponType = "Ranged"
        self.healthLeft = 1000

class Droids(Droid):
    def __init__(self):
        print("Roger, roger.")
        self.weaponType = "Ranged"

class Obi(Jedi):
    def __init__(self):
        self.lightsaberColor = "Blue"
        self.race = "Human"
        self.weaponType = "Melee"
        self.healthLeft = 1000

class Mace(Jedi):
    def __init__(self):
        self.lightsaberColor = "Purple"
        self.race = "Korunnai"
        self.weaponType = "Melee"
        self.healthLeft = 1000

class Kit(Jedi):
    def __init__(self):
        self.lightsaberColor = "Green"
        self.race = "Nautolan"
        self.weaponType = "Melee"
        self.healthLeft = 1000

class Anakin(Jedi):
    def __init__(self):
        self.lightsaberColor = "Blue"
        self.race = "Human"
        self.weaponType = "Melee"
        self.healthLeft = 1000