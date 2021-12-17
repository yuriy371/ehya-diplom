const valid = () => {
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: {
					required: true,
					minlength: 18
				}
			},
			messages: {
				name: {
					required: "Укажите ваше имя",
					minlength: "Имя должно состоять не менее чем из 2 символов.",
				},
				email: {
					required: "Введите почту",
					email: "Пример: valera@gmail.com"
				},
				phone: {
					required: "Укажите номер телефона для связи",
					minlength: "Введите телефон полностью"
				}
			}
		});
	});
	$("[type=tel]").mask('+0 (000) 000-00-00')
}

export default valid