function matchStart (term, text) 
{
	return text.toUpperCase().indexOf(term.toUpperCase()) == 0
}

function submitForm()
{
	var prefix = document.getElementsByClassName('prefix')[0].value;
	var number = document.getElementsByClassName('number')[0].value;
	if(isNaN(number) == false)
	{
		var search = prefix.toUpperCase() + '  ' + number;
		document.getElementById('tipue_search_input').value = '" ' + search + '"';
		document.getElementById('field').submit();
	}
}

function overlay() 
{
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function help() 
{
	el = document.getElementById("help");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function creditSearch()
{
	var prefix = document.getElementsByClassName('credit-prefix')[0].value;
	var credit = document.getElementsByClassName('credit-input')[0].value;
	var search = prefix.toLowerCase() + '-credits=' + credit;
	document.getElementById('tipue_search_input').value = '"' + search + '"';
	document.getElementById('field').submit();
}

function updateCourseCartCount()
{
	var cookies = document.cookie;
	var count = 0;
	for (i of cookies.split(';'))
	{
		var cookie = i.split(',');
		if (cookie[0].indexOf('-add-') != -1)
		{
			count += 1;
		}
	}
	document.getElementById('course-cart').innerHTML = 'Course Cart (' + count + ')';
}