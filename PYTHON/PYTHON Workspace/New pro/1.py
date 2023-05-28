import csv

with open("PYTHON/PYTHON Workspace/New pro/csv/details.csv","r",encoding="utf-8") as f:
    d1=[]
    d_1=[]
    r=csv.reader(f)
    for i in r:
        if len(str(i[2]).strip())!=0:
            d1.append(i[2])
            d_1.append(i[2].strip().lower())

with open("PYTHON/PYTHON Workspace/New pro/csv/present.csv","r",encoding="utf-8") as f:
    d2=[]
    d_2=[]
    r=csv.reader(f)
    for i in r:
        if len(str(i[1]).strip())!=0:
            d2.append(i[1])
            d_2.append(i[1].strip().lower())

with open("PYTHON/PYTHON Workspace/New pro/absent.csv","w",newline="") as f:
    c=0
    w=csv.writer(f)
    w.writerow(["S. No.","Name of Absentee"])
    for i in range(len(d_1)):
        c+=1
        j=d_1[i]
        if j not in d_2:
            w.writerow([c,d1[i]])

    print("done")
        