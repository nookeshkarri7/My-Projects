class Node():
    def __init__(self,d=None):
        self.data=d
        self.nxt_node=None

    def getnxt(self):
        return self.nxt_node
    
    def set_nxt(self,n):
        self.nxt_node=n

    def get_data(self):
        return self.data
    
    def set_nxt(self,d):
        self.data=d

class LinkedList():
    def __init__(self):
        self.head=None
        self.size=0
    
    def adddata(self,d):
        temp=Node(d)
        self.size+=1
        while(temp):
            print(temp.data)
            temp=temp.nxt_node

    

obj1=LinkedList()
obj1.adddata(5)
obj1.adddata(9)
obj1.adddata(89)
obj1.adddata(99)
obj1.adddata(97)
print(obj1.size)



