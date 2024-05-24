document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('booking_form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const guests = form.querySelector('select[name="guests"]').value;
    const date = form.querySelector('input[name="date"]').value;

    if (!validateRequired(name)) {
      alert('El nombre es obligatorio.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Por favor, ingrese un número de teléfono válido (9 dígitos).');
      return;
    }

    if (!validateEmail(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (!validateRequired(guests)) {
      alert('Por favor, seleccione el número de personas.');
      return;
    }

    if (!validateDate(date)) {
      alert('Por favor, ingrese una fecha válida.');
      return;
    }

    alert('Formulario enviado con éxito!');
    form.submit();
  });
});

function validateRequired(value) {
  return value !== '';
}

function validatePhone(phone) {
  const phoneRegex = /^\d{9}$/;
  return phoneRegex.test(phone);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateDate(date) {
  const today = new Date().toISOString().split('T')[0];
  return date >= today;
}

