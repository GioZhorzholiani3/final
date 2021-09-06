let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
let header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(23, 11, 54)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



document.getElementById('cta_id').addEventListener('click',function(){
	alert('resume has been download')
})



// get mail from server
function getMail(){
	function render(){
		let response = this.responseText;
		let responseData = JSON.parse(response);



		let mailh2 = document.createElement('h2')
		mailh2.textContent =  responseData.data[2].email;

		document.getElementById('email_id').appendChild(mailh2);
	}


	let requist = new XMLHttpRequest();


	requist.addEventListener('load', render);

	requist.open('GET', 'https://reqres.in/api/users?page=2');
	requist.send();
}

getMail();


// get phone from server
function getPhone(){
	function render(){
		let response = this.responseText;
		let responseData = JSON.parse(response);



		let phoneh2 = document.createElement('h2')
		phoneh2.textContent =  responseData[1].phone;

		document.getElementById('phone_id').appendChild(phoneh2);
	}


	let requist = new XMLHttpRequest();


	requist.addEventListener('load', render);

	requist.open('GET', 'https://jsonplaceholder.typicode.com/users');
	requist.send();
}



getPhone();



// get addres from server
function getAddress(){
	function render(){
		let response = this.responseText;
		let responseData = JSON.parse(response);



		let phoneh2 = document.createElement('h2')
		phoneh2.textContent =  responseData[1].address.city + ' ' + responseData[1].address.street ;

		document.getElementById('address_id').appendChild(phoneh2);
	}


	let requist = new XMLHttpRequest();


	requist.addEventListener('load', render);

	requist.open('GET', 'https://jsonplaceholder.typicode.com/users');
	requist.send();
}

getAddress();










