/* Всплывание окна логина */
document.addEventListener('DOMContentLoaded', function(){
	var login = document.getElementsByClassName ('login');
	var modalContent = document.getElementsByClassName ('modal-content')[0];


	[].forEach.call(login, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      modalContent.classList.remove("hidden")
	    });

  });

})

/* Закрытиы всплывшего окна логина по крестику */
document.addEventListener('DOMContentLoaded', function(){
	var close = document.getElementsByClassName ('modal-content-close');
	var modalContent = document.getElementsByClassName ('modal-content')[0];

	[].forEach.call(close, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      modalContent.classList.add("hidden")
	    });

  });

})

/* Появление затемнения и блок других элементов, кромя окна логина*/
document.addEventListener('DOMContentLoaded', function(){
	var login = document.getElementsByClassName ('login');
	var overlay = document.getElementsByClassName ('modal-overlay')[0];


	[].forEach.call(login, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      overlay.classList.remove("hidden")
	    });

  });

})

/* Закрытие затемнения вместе с окном логина*/
document.addEventListener('DOMContentLoaded', function(){
	var close = document.getElementsByClassName ('modal-content-close');
	var overlay = document.getElementsByClassName ('modal-overlay')[0];

	[].forEach.call(close, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      overlay.classList.add("hidden")
	    });

  });

})

document.addEventListener('DOMContentLoaded', function(){
	var map = document.getElementsByClassName ('map');
	var modalMap = document.getElementsByClassName ('modal-content-map')[0];


	[].forEach.call(map, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      modalMap.classList.remove("hidden")
	    });

  });

})


document.addEventListener('DOMContentLoaded', function(){
	var close = document.getElementsByClassName ('modal-content-close');
	var modalMap = document.getElementsByClassName ('modal-content-map')[0];


	[].forEach.call(close, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      modalMap.classList.add("hidden")
	    });

  });

})

document.addEventListener('DOMContentLoaded', function(){
	var map = document.getElementsByClassName ('map');
	var overlay = document.getElementsByClassName ('modal-overlay')[0];


	[].forEach.call(map, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      overlay.classList.remove("hidden")
	    });

  });

})