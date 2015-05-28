import sys
import csv

if len(sys.argv) < 2:
	print "Must provide an input file name"
	sys.exit()

if len(sys.argv) < 3:
	print "Must provide an output file name"
	sys.exit()

inputFilename = sys.argv[1]
outputFilename = sys.argv[2]

csvWriter = csv.writer(open(outputFilename, 'wb'))
dataset = csv.reader(open(inputFilename, 'rb'))

for rowNumber, row in enumerate(dataset):
	#Just write the first row to the file
	if rowNumber == 0:
		csvWriter.writerow(row)
	else:
		concetration = float(row[5])
		if concetration > 300:
			csvWriter.writerow(row)
