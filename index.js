function insta(){
    window.location.href = "https://www.instagram.com/ryan_gabriel_figueiroa_flor/";
}

function linkedin(){
    window.location.href = "https://www.linkedin.com/in/ryan-gabriel-98490b398/";
}

    emailjs.init("3n2Ano_hN0HwP2oEs");

    document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("mensagem").value,
    }

    const serviceID = "service_qbwp3qi";
    const templateID = "template_hsy75py";
    const submitButton = document.getElementById("submit_Button");
    submitButton.textContent = "Enviando...";

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
           Toastify({

        text: "E-mail enviado com sucesso!",
        duration: 3000
        }).showToast();
        document.getElementById("contact_form").reset();
        })
        .catch((error) => {
            console.error("Erro no Envio", error);
        })
        .finally(() => {
            submitButton.textContent = "Enviar Mensagem"
        })

 });



