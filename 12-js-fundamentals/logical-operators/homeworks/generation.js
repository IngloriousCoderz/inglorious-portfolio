/**
 * Generation is an app that asks for the user's year of birth and
 * outputs the user's generation.
 * 
 * Possible generations:
 * 
 * - Lost Generation (1883 - 1900)
 * - Greatest Generation (1901 - 1927)
 * - Silent Generation (1928 - 1945)
 * - Baby Boomers (1946 - 1964)
 * - Generation X (1965 - 1980)
 * - Millennials (1981 - 1996)
 * - Zoomers (1997 - 2012)
 * - Generation Alpha (2010 - 2021)
 */







































 /* bobby1 */
 let year = prompt("To check how the generation you are born in is called, please add year of birth (1883 - 2021)");
    year = Number(year);
    year >= 1883 && year <= 1900 ? alert("Lost Generation") : year >= 1901 && year <= 1927 ? alert("Greatest Generation") : year >= 1928 && year <= 1945 ? alert("Silent Generation") : year >= 1946 && year <= 1964 ? alert("Baby Boomers") : year >= 1965 && year <= 1980 ? alert("Generation X") : year >= 1981 && year <= 1996 ? alert("Millenials") : year >= 1997 && year <= 2009 ? alert("Zoomers") : year >= 2010 && year <= 2012 ? alert("Zoomers and Generation Alpha overlap here") : year >= 2013 && year <= 2021 ? alert("Generation Alpha") : alert("Invalid input") 







































/* bobby2 */
let year = prompt("To check how the generation you are born in is called, please add year of birth (1883 - 2021)");
year = Number(year);
if (year >= 1883 && year <= 1900) {
    alert("Lost Generation")
} else if (year >= 1901 && year <= 1927) {
    alert("Greatest Generation")
} else if (year >= 1928 && year <= 1945) {
    alert("Silent Generation")
} else if (year >= 1946 && year <= 1964) {
    alert("Baby Boomers")
} else if (year >= 1965 && year <= 1980) {
    alert("Generation X")
} else if (year >= 1981 && year <= 1996) {
    alert("Millenials")
} else if (year >= 1997 && year <= 2009) {
    alert("Zoomers")
} else if (year >= 2010 && year <= 2012) {
    alert("Zoomers and Generation Alpha overlap here")
} else if (year >= 2013 && year <= 2021) {
    alert("Generation Alpha")
} else {
    alert("Invalid input") 
}

alert("All done.");