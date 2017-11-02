// content.js
$(function(){

  $("a[href^='mailto:']").on("click", function(event){
    event.preventDefault();
		console.log("CLICK");
    var mailaddress = $(this).attr('href').substring(7);

    var textArea = document.createElement("textarea");
	  textArea.value = mailaddress;
    document.body.appendChild(textArea);

	  textArea.select();
	  try {
	    var successful = document.execCommand('copy');
	    var msg = successful ? 'successful' : 'unsuccessful';
	    console.log('Copying text command was ' + msg);
	  } catch (err) {
	    console.log('Oops, unable to copy');
	  }
	});

});
