# python

Python is a great language to start with. It has easy syntax, powerful, great community and documentation. Today we're going to use it for massive data processing.

**Note** : You might have to add python to your `PATH`. Instructions [here](http://stackoverflow.com/questions/6318156/adding-python-path-on-windows-7)

## Read in a CSV
Our first example is simply just reading in a csv and printing it out to the terminal. We'll use this code as the basis of all of our other examples.

Run Example one by typing `python ex1.py`


## Filtering
In `ex2.py` we're going to filter out rows with concentrations under 300. We're also going to make it so we can point it towards different csvs.

Try running `python ex2.py data.csv`


## Creating new CSVs
In `ex3.py` we're actually going to save the results of ex2.py into a new file. Our resultant file should have less rows than what we started with. We are also going to have you provide the name of the new file when you run this python code.

Run `python ex3.py data.csv result.csv`

## Flagging rows and advanced logic
In `ex4.py` w're going to modify the results of our file and we're going to apply some interesting logic. We're going to break our logic into individual functions to easier reading and writing. Here are our rules

	* The type has to be a Sample
	* If concentration is within the tolerence of the expected, add a new flag
	* If the sequence matches 'AATG?C', add a new flag

Also, we're using the column indexes everywhere over our code now. This can get confusing to read. So we'll store them as variables at the top. This is also nice if we ever move columns around, we only need to change the code in one place.

Run `python ex4.py data.csv result.csv`
