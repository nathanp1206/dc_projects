foods = [['Pizza', 'pepperoni', 'cheese', 'bread'],
['Steak', 'red meat', 'Dales Seasoning'],
['Kibbeh Nayeh', 'Top round', 'kibbeh spices (family secret)', 'cilantro', 'lemon', 'bulgar']]
count = 1
for food in foods:
    print('%s. %s has the following ingredients: \n%s\n' % (count, food[0], food[1:]))
    count += 1

# fav_foods = ['Fried Chicken', 'Steak', 'Ramen']
# ingredients = [
#     ['chicken', 'flour', 'egg'],
#     ['beef', 'salt', 'pepper', 'butter'],
#     ['noodles', 'broth', 'egg']
#     ]

# combined = dict(zip(fav_foods, ingredients))

# for food, ingredients in combined.items():
#     print('{0} has the following ingredients:'.format(food))
#     counter = 0
#     for i in ingredients:
#         print('     {0}. {1}'.format(counter+1, i))
#         counter += 1