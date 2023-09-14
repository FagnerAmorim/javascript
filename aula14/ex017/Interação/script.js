function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while (c <= 10) {
            // mudandça de tipo de conta manualmente no campo item.text
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`//habilitada para conta de multiplicação
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}