(() => {
    'use strict';

    console.log("script.js loaded"); // ✅ Check if this appears in browser console

    const forms = document.querySelectorAll('.needs-validation');

    console.log("Forms found:", forms.length); // ✅ Should print 1 or more

    Array.from(forms).forEach((form) => {
        form.addEventListener('submit', event => {
            console.log("Form submitted"); // ✅ Check if this fires on submit

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

})();