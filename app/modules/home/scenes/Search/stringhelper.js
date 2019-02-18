export function upcaseFirstLetter(string)
{
  return string.toLowerCase()
  .split(' ')
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(' ');
}

export function removeExtraSpace(string)
{
  return string.replace(/\s+/g, ' ').trim()
}

export function removeSpaces(string){
  return string.replace(/ /g,'').trim()
}

export function toResolvableString(string)
{
  string = removeSpaces(string).toLowerCase();
  return string;
}

export function toStandardNameString(string)
{
  string = removeExtraSpace(string).toLowerCase();
  return upcaseFirstLetter(string)
}

export function cutGetFloatAndUnit(string) {
  const floatregex = /[+-]?\d+(\.\d+)?/g;
  const floatstrings = string.match(floatregex);
  if ((!floatstrings) || (string == '') || isNaN(string[0])) {
    return { value: 0,unit: 0 }
  }
  const floatstring = floatstrings[0];
  let unit = string.substring(floatstring.length,string.length);
  if (unit === '') unit = 0;
  return { value: parseFloat(floatstring),unit: unit}
}

export function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.normalize('NFD').replace(/[\u0110-\u036f]/g, "");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
  str = str.replace(/ + /g," ");
  str = str.trim(); 
  return str;
}

export function toSearchableString(string)
{
  string = removeExtraSpace(string);
  string = change_alias(string);
  return string;
}

export function getLastWord(string)
{
  var n = string.split(" ");
  return n[n.length - 1];
}

export function removeLastWord(string)
{
  var lastIndex = string.lastIndexOf(" ");

  return string.substring(0, lastIndex);
}