import sys
import csv
import re

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

#Column indexes
nameCol = 0
typeCol = 1
sequenceCol = 2
expectedCol = 3
tolerenceCol = 4
concentrationCol = 5
toleranceFlagCol = 6
sequenceFlagCol = 7


def addToleranceFlag(row):
	expected = float(row[expectedCol])
	tolerance = float(row[tolerenceCol])
	upper = expected + expected*tolerance
	lower = expected - expected*tolerance

	concentration = float(row[concentrationCol])

	if concentration >= lower and concentration <= upper:
		row.insert(toleranceFlagCol, 'valid')
	else:
		row.insert(toleranceFlagCol, '')
	return row

def addSequenceFlag(row):
	alleleSequence = row[sequenceCol]
	doesAlleleMatch = bool(re.match(r'AATG.C', alleleSequence))
	if(doesAlleleMatch):
		row.insert(sequenceFlagCol, 'match')
	else:
		row.insert(sequenceFlagCol, '')
	return row


def isSample(row):
	type = row[typeCol]
	if type == 'Sample':
		return True
	else:
		return False


for rowNumber, row in enumerate(dataset):
	if rowNumber == 0:
		#Add new column headers
		row.insert(toleranceFlagCol, 'Within Tolerance')
		row.insert(sequenceFlagCol, 'Valid Sequence')
		csvWriter.writerow(row)
	elif isSample(row):
		row = addToleranceFlag(row)
		row = addSequenceFlag(row)
		csvWriter.writerow(row)


