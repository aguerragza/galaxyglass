<!DOCTYPE html>
<html>
	<head>
		
		

	</head>

	<body>
		<div>
			<input id="vidrio" type="text" />
			<input id="metros2" type="text" />
			<input type="button" onclick= "multiply()" value="multiply" />
			
		</div>
<script type="text/javascript">
			var vidrio,metros2,result;
function setValues()
{
vidrio = Number(document.getElementById('vidrio').value);
metros2 = Number(document.getElementById('metros2').value);
}
window.onload = function multiply()

	setValues();
	result = vidrio+metros2;
	window.alert("My name is George. Welcome!"+result)
	
}



		</script>
	</body>

</html

