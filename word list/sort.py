def readFile(fileName):
        fileObj = open(fileName, "r") #opens the file in read mode
        words = fileObj.read().splitlines() #puts the file into an array
        fileObj.close()
        return words
yea=readFile("words.txt")
small = [x for x in yea if len(x)<6]
print(small)
input()
