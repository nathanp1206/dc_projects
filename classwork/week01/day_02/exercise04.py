test=0
while test < 10:
    test+=1
    print(test)
    print("----------")


cv = 100
while cv > 0:
    cv -= 10
    if(cv != 50 or cv != 30):
        print("%s%% downloaded %s%% remaining" % (100-cv, cv))
