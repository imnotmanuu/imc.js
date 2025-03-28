function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    if (!birthDateInput) {
        document.getElementById('result').innerText = 'Por favor, insira uma data de nascimento.';
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Você tem ${age} anos.`;
}