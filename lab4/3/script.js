window.addEventListener('DOMContentLoaded', onload); // Still call randomnumber on load
function onload() {
    let p1 = document.getElementById('total');
    let total = document.createTextNode(0);
    p1.appendChild(total)
}

function calculate() {
    let date = document.getElementById('datetime').value;
    let menu = document.getElementById('menu').value;
    let amount = parseInt(document.getElementById('amount').value);
    let how = document.getElementById('how').value;
    if (how == 'รายจ่าย') {
        let tr1 = document.createElement('tr');
        let td_date = document.createElement('td');
        let date1 = document.createTextNode(date);
        let td_menu = document.createElement('td');
        let menu1 = document.createTextNode(menu);
        let td_get = document.createElement('td');
        let get = document.createTextNode(0);
        let td_pay = document.createElement('td');
        let pay = document.createTextNode(amount);
        td_date.appendChild(date1);
        td_menu.appendChild(menu1);
        td_get.appendChild(get);
        td_pay.appendChild(pay);
        tr1.appendChild(td_date);
        tr1.appendChild(td_menu);
        tr1.appendChild(td_get);
        tr1.appendChild(td_pay);
        // align text
        td_date.style.textAlign = 'center';
        td_menu.style.textAlign = 'center';
        td_get.style.textAlign = 'center';
        td_pay.style.textAlign = 'center';
        // Append tr1 to the table
        let table = document.getElementById('test');
        table.appendChild(tr1);

        // Update total in p element
        let p1 = document.getElementById('total');
        let currentTotal = parseInt(p1.textContent) || 0;
        let newTotal = currentTotal - amount;
        p1.textContent = newTotal;
    }
    else {
        let tr1 = document.createElement('tr');
        let td_date = document.createElement('td');
        let date1 = document.createTextNode(date);
        let td_menu = document.createElement('td');
        let menu1 = document.createTextNode(menu);
        let td_get = document.createElement('td');
        let get = document.createTextNode(amount);
        let td_pay = document.createElement('td');
        let pay = document.createTextNode(0);
        td_date.appendChild(date1);
        td_menu.appendChild(menu1);
        td_get.appendChild(get);
        td_pay.appendChild(pay);
        tr1.appendChild(td_date);
        tr1.appendChild(td_menu);
        tr1.appendChild(td_get);
        tr1.appendChild(td_pay);
        td_date.style.textAlign = 'center';
        td_menu.style.textAlign = 'center';
        td_get.style.textAlign = 'center';
        td_pay.style.textAlign = 'center';
        // Append tr1 to the table
        let table = document.getElementById('test');
        table.appendChild(tr1);

        // Update total in p element
        let p1 = document.getElementById('total');
        let currentTotal = parseInt(p1.textContent) || 0;
        let newTotal = currentTotal + amount;
        p1.textContent = newTotal;
    }
}
