class Stack(object):
    #init constructor
    def __init__(self):
        self.stack=[]
        self.numofitems=0
    
    #checking  empty
    def isEmpty(self):
        return self.stack==[]

    #pushing element
    def push(self,data):
        self.stack.insert(self.numofitems,data)
        self.numofitems+=1
        print('{} pushed'.format(data))

    #poping element
    def pop(self):
        self.numofitems-=1
        data=self.stack.pop(self.numofitems)
        print('{} poped'.format(data))

    def stacksize(self):
        return len(self.stack)
    
    def printstack(self):
        print(self.stack)



#testing

if __name__=='__main__':
    stackobj= Stack()
    stackobj.push(5)
    stackobj.push(8)     
    stackobj.pop() 
    stackobj.push(8)   
    stackobj.push(3)  
    stackobj.printstack()     
    stackobj.pop() 
    stackobj.pop() 
    stackobj.printstack()     

    

    