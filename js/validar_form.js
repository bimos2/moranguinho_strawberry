document.addEventListener('DOMContentLoaded', function() {
    function enviarFormulario(form, formspreeURL) {
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Enviando os dados para o Formspree via fetch
        fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    }

    // Manipulando o formulário com id 'contatoForm'
    const contatoForm = document.getElementById('contatoForm');
    if (contatoForm) {
        const formspreeURLContato = 'https://formspree.io/f/mnnqdqor'; // Alterando a URL para a que você está usando
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do formulário (envio e recarga da página)
            enviarFormulario(contatoForm, formspreeURLContato);
        });
    }
});
