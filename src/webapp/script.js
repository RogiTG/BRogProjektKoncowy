
$( "#kat1" ).bind( "click", function() {
  let $p = $("<div/>");
  $p.css("height","auto").
  css("width","600px").
  css("border","solid").
  css("float","left").
  css("margin","45px").
  css("backgroundColor","white");
$("#contener2").append($p);


/*Samochody Toyota*/
let $v = $("<div/>");
let $par = $("<p/>");
$par.text("TOYOTA").css("margin","5px");
$v.css({"margin":"5px","border":"solid","height":"100px","width":"auto"}).
text("1");
$p.append($v);
$p.append("<br>");
$v.append($par);


let $z = $("<div/>");
$z.css("margin","5px").
css("border","solid").
css("height","100px").
css("width","100px").
text("2");
$p.append($z);
$p.append("<br>");

});


