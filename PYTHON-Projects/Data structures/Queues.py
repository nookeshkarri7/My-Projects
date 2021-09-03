class Queues():
    def __init__(self):
        self.queue=[]
        
    def isEmpty(self):
        return (self.queue==[])

    def enqueue(self,data):
        self.queue.insert(0,data)
        print(self.queue)

    def dequeue(self):
        print(self.queue.pop()) 
        print(self.queue)

if __name__=="__main__":
    q=Queues()
    q.enqueue(5)  
    q.enqueue(6)  
    q.enqueue(9)  
    q.dequeue() 
    q.dequeue() 