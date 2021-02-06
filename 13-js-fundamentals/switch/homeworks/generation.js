/* bobby1 */
let year = +prompt("To check how the generation you are born in is called, please add year of birth (1883 - 2021)");
switch(true)
{
case year >= 1883 && year <= 1900:
alert("Lost Generation")
break;
case year >= 1901 && year <= 1927:
alert("Greatest generation")
break;
case year >= 1928 && year <= 1945:
alert("Silent Generation")
break;
case year >= 1946 && year <= 1964:
alert("Baby Boomers")
break;
case year >= 1965 && year <= 1980:
alert("Generation X")
break;
case year >= 1981 && year <= 1996:
alert("Millenials")
break;
case year >= 1997 && year <= 2009:
alert("Zoomers")
break;
case year >= 2010 && year <= 2012:
alert("Zoomers and Generation Alpha overlap here")
break;
case year >= 2013 && year <= 2021:
alert("Generation Alpha")
break;
default: 
alert("Invalid input")
}
