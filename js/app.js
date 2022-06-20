document.querySelector('.submit_btn').addEventListener('click', (e) => {
    e.preventDefault();
    Array.from(document.querySelectorAll('input')).forEach((input => {
        if (!input.value) {
            let error = document.createElement('p');
            error.textContent = ` ${input.placeholder} cannot be empty`;

            let nextinput = input.nextElementSibling;
            document.querySelector('form').insertBefore(error, nextinput);

            error.classList.add('error');
            input.classList.add('input_error');

            setTimeout(() => {
                error.remove()
                input.classList.remove('input_error')
            }, 1000);
        }
    }))
})