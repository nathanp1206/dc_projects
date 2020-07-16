# class Opening():
#     def __init__(self):
def Opening():
    battles = {'Geonosis'}
    count = 1
    for battle in battles:
        print("%s. %s" % (count, battle))
        count += 1
  
    openingSelection = input("Pick a battle to start(Type the number):\n")
    return openingSelection


class CharSelection():
    from characters import Anakin, Obi, Mace, Kit, Stormtrooper

    def __init__(self):
        self.character = [
            'Anakin Skywalker',
            'Obi-Wan Kenobi',
            'Mace Windu',
            'Kit Fisto',
            'StormTrooper'
        ]
        self.count = 1
        for self.characters in self.character:
            print("%s. %s" % (self.count, self.characters))
            self.count += 1
    
        self.characterSelection = input("Pick a Character(Type the number):\n")
        if self.characterSelection == '1':
            print('You selected Anakin')
        elif self.characterSelection == '2':
            print('You selected Obi')
        elif self.characterSelection == '3':
            print('You selected Mace')
        elif self.characterSelection == '4':
            print('You selected Kit')
        elif self.characterSelection == '5':
            print('You selected StormTrooper')

def Attack(battle):
    weaponType = battle.character.weaponType

    attacks = []
    if weaponType == "Ranged":
        attackChoices = [
            'Shoot',
            'Dodge'
        ]
        attacks.extend(attackChoices)
    elif weaponType == "Melee":
        attackChoices = [
        'Chop',
        'Dodge',
        'Slash',
        'Lunge',
        'Block'
        ]
        attacks.extend(attackChoices)
    count = 1
    for attack in attacks:
        print("%s. %s" % (count, attack))
        count += 1
    attackSelection = input("Pick an Attack(Type the number):\n")
    return attackSelection

def Selection():
    from menus import CharSelection
    from characters import Obi, Anakin, Mace, Kit, Stormtrooper

    character = CharSelection().characterSelection

    if character == '1':
        character = Anakin()
    elif character == '2':
        character = Obi()
    elif character == '3':
        character = Mace()
    elif character == '4':
        character = Kit()
    elif character == '5':
        character = Stormtrooper()
    return character