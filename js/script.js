function Involution (){

var a;
var n;
var Inv = 1;

a = prompt ('Введите основание степени, целое число'); /* Защиты от дурака нет */
n = prompt ('Введите показатель степени, целое число');


if (n > 0) {
		for (var i = 0; i < n; i++ ) {
			 Inv = Inv * a;	
		};
		alert (Inv);
            } else {
				n = -n;
				for (var i = 0; i < n; i++ ) {
			 Inv = Inv * a;	
		};
		Inv = 1/Inv;
		alert (Inv);
		
			}
}

Involution ();