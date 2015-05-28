
//This is the first part of the address to the PubChem API
var apiPath = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/";

//Here are different 'ends' to the address we can call
var commands = {
	properties : "/property/MolecularFormula,MolecularWeight,Charge,XLogP,IUPACName/JSON",
	description : "/description/JSON",
	img : "/PNG"
};

//example address for caffeine
// http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/caffeine/description/JSON



var loadImage = function(compound){
	//Changes the 'source', where the browser loads the image from, to what the API gives u
	$('img.compoundImage').attr('src', apiPath + compound + commands.img);
}

var getCompoundDescription = function(compound){
	$.ajax({
		url : apiPath + compound + commands.description,
		type : "GET",
		success : function(res){
			//Updates our title and description elements with the result of asking the API
			// for the compoound description data
			var name = res.InformationList.Information[0].Title;
			var description = res.InformationList.Information[1].Description;
			$('.result h2').text(name);
			$('.result p').text(description);
		}
	});
}

var getCompoundProperties = function(compound){
	$('.loading').show(); //Shows the little spinner by the search bar
	$.ajax({
		url : apiPath + compound + commands.properties,
		type : "GET",
		success : function(res){
			//If we find the compound, hide error messages, and update the UI

			$('.noCompound').hide();
			$('.result').show();
			var data = res.PropertyTable.Properties[0];
			console.log(data);
			displayProperties(data);
		},
		error : function(res){
			//if we run into an error with the request, show a message to the user

			$('.noCompound').show();
			$('.result').hide();
		},
		complete : function(){
			$('.loading').hide(); //When the request is done, either success or error, hide the spinner
		},
	});
}

var displayProperties = function(data){

	//go through each element and update it's text with the data from the API
	$('.compoundId').text(data.CID);
	$('.molecularFormula').text(data.MolecularFormula);
	$('.molecularWeight').text(data.MolecularWeight);
	$('.charge').text(data.Charge);
	$('.iupacName').text(data.IUPACName);
	$('.xLogP').text(data.XLogP);
}

//This function here will run when the user clicks the search button
$('button.search').click(function(){
	var compoundToSearch = $('input.compoundTextbox').val(); //get what the user typed in as a string

	//pass this string to these functions to run
	getCompoundProperties(compoundToSearch)
	getCompoundDescription(compoundToSearch)
	loadImage(compoundToSearch);
})
