function myFunction(){
	let input1= document.querySelector('#input1').value;
	let input2 = document.querySelector('#input2').value;

	console.log(`${input1} >> Birinci veri`)
	console.log(`${input2} >> İkinci veri`)

	let sonuc = ((input1 * input2)) / 100

	let spansonuc = document.querySelector('#spansonuc');
	spansonuc.innerHTML = sonuc

	console.log(`Sonuç: ${sonuc}`)
}