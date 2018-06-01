'use strict'

const btn_pdf = document.getElementById('btn_pdf')
const container_main = document.getElementById('container_main')
const loader = document.getElementById('loader')

btn_pdf.addEventListener('click', () => {

    container_main.style.display = 'none'
    loader.style.display = 'block'

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: true })
    }

    fetch('http://192.168.1.66:3000/pdf', config)
        .then( res => {
            res.json()
        })
        .then( res => {

            const img = document.createElement('img')
            img.src = 'https://image.flaticon.com/icons/svg/337/337946.svg'
            img.id = 'icon_pdf'
            document.getElementById('div_pdf').appendChild(img)
            document.getElementById('icon_pdf').setAttribute('onclick', "window.open('/report.pdf', '_blank')")
            loader.style.display = 'none'
            container_main.style.display = 'block'

        }).catch(err => {
            loader.style.display = 'none'
            container_main.style.display = 'block'
            alert('Error:' + err)
        })

})


