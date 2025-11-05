document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        if (!nome.value.trim()) {
            alert('Por favor, informe o Nome.');
            nome.focus();
            return false;
        }

        if (!email.value.trim()) {
            alert('Por favor, informe o E-mail.');
            email.focus();
            return false;
        }

        // simples verificação do formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Por favor, informe um E-mail válido.');
            email.focus();
            return false;
        }

        if (!mensagem.value.trim()) {
            alert('Por favor, escreva a Mensagem.');
            mensagem.focus();
            return false;
        }

        // se chegou aqui, tudo OK — exibe confirmação e limpa o formulário
        alert('Mensagem enviada com sucesso. Obrigado!');
        form.reset();
        return true;
    });
});