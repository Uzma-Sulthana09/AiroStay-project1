(() => {
    'use strict';

    console.log("script.js loaded");

    const forms = document.querySelectorAll('.needs-validation');

    console.log("Forms found:", forms.length); 

    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', event => {
            console.log("Form submitted"); 

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

})();
