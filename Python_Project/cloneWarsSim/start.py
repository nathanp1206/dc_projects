from menus import Opening, Attack, CharSelection, Selection
from characters import Obi, Anakin, Kit, Mace, Stormtrooper, Dooku
from battleOfGeonosis import Geonosis, Damage, Health


selection = Opening()
character = Selection()
battle = Geonosis(character)
# attackSelection = Attack(battle)
print('\nIts Count Dooku, attack!\n')
attackSelection = battle.menus["Attack"](battle)
damageDone = Damage(attackSelection)
healthLeft = 1000
healthLeft = Health(damageDone, healthLeft)

while healthLeft > 0:
    attackSelection = battle.menus["Attack"](battle)
    damageDone = Damage(attackSelection)
    healthLeft = Health(damageDone, healthLeft)