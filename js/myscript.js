function rubah(angka){
	var reverse = angka.toString().split('').reverse().join(''),
	ribuan = reverse.match(/\d{1,3}/g);
	ribuan = ribuan.join('.').split('').reverse().join('');
	return ribuan;
}

function michat(data){
	var datas = eval(data);
	return rubah(datas);
}

// var benar;
// function compare(arr1) {
//   // arr1.forEach(function(item){
//   	benar=[];
//   	if(arr1[0]==arr1[1]&&arr1[0]==arr1[2]&&arr1[0]==arr1[3]&&arr1[0]==arr1[4]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[0]==arr1[1]&&arr1[0]==arr1[7]&&arr1[0]==arr1[3]&&arr1[0]==arr1[4]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[0]==arr1[6]&&arr1[0]==arr1[12]&&arr1[0]==arr1[8]&&arr1[0]==arr1[4]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[5]==arr1[1]&&arr1[5]==arr1[2]&&arr1[5]==arr1[3]&&arr1[5]==arr1[9]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[5]==arr1[6]&&arr1[5]==arr1[7]&&arr1[5]==arr1[8]&&arr1[5]==arr1[9]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[5]==arr1[11]&&arr1[5]==arr1[12]&&arr1[5]==arr1[13]&&arr1[5]==arr1[9]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[10]==arr1[11]&&arr1[10]==arr1[12]&&arr1[10]==arr1[13]&&arr1[10]==arr1[14]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[10]==arr1[11]&&arr1[10]==arr1[7]&&arr1[10]==arr1[13]&&arr1[10]==arr1[14]){
//   		// return 'benar';
//   		benar.push(1);
//   	}else if(arr1[10]==arr1[6]&&arr1[10]==arr1[2]&&arr1[10]==arr1[8]&&arr1[10]==arr1[14]){
//   		// return 'benar';
//   		benar.push(1);
//   	}
//   	return benar;
//   // })
// }
// // var items = [
// //   [0,   1,   2,   3,   4],
// //   [5,   6,   7,   8,   9],
// //   [10,  11,  12,  13,  14]
// // ];
// data1=[1,1,1,1,1,1,1,1,1,1,11,12,13,14,15];
// console.log(compare(data1));
// // exit();




function counterwin(win){
	$('.values').text('');
	const counters = document.querySelectorAll('.values');
	const speed = 1234;
	counters.forEach( counter => {
	   const animate = () => {
	      // const value = +counter.getAttribute('akhir');
	      let value = win;
	      const data = +counter.innerText;
	     
	      const time = value / speed;
	     if(data < value) {
	          counter.innerText = Math.ceil(data + time);
	          setTimeout(animate, 1);
	        }else{
	          counter.innerText = rubah(value);
	        }
	     
	   }
	   
	   animate();
	});
}



