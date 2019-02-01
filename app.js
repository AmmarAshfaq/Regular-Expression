var pattern = /orange/
// console.log(pattern.test("orange"))
var patternIgnorecase = /orange/i
// console.log(patternIgnorecase.test("Orange"))
var patternGlobal = /orange/gi
// console.log(patternGlobal.test("Orange Juice"))
// for matching set of characters
var pattern = /[abc]/

// console.log(pattern.test('a'));
// console.log(pattern.test('d'));
// if we want match variant
var pattern = /[0-5]/
// console.log(pattern.test(3));
// console.log(pattern.test(12345))
// console.log(pattern.test(9));
// console.log(/[123456789]/.test("this is year 2015"))

// exec method is used when you want to access occurrences in particular pattern
// exec methods takes a string and return the array
// single /something/ return single value
// /something/g all instances
var strToMatch = 'A Toyota! Race fast,safe car! A Toyota!'
var regExAt = /Toy/g
var arrMatches = regExAt.exec(strToMatch)
// console.log(arrMatches)

// Th match Method is called on string object and return all matches in array
var strToMatch = 'A Toyota! Race fast,safe car! A Toyota!'
var reqExAt = /Toy/
var arrMatches = strToMatch.match(regExAt)
// console.log(arrMatches)

// the other String Object method is replaced()

var strToMatch = 'Blue is your favourite color?'
var regExAt = /Blue/
// console.log(strToMatch.replace(reqExAt, function(matchingText){
//     return 'Red';
// }))

//takes String Object and returns an array
var sColor = 'sun,moon,stars';
var reComma =/\,/
// console.log(sColor.split(reComma));

// matches more than one value where at is repeating mutiple time
var strToMatch = 'wooden bat,smelly Cat,a fat cat';
var re = /[bcf]at/gi;
var arrMatches = strToMatch.match(re);
// console.log(arrMatches);

var strToMatch = 'i1,i2,i3,i4,i5,i6';
var re =/i[0-5]/gi
var arrMatches = strToMatch.match(re);
// console.log(arrMatches)
// [^0-5] ^ eliminates the previous one
var strToMatch = 'i1,i2,i3,i4,i5,i6';
var re = /i[^0-5]/gi
var arrMatches = strToMatch.match(re);
// console.log(arrMatches)

 // Any digit character \d 
 // an alphanumeric character (word character) \w
 // Any whitespace character (space,tab,newline and similar) \s
 // A character that is not digit \D
 // A non-alphanumeric character \W
 // A non-whitespace charcter \S
 // Any charcter except for newline  .

 var strToMatch = '123-456-7890';
//  var re =  /[0-9][0-9][0-9]-[0-9][0-9][0-9]/;
//replaced
var re = /\d\d\d-\d\d\d/
 var arrMatches = strToMatch.match(re);
//  console.log(arrMatches)

// fixed characters or numeric patterns cover

// Repeated Occurences(repetative cover)
//?: Either 0 or 1 occurence (marks the occurrence as optiional)
// *: 0 or more occurences
// +:1 or more occurences
// {n}: Exactly n occurences
// {n,m}: occurences between n and m
//{n,}: At least an n occurence
// {,n}: 0 to n occurences


var str = /behaviou?r/
// console.log(str.test("behaviour"))
console.log(/'\d+'/.test("'123'"))
