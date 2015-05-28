import csv

csvFile = open('data.csv', 'rb')
dataset = csv.reader(csvFile)

for row in dataset:
	print row