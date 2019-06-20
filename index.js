console.log('il est tot');
var heure=19, bon="";

bon = (heure<=18) ? "Bonjour" : "Bonsoir";

alert(bon);

if (heure<=18){
bon='bonsjourrrrr';
}
else {
bon='bonsoirrrr'
}
alert(bon);

var x = 6;
var y="";

if (x) {
	alert('x est evalué true');
	}

/*//pour faire une condition d 'appartition sur l'heure
var heure = 14;
if (typeof(heure)==='number'==true && heure<=24==true){
	if (heure<12){
		alert('bonjour');
	}
	else if (!(heure<=12)){
		if (heure<=18){
			alert ('aprem');
			}
		else {
			alert ('soir');
		}
	}
	else if (heure==12){
		alert('midi');
	}
}
else{
	alert('erreur');
}

var x=7, y=14;
var vrai = x<y;
var faux = 14 <= 7;

var egalval = 4 =='4';
var egalvaltyp = 4 === '4';

var difval = 4 !='4';
var difvaltype = 4!=='4';

console.log('var  vrai = x<y DONNE'+ vrai +
			'\n faux = 14 <= 7 DONNE'+ faux+
			'\n\n \n egalval = 4 =="4" DONNE' +egalval+
			'\n \n egalvaltyp = 4 ==="4" DONNE' +egalvaltyp+
			'\n \n \ndifval = 4 !="4" DONNE' +difval+
			'\n difvaltype = 4!=="4" DONNE'+ difvaltype);

	/*var x=5, y=10, z=-18;

	var prio = x*(y-1)/(3+z);
	var prio1= (prio-22) % 3;

console.log('x=5, y=10, z=-18'+
	'\n varilable priorité = x * y / ( 4 + z );'+' '+ prio +
	'\nvarilable prio1 = (prio-22) % 13 = ' + prio1
	);

	var mod1 = z % x;
	var mod2 = 33 % -10;
console.log ('mod1 = z % x \n soit -18 % 5' + ' '+ mod1 + 
	'\n mod2 33 % -10 = '+' '+ mod2);

	x=2+1+"a";// x +=;

console.log(x);
	x=x-2;
	y=y*2;

	var mult = x * y;
	var divi = y / z;
	var mod = 13 % z;

	var prenom='pierre', nom='martin', dept='38';//declarer plusieurs variable en mm temps. 

	var z=true, zz=false;
	var jour='lundi';
	var n=null;
	var u=undefined;

console.log("Variable name : "+typeof(x)+
	"\nVarialbe prenom : "+typeof(prenom)+
	"\nVarialbe z : "+typeof(z)+
	"\nVarialbe jour : "+typeof(jour)+
	"\nVarialbe n"+typeof(n)
	);*/