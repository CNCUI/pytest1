f = open("foo.txt")             
line = f.readline()    
print(line.strip())         
while line:
    print(line.strip())
    line = f.readline()
f.close()

t="";
for line in open("foo.txt"):
    t+=line.strip()
print(t)

#write
f2 = open('wrt.txt', 'w')
f2.write(t)
f2.close()