'use strict'

const btn_pdf = document.getElementById('btn_pdf')
const container_main = document.getElementById('container_main')
const loader = document.getElementById('loader')

const url = {
    ip: '192.168.1.67',
    port: 3000
}

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: true })
}

btn_pdf.addEventListener('click', () => {

    container_main.style.display = 'none'
    loader.style.display = 'block'

    const _url = `http://${url.ip}:${url.port}/pdf`

    if (document.getElementById("icon_pdf") !== null) {
        Reset()
        return
    }

    fetch(_url, config)
        .then(res => res.json())
        .then(res => {

            const img = document.createElement('img')
            img.src = 'https://image.flaticon.com/icons/svg/337/337946.svg'
            img.id = 'icon_pdf'
            document.getElementById('div_pdf').appendChild(img)
            document.getElementById('icon_pdf').setAttribute('onclick', "window.open('/report.pdf', '_blank')")
            Reset()

        }).catch(err => {
            Reset()
            alert('Error:' + err)
        })

})

function Reset() {
    loader.style.display = 'none'
    container_main.style.display = 'block'
    iziToast.show({
        id: 'haduken',
        theme: 'dark',
        icon: 'icon-contacts',
        title: 'PDF generado correctamente.',
        message: 'Revise al final de la página.',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'https://image.flaticon.com/icons/svg/337/337946.svg',
        imageWidth: 50,
        layout: 2,
        backgroundColor: '#D9534F',
        iconColor: 'rgb(0, 255, 184)'
    });
}