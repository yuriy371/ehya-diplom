const valid = () => {
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			rules: {
				name: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "The name must be at least 2 characters long",
				},
				email: {
					required: "Введите почту",
					email: "Пример: valera@gmail.com"
				},
				phone: {
					required: "We need your phone number to contact you",
				}
			}
		});
	});
	$("[type=tel]").mask('+0 (000) 000-00-00')
}

export default valid