$(function(){

	// var dataimages=['<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="5" src="img/item/k.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="12" src="img/item/petasan.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="23" src="img/item/kendang.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="17" src="img/item/liontin.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="8" src="img/item/koin.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="3" src="img/item/q.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="2" src="img/item/j.png">',
	// 	'<img class="ambiltambahchip" width="90%" height="90%" data-tambahchip="30" src="img/item/bocilping.png">'
	// ];
	var dataimages=[
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">'
	];

	var dataperkalian= [
		1,1,1,1,1, 1,1,1,1,1, 1,1,
		3,3,3,3,3, 3,3,3,3,3, 3,3,
		5,5,5,5,5, 5,5,5,5,5,
		7,7,7,7,7, 7,7,7,7,7,
		9,9,9,9,9, 9,
		11,11,11,11,11, 11,
		13,13,13,13,
		15,15,15,15
	];

	var dataimageswild=[
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="1" src="img/item/koin.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="3" src="img/item/petasan.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="5" src="img/item/liontin.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="0" src="img/item/wild.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="7" src="img/item/kendang.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="9" src="img/item/bocilping.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="11" src="img/item/bocilijo.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="13" src="img/item/kakekbiru.png">',

		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">',
		'<img class="ambiltambahchip" width="100%" height="100%" data-tambahchip="15" src="img/item/kakekmerah.png">'
	];

	var dataperkalianwild = [
		1,1,1,1,1, 1,1,1,
		3,3,3,3,3, 3,3,3,
		5,5,5,5,5, 5,5,5,
		0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,
		7,7,7,7,7, 7,
		9,9,9,9,9, 9,
		11,11,11,11,11, 11,
		13,13,13,13,
		15,15,15,15
	];

	var dataimagekali=[
		1,1,1,1,1, 2,1,1,2,1,
		3,1,2,1,1, 4,1,1,1,1,
		5,1,1,1,1, 1,1,4,1,1,
		1,1,3,1,1, 1,1,1,1,1,
		1,1,1,1,1, 10,1,1,1,1,
		1,1,1,1,1, 1,1,1,1,1,
		1,1,2,1,1, 1,1,1,30,1,
		1,1,25,1,1, 1,1,1,1,1,
		1,1,1,1,1, 1,1,2,1,1,
		15,1,3,1,1, 1,1,4,1,1,
		1,1,1,1,1, 1,1,1,3,1,
		1,1,1,1,1, 20,1,1,1,1
	];

	function cetakmini(jumlah){
		if(jumlah<1000000){
			$('.mychip').text(rubah(jumlah));
		}else if(jumlah>=1000000&&jumlah<1000000000){
			var m = jumlah/1000000;
			$('.mychip').text(rubah(m)+'M');
		}else if(jumlah>=1000000000&&jumlah<1000000000000){
			var m = jumlah/1000000000;
			$('.mychip').text(rubah(Math.floor(m))+'B');
		}else{
			var m = jumlah/1000000000000;
			$('.mychip').text(rubah(Math.floor(m))+'T');
		}
	}


	// function kFormatter(num) {
	//     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
	// }
	function nFormatter(num, digits) {
	  const lookup = [
	    { value: 1, symbol: "" },
	    { value: 1e3, symbol: "k" },
	    { value: 1e6, symbol: "M" },
	    { value: 1e9, symbol: "B" },
	    { value: 1e12, symbol: "T" },
	    { value: 1e15, symbol: "P" },
	    { value: 1e18, symbol: "E" }
	  ];
	  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	  var item = lookup.slice().reverse().find(function(item) {
	    return num >= item.value;
	  });
	  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
	}


	var spinawalstop=document.getElementById('spinawal');
	var btnstop=document.getElementById('btnstop');
	var reelstop=document.getElementById('reelstop');
	var csfff=document.getElementById('csfff');
	var soundjp=document.getElementById('soundjp');
	var bigwin=document.getElementById('bigwin');
	var megawin=document.getElementById('megawin');
	var superwin=document.getElementById('superwin');
	var midwin=document.getElementById('midwin');
	var rand1,rand2,rand3,rand4,rand5;
	var spinkolom1,spinkolom2,spinkolom3,spinkolom4,spinkolom5;
	var spintunggu;
	var updatechip;
	var bet = 100000;

	function starts(){
		$('#tunggus').hide();
		$('#starts').show();
		$('#stops').hide();
	}
	function tunggus(){
		$('#tunggus').show();
		$('#starts').hide();
		$('#stops').hide();
	}
	function stops(){
		$('#tunggus').hide();
		$('#stops').show();
		$('#starts').hide();
	}


	$('.fafafaopen').on('click',function(){
		$('.displayawal').hide();
		$('.slotfafafa').fadeIn();
		room();
	})
	$('.exitfafafa').on('click',function(){
		$('.slot:nth-child(1) .value').css('background-color','#04e0dd');
		$('.slot:nth-child(2) .value').css('background-color','#04e0dd');
		$('.slot:nth-child(3) .value').css('background-color','#04e0dd');
		$('.slot:nth-child(4) .value').css('background-color','#04e0dd');
		$('.slot:nth-child(5) .value').css('background-color','#04e0dd');
		$('.gelap').css('opacity','0')
		$('.chipawal').text(nFormatter(localStorage.getItem("mychip"),3));
		$('.displayawal').fadeIn();
		$('.slotfafafa').hide();
	})
	// $('.falseexit').on('click',function(){
	// 	$('.falseexit').after('Stop spin untuk keluar')
	// })


	if(localStorage.getItem('mychip')){

	}else{
		localStorage.setItem('mychip',0);
		tunggus();
	}
	$('.chipawal').text(nFormatter(localStorage.getItem("mychip"),3));
	$('.mychip').text(rubah(localStorage.getItem("mychip")));

	if(Number(localStorage.getItem("mychip"))<100000){
		$('.bonus2m').show();
		tunggus();
		$('.changebet').attr('disabled','on');
	}else{
		starts();
		$('.bonus2m').hide();
		$('.changebet').removeAttr('disabled');
	}

	$('.changebet').on('change',function(){
		bet = $('.changebet').val();
		if(Number(localStorage.getItem('mychip'))<100000){
			alert('Chip habis!!!');
			return false;
		}
		if(Number(bet) > Number(localStorage.getItem('mychip'))){
			alert('Turunkan bet anda!!!');
			$('.disablebtn').attr('disabled','on');
			$('#startspin').text('SPIN');
			$('#stopspin').text('STOP');
			$('#tungguspin').text('STOP');
			tunggus();
		}else{
			$('.disablebtn').removeAttr('disabled');
			starts();
		}
	});

	$('.bonus2m').on('click',function(){
		localStorage.setItem("mychip", 2000000);
		$('.disablebtn').removeAttr('disabled');
		starts();
		$('.bonus2m').hide();
		$('.changebet').removeAttr('disabled');
		$('.mychip').text(nFormatter(localStorage.getItem("mychip"),3));
	});

	var intervalspin=0;
	var spincount = 0;
	var otomatis=false;
	var jumlahspin;
	var kedip1,kedipawal;
	var item1,item2,item3,item4,item5;
	var stop1,stop2;
	var tambahchip,betkaliitem;
	var updatechips;
	// var item2=false;
	// var delayinterval = 3600;
	function animaterotate(dataimgrotate){
		setTimeout(function() {
			dataimgrotate.addClass('bounce7');
		}, 500);
	}

	function spinaja(datacount,datajumlah){
		otomatis=true;
		// jumlahspin = $(this).data('spinotomatis');
		// console.log(datajumlah);
		jumlahspin=datajumlah;
		$('.changebet').attr('disabled','on');
		$('.disablebtn').attr('disabled','on');
		// spincount=$(this).data('spinotomatis');
		spincount=datacount;
		tunggus();
		$('#startspin').click();
		if(jumlahspin != 'unlimited'){
			$('#tungguspin').html('STOP');
			$('#stopspin').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;top:0;">'+(Number(spincount)-1)+'</span></sup>');
		}else{
			$('#tungguspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
			$('#stopspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
		}
		kedip1 = setTimeout(function() {
			stops();
			if(jumlahspin != 'unlimited'){
				$('#tungguspin').html('STOP');
				$('#stopspin').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;top:0;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#tungguspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
				$('#stopspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
			}
		}, 200);
		kedipawal= setTimeout(function() {
			tunggus();
			if(jumlahspin != 'unlimited'){
				$('#tungguspin').html('STOP');
				$('#stopspin').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;top:0;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#tungguspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
				$('#stopspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
			}
		}, 3600);
		intervalspin = setInterval(function(){
			$('#startspin').click();
			spincount--;
			if(jumlahspin != 'unlimited'){
				$('#tungguspin').html('STOP');
				$('#stopspin').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;top:0;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#tungguspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
				$('#stopspin').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;top:0;">&#8734;</span></sup>');
			}
			if((spincount-1) < 1){
				$('#tungguspin').text('STOP');
				$('#stopspin').text('STOP');
				$('#startspin').text('SPIN');
				otomatis=false;
				clearInterval(intervalspin);
				var timeoutstop = setTimeout(function() {
					starts();
					$('.disablebtn').removeAttr('disabled');
				}, 3400);
			}
		}, 3600)
	}

	$('.spinotomatis').on('click',function(){
		spinaja($(this).data('spinotomatis'),$(this).data('spinotomatis'))
	});


	var rand11;
   	var rand22;
   	var rand33;
   	var rand44,rand55;
   	var animatecek2,animatecek3,animatecek4;
   	var randkali;


	function room(){
		rand1=Math.floor(Math.random()*64);
		rand2=Math.floor(Math.random()*64);
		rand3=Math.floor(Math.random()*64);
		rand4=Math.floor(Math.random()*64);
		rand5=Math.floor(Math.random()*64);

		randkali=Math.floor(Math.random()*120);
		$('.slotkali:nth-child(1) .valuekali .perkalian').text('x'+dataimagekali[randkali]);

		$('.slot:nth-child(1) .value div').removeClass('spingo'); 
        $('.slot:nth-child(1) .value .hasil1').html(dataimages[rand1]);
        $('.slot:nth-child(2) .value div').removeClass('spingo'); 
       	$('.slot:nth-child(2) .value .hasil2').html(dataimageswild[rand2]);
       	$('.slot:nth-child(3) .value div').removeClass('spingo'); 
       	$('.slot:nth-child(3) .value .hasil3').html(dataimageswild[rand3]);
       	$('.slot:nth-child(4) .value div').removeClass('spingo'); 
       	$('.slot:nth-child(4) .value .hasil4').html(dataimageswild[rand4]);
       	$('.slot:nth-child(5) .value div').removeClass('spingo'); 
       	$('.slot:nth-child(5) .value .hasil5').html(dataimages[rand5]);
	}
	room();

   	function hideexit(){
		$('.falseexit').show();
		$('.exitfafafa').hide();
   	}
   	function showexit(){
		$('.falseexit').hide();
		$('.exitfafafa').show();
   	}

	$('#startspin').on('click',function(){
		hideexit();
		$('.gelap').hide();
		// console.log(spincount-2);
		$('#tungguspin').text('STOP');
		$('.takebonus').text('Semoga Beruntung');
		rand1=Math.floor(Math.random()*64);
		rand2=Math.floor(Math.random()*64);
		rand3=Math.floor(Math.random()*64);
		rand4=Math.floor(Math.random()*64);
		rand5=Math.floor(Math.random()*64);

		randkali=Math.floor(Math.random()*120);

       	rand11 = dataperkalian[rand1];
       	rand22 = dataperkalianwild[rand2];
       	rand33 = dataperkalianwild[rand3];
       	rand44 = dataperkalianwild[rand4];
       	rand55 = dataperkalian[rand5];

       	// console.log(rand1+' '+rand2+' '+rand3+' '+rand4+' '+rand5)
       	// var arraybaru=[rand11,2,0,2,rand55];
       	// console.log(rand11+' '+rand22+' '+rand33+' '+rand44+' '+rand55)
		if(rand22==0){
			rand22=rand11;
       	}
       	if(rand33==0){
       		rand33=rand11;
       	}
       	if(rand44==0){
       		rand44=rand11;
       	}
       	// setTimeout(function() {
       	// console.log(rand11+' '+rand22+' '+rand33+' '+rand44+' '+rand55)
       	// }, 1000);

       // 	var df = arraybaru.filter(function(el){
       // 		return el==0;
       // 	})
       // console.log(df);
   
		tunggus();
		if(Number(bet) > Number(localStorage.getItem('mychip'))){
			if((spincount-2)>0){
				clearInterval(intervalspin);
				spincount=0;
				tunggus();
				$('.changebet').removeAttr('disabled');
				$('.disablebtn').attr('disabled','on');
			}else{
				spincount=0;
				tunggus();
				$('.changebet').removeAttr('disabled');
				$('.disablebtn').attr('disabled','on');
			}
			if(Number(localStorage.getItem('mychip'))<100000){
				$('.bonus2m').show();
			}else{
				$('.bonus2m').hide();
			}
				otomatis=false;
				alert('Turunkan bet anda!!!');
				return false;
		}
		if(Number(localStorage.getItem('mychip'))<100000){
			if((spincount-1)>0){
				clearInterval(intervalspin);
				spincount=0;
				tunggus();
				$('.changebet').removeAttr('disabled');
				$('.disablebtn').attr('disabled','on');
			}else{
				spincount=0;
				tunggus();
				$('.changebet').removeAttr('disabled');
				$('.disablebtn').attr('disabled','on');
			}
				otomatis=false;
				$('.bonus2m').show();
				alert('Silahkan ambil Reward 2M anda!!');
				return false;
		}

        if(otomatis==true){

        }else{
			$('#startspin').text('SPIN');
			$('#stopspin').text('STOP');
			$('#tungguspin').text('STOP');
			$('.changebet').attr('disabled','on');
        }
        spintunggu = setTimeout(function() {
		$('#spinawal')[0].play();
        spinawalstop.currentTime = 0;
        	stops();
			$('.value div').addClass('spingo');
			$('.value div').css({
				'animation-play-state':'running',
	            'animation-iteration-count':'100'
	        });
	        $('.valuekali div').addClass('spinkali');
			$('.valuekali div').css({
				'animation-play-state':'running',
	            'animation-iteration-count':'100'
	        });
        }, 200);

		spinkolom1 = setTimeout(function() {
			$('#reelstop')[0].play();
            reelstop.currentTime = 0;
           	$('.slot:nth-child(1) .value div').removeClass('spingo'); 
           	$('.slot:nth-child(1) .value .hasil1').html(dataimages[rand1]);
		}, 1000);
		spinkolom2 = setTimeout(function() {
			$('#reelstop')[0].play();
            reelstop.currentTime = 0;
           	$('.slot:nth-child(2) .value div').removeClass('spingo'); 
           	$('.slot:nth-child(2) .value .hasil2').html(dataimageswild[rand2]);
		}, 1500);
		spinkolom3 = setTimeout(function() {
			$('#reelstop')[0].play();
            reelstop.currentTime = 0;
           	$('.slot:nth-child(3) .value div').removeClass('spingo'); 
           	$('.slot:nth-child(3) .value .hasil3').html(dataimageswild[rand3]);
		}, 2000);
		spinkolom4 = setTimeout(function() {
			$('#reelstop')[0].play();
            reelstop.currentTime = 0;
           	$('.slot:nth-child(4) .value div').removeClass('spingo'); 
           	$('.slot:nth-child(4) .value .hasil4').html(dataimageswild[rand4]);
		}, 2500);
		spinkolom5 = setTimeout(function() {
			if(otomatis == true){
				$('.disablebtn').attr('disabled','on');
			}else{
				starts();
				$('.disablebtn').removeAttr('disabled');
			}
			$('#reelstop')[0].play();
            reelstop.currentTime = 0;
           	$('.slot:nth-child(5) .value div').removeClass('spingo'); 
           	$('.slot:nth-child(5) .value .hasil5').html(dataimages[rand5]);
           	$('.slotkali:nth-child(1) .valuekali div').removeClass('spinkali'); 
           	$('.slotkali:nth-child(1) .valuekali .perkalian').text('x'+dataimagekali[randkali]);
           	if((spincount-1)>0){
           		$('.changebet').attr('disabled','on');
           	}else{
           		$('.changebet').removeAttr('disabled');
           	}


           	// localStorage.setItem('random1',rand11);
           	// localStorage.setItem('random2',rand22);
           	// localStorage.setItem('random3',rand33);
		}, 3000);
		setTimeout(function() {
			$('.slot:nth-child(1) .value').css('background-color','#04e0dd');
			$('.slot:nth-child(2) .value').css('background-color','#04e0dd');
			$('.slot:nth-child(3) .value').css('background-color','#04e0dd');
			$('.slot:nth-child(4) .value').css('background-color','#04e0dd');
			$('.slot:nth-child(5) .value').css('background-color','#04e0dd');
		}, 200);

		if(rand11 == rand22 && rand11 == rand33 && rand11 == rand44 && rand11 == rand55){
			updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			tunggus();
			item3 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
				$('.slot:nth-child(4) .value').css('background-color','orange');
				$('.slot:nth-child(5) .value').css('background-color','orange');
	           	tambahchip=$('.hasil1 img').data('tambahchip');
	           	animatecek2=$('.hasil2 img').data('tambahchip');
	           	animatecek3=$('.hasil3 img').data('tambahchip');
	           	animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*20*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);

				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=24){
					// bigwin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						// $('.values').attr('akhir','0');
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
					}, 11000);
				}else{
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
				}
			}, 3000);
		}else if(rand11 == rand22 && rand11 == rand33 && rand11 == rand44){
			updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			tunggus();
			item2 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
				$('.slot:nth-child(4) .value').css('background-color','orange');
	           	tambahchip=$('.hasil1 img').data('tambahchip');
	           	animatecek2=$('.hasil2 img').data('tambahchip');
	           	animatecek3=$('.hasil3 img').data('tambahchip');
	           	animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*3*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);

				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=24){
					// bigwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else{
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 2000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 2200);
					}
				}
			}, 3000);
		}else if(rand11 == rand22 && rand11 == rand33){
			updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			tunggus();
			item4 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
				tambahchip=$('.hasil1 img').data('tambahchip');
				var animatecek2=$('.hasil2 img').data('tambahchip');
	           	var animatecek3=$('.hasil3 img').data('tambahchip');
	           	var animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);

				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=24){
					// bigwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 11000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 11200);
					}
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						$('.popupbox').fadeOut();
					}, 11000);
				}else{
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					if((spincount-1)>0 && otomatis == true){
						clearInterval(intervalspin);
						stop2 = setTimeout(function() {
							stops();
							spinaja(spincount-1,jumlahspin);
						}, 2000);
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 2200);
					}
				}
			}, 3000);
		}else{
			updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			tunggus();
			item1 =	setTimeout(function() {
				if(Number(updatechip)<100000){
					clearInterval(intervalspin);
					$('#startspin').text('SPIN');
					$('#stopspin').text('STOP');
					$('#tungguspin').text('STOP');
					otomatis=false;
					spincount=0;
					$('.changebet').attr('disabled','on');
					$('.bonus2m').show();
					tunggus();
				}else{
					if((spincount-1)>0){
						$('.disablebtn').attr('disabled','on');
					}else{
						stop2 = setTimeout(function() {
							starts();
							showexit();
						}, 200);
					}
				}
			}, 3000);
		}
	})


	$('#stopspin').on('click',function(){
		tunggus();
		$('#btnstop')[0].play();
		$('#tungguspin').text('SPIN');
        btnstop.currentTime = 0;
        otomatis=false;
        spincount=0;
        clearInterval(intervalspin);
        clearTimeout(spinkolom1);
        clearTimeout(spinkolom2);
        clearTimeout(spinkolom3);
        clearTimeout(spinkolom4);
        clearTimeout(spinkolom5);
        clearTimeout(kedip1);
        clearTimeout(kedipawal);
        clearTimeout(spintunggu);
        clearTimeout(item1);
        clearTimeout(item2);
        clearTimeout(item3);
        clearTimeout(item4);
        clearTimeout(item5);
        clearTimeout(stop1);
        clearTimeout(stop2);
        $('.value div').removeClass('spingo');
        $('.valuekali div').removeClass('spinkali');

        
        setTimeout(function() {
		if(rand11 == rand22 && rand11 == rand33 && rand11 == rand44 && rand11 == rand55){
			// updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			// localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			// item3 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
				$('.slot:nth-child(4) .value').css('background-color','orange');
				$('.slot:nth-child(5) .value').css('background-color','orange');
	           	tambahchip=$('.hasil1 img').data('tambahchip');
	           	animatecek2=$('.hasil2 img').data('tambahchip');
	           	animatecek3=$('.hasil3 img').data('tambahchip');
	           	animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*20*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);
				tunggus();

				if((betkaliitem/bet) >=15 && (betkaliitem/bet/4) <=24){
					// bigwin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						starts();
						showexit();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
				        $('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						starts();
						showexit();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					$('#soundjp')[0].play();
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.jakpot').text('JAKPOT');
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						starts();
						showexit();
						$('.jakpot').text('');
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else{
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil5 img'));
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil5 img'));
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img, .hasil5 img'));
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil5 img'));
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img, .hasil5 img'));
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 1000);
					// }
					setTimeout(function() {
						starts();
						showexit();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 2000);
				}
			// }, 2500);
		}else if(rand11 == rand22 && rand11 == rand33 && rand11 == rand44){
			// updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			// localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			// item2 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
				$('.slot:nth-child(4) .value').css('background-color','orange');
	           	tambahchip=$('.hasil1 img').data('tambahchip');
	           	animatecek2=$('.hasil2 img').data('tambahchip');
	           	animatecek3=$('.hasil3 img').data('tambahchip');
	           	animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*3*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);
				tunggus();

				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=24){
					// bigwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					},3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else{
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0&&animatecek4==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek4==0){
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img, .hasil4 img'));
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					// if((spincount-1)>0 && otomatis == true){
						// clearInterval(intervalspin);
						// stop2 = setTimeout(function() {
						// 	spinaja(spincount-1,jumlahspin);
						// }, 1000);
					// }
					setTimeout(function() {
						starts();
						showexit();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 2000);
				}
			// }, 2500);
		}else if(rand11 == rand22 && rand11 == rand33){
			// updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			// localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			// item2 = setTimeout(function() {
				$('#csfff')[0].play();
				csfff.currentTime = 0;
				$('.slot:nth-child(1) .value').css('background-color','orange');
				$('.slot:nth-child(2) .value').css('background-color','orange');
				$('.slot:nth-child(3) .value').css('background-color','orange');
	           	tambahchip=$('.hasil1 img').data('tambahchip');
	           	animatecek2=$('.hasil2 img').data('tambahchip');
	           	animatecek3=$('.hasil3 img').data('tambahchip');
	           	animatecek4=$('.hasil4 img').data('tambahchip');
	           	betkaliitem = Number(bet)*Number(tambahchip)*Number(dataimagekali[randkali]);
	           	updatechips = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechips);
				tunggus();

				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=24){
					// bigwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#bigwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('BIG');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						bigwin.currentTime = 0;
						$('#bigwin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=25 && (betkaliitem/bet) <=39){
					// megawin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#megawin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('MEGA');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						megawin.currentTime = 0;
						$('#megawin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else if((betkaliitem/bet) >=40){
					// superwin
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
					setTimeout(function() {
						$('.mychip').text(rubah(localStorage.getItem('mychip')));
		           		$('.takebonus').text(rubah(betkaliitem));
					}, 10500);
					// if((spincount-1)>0 && otomatis == true){
					// 	clearInterval(intervalspin);
					// 	stop2 = setTimeout(function() {
					// 		spinaja(spincount-1,jumlahspin);
					// 	}, 3000);
					// }
					setTimeout(function() {
						$('#superwin')[0].play();
						$('.popupbox').fadeIn();
						$('.oktext').text('SUPER');
						$('.values').text('000');
						setTimeout(function() {
							counterwin(betkaliitem);
						}, 200);
					}, 3000);
					// $('.values').attr('akhir',betkaliitem);
					// $('.winchip').text(rubah(betkaliitem));
					setTimeout(function() {
						superwin.currentTime = 0;
						$('#superwin')[0].pause();
						starts();
						showexit();
						$('.popupbox').fadeOut();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 11000);
				}else{
					setTimeout(function() {
						$('#midwin')[0].play();
					}, 500);
					if(animatecek2==0&&animatecek3==0){
						animaterotate($('.hasil1 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek2==0){
						animaterotate($('.hasil1 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else if(animatecek3==0){
						animaterotate($('.hasil1 img, .hasil2 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}else{
						animaterotate($('.hasil1 img, .hasil2 img, .hasil3 img'));
						$('.slot:nth-child(4) .value').after('<div class="gelap"></div>');
						$('.slot:nth-child(5) .value').after('<div class="gelap"></div>');
					}
					tunggus();
	           		$('.takebonus').text(rubah(betkaliitem));
					// if((spincount-1)>0 && otomatis == true){
						// clearInterval(intervalspin);
						// stop2 = setTimeout(function() {
						// 	spinaja(spincount-1,jumlahspin);
						// }, 1000);
					// }
					setTimeout(function() {
						starts();
						showexit();
						$('.disablebtn').removeAttr('disabled');
				        $('.changebet').removeAttr('disabled');
					}, 2000);
				}
			// }, 2500);
		}else{
			// updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			// localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			// item1 =	setTimeout(function() {
				if(Number(updatechip)<100000){
					clearInterval(intervalspin);
					$('#startspin').text('SPIN');
					$('#stopspin').text('STOP');
					$('#tungguspin').text('STOP');
					otomatis=false;
					spincount=0;
					$('.changebet').attr('disabled','on');
					$('.bonus2m').fadeIn();
					tunggus();
				}else{
					if((spincount-1)>0){
						$('.disablebtn').attr('disabled','on');
					}else{
						tunggus();
						setTimeout(function() {
							starts();
							showexit();
							$('.disablebtn').removeAttr('disabled');
				        	$('.changebet').removeAttr('disabled');
						}, 900);
					}
				}
			// }, 2500);
		}
		}, 100);

        $('.slot:nth-child(1) .value div').removeClass('spingo'); 
        $('.slot:nth-child(1) .value .hasil1').html(dataimages[rand1]);
        $('.slot:nth-child(2) .value div').removeClass('spingo'); 
        $('.slot:nth-child(2) .value .hasil2').html(dataimageswild[rand2]);
        $('.slot:nth-child(3) .value div').removeClass('spingo'); 
        $('.slot:nth-child(3) .value .hasil3').html(dataimageswild[rand3]);
        $('.slot:nth-child(4) .value div').removeClass('spingo'); 
        $('.slot:nth-child(4) .value .hasil4').html(dataimageswild[rand4]);
        $('.slot:nth-child(5) .value div').removeClass('spingo'); 
        $('.slot:nth-child(5) .value .hasil5').html(dataimages[rand5]);
        $('.slotkali:nth-child(1) .valuekali .perkalian').removeClass('spinkali');
        $('.slotkali:nth-child(1) .valuekali .perkalian').text('x'+dataimagekali[randkali]);
	});


})