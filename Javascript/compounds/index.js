var apiPath = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/";

var commands = {
	properties : "/property/MolecularFormula,MolecularWeight,Charge,XLogP,IUPACName/JSON",
	description : "/description/JSON",
	img : "/PNG"
};


var loadImage = function(compound){
	$('img.compoundImage').attr('src', apiPath + compound + commands.img);
}

var getCompoundDescription = function(compound){
	$.ajax({
		url : apiPath + compound + commands.description,
		type : "GET",
		success : function(res){
			var name = res.InformationList.Information[0].Title;
			var description = res.InformationList.Information[1].Description;
			$('.result h2').text(name);
			$('.result p').text(description);
		}
	});
}

var getCompoundProperties = function(compound){
	$('.loading').show();
	$.ajax({
		url : apiPath + compound + commands.properties,
		type : "GET",
		success : function(res){
			$('.noCompound').hide();
			$('.result').show();
			var data = res.PropertyTable.Properties[0];
			console.log(data);
			displayProperties(data);
		},
		error : function(res){
			$('.noCompound').show();
			$('.result').hide();
		},
		complete : function(){
			$('.loading').hide();
		},
	});
}

var displayProperties = function(data){
	$('.compoundId').text(data.CID);
	$('.molecularFormula').text(data.MolecularFormula);
	$('.molecularWeight').text(data.MolecularWeight);
	$('.charge').text(data.Charge);
	$('.iupacName').text(data.IUPACName);
	$('.xLogP').text(data.XLogP);
}

$('button.search').click(function(){
	var compoundToSearch = $('input.compoundTextbox').val();
	getCompoundProperties(compoundToSearch)
	getCompoundDescription(compoundToSearch)
	loadImage(compoundToSearch);
})
