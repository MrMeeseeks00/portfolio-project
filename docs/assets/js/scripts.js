//Init Email JS
(function () {
    emailjs.init({
        publicKey: "yNja1cNV0z-UGWXpn",
    });
})();


//Validazione Form utilizzando Bootstrap e EmailJS

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

    if (!this.checkValidity()) {
        event.stopPropagation();
    this.classList.add('was-validated');
            } else {

        emailjs.sendForm('service_26az1gh', 'contact_form', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('contact-form').reset();
                document.getElementById('contact-form').classList.remove('was-validated');
            }, function (error) {
                console.log('FAILED...', error);
            });

            }
        });