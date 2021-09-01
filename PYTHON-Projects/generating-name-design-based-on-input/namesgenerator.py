giveninput=input("Enter your name")
outlist={}
for idn in range(65,91):
    for _ in range(1):
        outlist[chr(idn)]=([[" " for i in range(7)] for j in range(9)])

def printletter(giveninputupper):
    index=0
    for r in range(9):
        for c in range(7):
            print(outlist[index][r][c],end=" ")
            index+=1
        print()
                
printletter(giveninput.upper())

for each_char in giveninput.upper():
    if each_char=="A":
        for r in range(9):
            for c in range(7):
                if ((r==0 or r==3) and (c>0 and c<4)) or ((c==0 or c==4) and (r>0 and r<=6)):
                    outlist[each_char][r][c]="*"
    elif each_char=="B":
        for r in range(7):
            for c in range(5):
                if ((r==0 or r==3 or r==6) and (c>0 and c<4)) or (c==0) or ((c==4) and (r>0 and r<6 and r!=3)):
                    outlist[each_char][r][c]="*"
    elif each_char=="C":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=0) or (r==6 and c!=0)) or (c==0 and r!=0 and r!=6):
                    outlist[each_char][r][c]="*"
    elif each_char=="D":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=4) or (r==6 and c!=4)) or (c==0 )or (c==4 and r!=0 and r!=6):
                    outlist[each_char][r][c]="*"            
    elif each_char=="E":
        for r in range(7):
            for c in range(5):
                if ((r==0 or r==6 or r==3)) or (c==0 ):
                    outlist[each_char][r][c]="*"  
    elif each_char=="F":
        for r in range(7):
            for c in range(5):
                if ((r==0 or r==3)) or (c==0 ) or (r==6 and c==0):
                    outlist[each_char][r][c]="*" 
    elif each_char=="G":
        for r in range(7):
            for c in range(5):
                if (r==0 and c!=0) or (c==0 and (0<r<6)) or (r==6 and c!=0) or (c==4 and r>2) or (r==3 and c>2):
                    outlist[each_char][r][c]="*"
    elif each_char=="H":
        for r in range(7):
            for c in range(5):
                if (r==3) or (c==0) or c==4:
                    outlist[each_char][r][c]="*"
    elif each_char=="I":
        for r in range(7):
            for c in range(5):
                if (r==0 or r==6 or c==2):
                    outlist[each_char][r][c]="*"
    elif each_char=="J":
        for r in range(7):
            for c in range(5):
                if (r==6 and c!=4 and c!=0) or (c==4 and r!=6) or (r==5 and c==0) :
                    outlist[each_char][r][c]="*"
    elif each_char=="K":
        for r in range(7):
            for c in range(5):
                if  (c==0) or (r==3 and c==1)or (r==c==2) or (r==1 and c==3) or (r==0 and c==4)or (r==6 and c==4) or (r==5 and c==3)or (r==4 and c==2):
                    outlist[each_char][r][c]="*"
                    
    elif each_char=="L":
        for r in range(7):
            for c in range(5):
                if  (c==0) or (r==6):
                    outlist[each_char][r][c]="*"
    elif each_char=="M":
        for r in range(7):
            for c in range(5):
                if  (c==0 and r<6) or (c==4 and r<6) or (r==(c) and (r<3)) or (c==2 and r==2) or (c==3 and r==1) :
                    outlist[each_char][r][c]="*"
        
    elif each_char=="N":
        for r in range(7):
            for c in range(5):
                if  (c==0 and r<6) or (c==4 and r<6) or (r==(c+1)):
                    outlist[each_char][r][c]="*"
    elif each_char=="O":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=0 and c!=4) or (r==6 and c!=0 and c!=4)) or (c==0 and r!=0 and r!=6) or (c==4 and r!=0 and r!=6):
                    outlist[each_char][r][c]="*"
    elif each_char=="P":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=0 and c!=4) or (r==3 and c!=0 and c!=4)) or (c==0 and r!=0 and r!=6) or (c==4 and r!=0 and r<3):
                    outlist[each_char][r][c]="*"
    elif each_char=="Q":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=0 and c!=4) or (r==4 and c!=0 and c!=4)) or (c==0 and r!=0 and r<4) or (c==4 and r!=0 and r<4) or (r==5 and c==4) or (r==3 and c==2):
                    outlist[each_char][r][c]="*"
    elif each_char=="R":
        for r in range(7):
            for c in range(5):
                if ((r==0 and c!=0 and c!=4) or (r==3 and c!=0 and c!=4)) or (c==0 and r!=0) or (c==4 and r!=0 and r!=3) :
                    outlist[each_char][r][c]="*"
    elif each_char=="S":
        for r in range(7):
            for c in range(5):
                if ((r==6 and c!=0 and c!=4) or (r==0 and c!=0 and c!=4) or (r==3 and c!=0 and c!=4)) or (c==0 and r!=0 and r!=3 and r!=4 and r!=6) or (c==4 and r>3 and r!=6) or (c==4 and r==1) :
                    outlist[each_char][r][c]="*"
    elif each_char=="T":
        for r in range(7):
            for c in range(5):
                if (r==0 or c==2):
                    outlist[each_char][r][c]="*"
    elif each_char=="U":
        for r in range(7):
            for c in range(5):
                if ((r==6 and c!=4 and c!=0)) or (c==0 and r!=6) or (c==4 and r!=6):
                    outlist[each_char][r][c]="*"
    elif each_char=="V":
        for r in range(7):
            for c in range(7):
                if (r==0 and c==0) or (r==0 and c==6) or (0<r<4 and c==0) or (0<r<4 and c==6) or (r==4 and c==1) or (r==4 and c==5) or (r==5 and c==2) or (r==5 and c==4) or (r==6 and c==3):
                    outlist[each_char][r][c]="*"
    elif each_char=="W":
        for r in range(7):
            for c in range(7):
                if (r==c and r!=1 and r!=2) or (r==3 and c==3)or (r==4 and c==2)or (r==5 and c==1)or (c==0)or (c==6):
                    outlist[each_char][r][c]="*"
    elif each_char=="X":
        for r in range(7):
            for c in range(7):
                if (r==c) or (r==1 and c==5) or (r==2 and c==4)or (r==3 and c==3)or (r==4 and c==2)or (r==5 and c==1)or (r==6 and c==0)or (r==0 and c==6):
                    outlist[each_char][r][c]="*"
    elif each_char=="Y":
        for r in range(7):
            for c in range(7):
                if (r==0 and c==0) or (r==1 and c==1) or (r==2 and c==2) or (r==3 and c==3) or (r==2 and c==4)or (r==1 and c==5) or (r==0 and c==6) or (r>2 and c==3):
                    outlist[each_char][r][c]="*"
    elif each_char=="Z":
        for r in range(7):
            for c in range(7):
                if (r==0 or r==6) or (r==1 and c==5) or (r==2 and c==4)or (r==3 and c==3)or (r==4 and c==2)or (r==5 and c==1)or (r==6 and c==0):
                    outlist[each_char][r][c]="*"