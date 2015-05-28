import sys
import csv

print sys.argv

#Make sure you inputed a filename
if len(sys.argv) < 2:
	print "Must provide an input file name"
	sys.exit()

inputFilename = sys.argv[1]
dataset = csv.reader(open(inputFilename, 'rb'))

for rowNumber, row in enumerate(dataset):
	# Don't process the first row, all the column names
	if rowNumber != 0:
		concetration = float(row[5])
		if concetration > 300:
			print row
