names_and_force_side = {
    'han':'grey',
    'yoda':'light',
    'luke':'light',
    'vader':'dark',
    'greivous':'dark',
    'maul':'dark'
}
print(names_and_force_side)

dark = 'dark'
names_and_force_side = {
    'han':['grey'],
    'yoda':['light'],
    'luke':['light'],
    'vader':['dark'],
    'grievous':dark,
    'maul':'dark'
}
print(names_and_force_side)

falcon_parts = {
    "Extras":[]
    "Armament": []
    
}

for key in falcon_parts:
    print(key)

if 'Extras' in falcon_parts:
    print('Yup')
