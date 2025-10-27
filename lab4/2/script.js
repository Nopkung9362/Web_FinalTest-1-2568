window.addEventListener('DOMContentLoaded', onload); // Still call randomnumber on load

function onload() {
    thai_lang();
}
function change_lang() {
    const change_lang_button = document.getElementById('change_lang');
    const current_text = change_lang_button.innerText;
    // delete the element within id 'change'
    const changeDiv = document.getElementById('change');
    while (changeDiv.firstChild) {
        changeDiv.removeChild(changeDiv.firstChild);
    }
    if (current_text === 'เปลี่ยนเป็นอังกฤษ') {
        eng_lang();
    } else {
        thai_lang();
    }
}
function thai_lang() {

    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;">
    //     <label style="margin: auto; width: 25%;" for="fname">ชื่อ : </label>
    //     <input type="text" class="form-control" id="fname" name="fname" placeholder="ชื่อของคุณ">
    // </div>
    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;"><label style="margin: auto ;width: 25%;"
    //         for="lname">นามสกุล : </label>
    //     <input type="text" class="form-control" id="lname" name="lname" placeholder="นามสกุลของคุณ">
    // </div>
    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;"><label style="margin: auto ;width: 25%;"for='province'>ประเทศ :</label>
    //     <select id= " province" name="province">
    //         <option value="" selected>---------- เลือกประเทศ ----------</option>
    //         <option value="ไทย">ไทย</option>
    //         <option value="เวียดนาม">เวียดนาม</option>
    //         <option value="ลาว">ลาว</option>
    //         <option value="มาเลเซีย">มาเลเซีย </option>
    //         <option value="สิงคโปร์">สิงคโปร์ </option>
    //         <option value="ฟิลิปปินส์">ฟิลิปปินส์</option>
    //         <option value="เมียนมาร์">เมียนมาร์</option>
    //         <option value="กัมพูชา">กัมพูชา </option>
    //         <option value="บรูไน">บรูไน </option>
    // </select>
    // </div>
    let divfname = document.createElement('div');
    divfname.className = 'input-group flex-nowrap';
    divfname.style.margin = '10px auto';
    divfname.style.width = '50%';
    let labelfname = document.createElement('label');
    labelfname.style.margin = 'auto';
    labelfname.style.width = '25%';
    labelfname.setAttribute('for', 'fname');
    labelfname.innerText = 'ชื่อ : ';
    let inputfname = document.createElement('input');
    inputfname.type = 'text';
    inputfname.className = 'form-control';
    inputfname.id = 'fname';
    inputfname.name = 'fname';
    inputfname.placeholder = 'ชื่อของคุณ';
    divfname.appendChild(labelfname);
    divfname.appendChild(inputfname);
    document.getElementById('change').appendChild(divfname);

    let divlname = document.createElement('div');
    divlname.className = 'input-group flex-nowrap';
    divlname.style.margin = '10px auto';
    divlname.style.width = '50%';
    let labellname = document.createElement('label');
    labellname.style.margin = 'auto';
    labellname.style.width = '25%';
    labellname.setAttribute('for', 'lname');
    labellname.innerText = 'นามสกุล : ';
    let inputlname = document.createElement('input');
    inputlname.type = 'text';
    inputlname.className = 'form-control';
    inputlname.id = 'lname';
    inputlname.name = 'lname';
    inputlname.placeholder = 'นามสกุลของคุณ';
    divlname.appendChild(labellname);
    divlname.appendChild(inputlname);
    document.getElementById('change').appendChild(divlname);

    let divprovince = document.createElement('div');
    divprovince.className = 'input-group flex-nowrap';
    divprovince.style.margin = '10px auto';

    let labelprovince = document.createElement('label');
    labelprovince.style.margin = 'auto';
    labelprovince.setAttribute('for', 'province');
    labelprovince.innerText = 'ประเทศ : ';
    
    let selectprovince = document.createElement('select');
    selectprovince.className = 'form-control'
    selectprovince.id = 'province';
    // fix length of select element
    selectprovince.name = 'province';
    selectprovince.style.margin = 'auto';
    let options = [
        { value: '', text: '------------ เลือกประเทศ ------------', selected: true },
        { value: 'ไทย', text: 'ไทย' },
        { value: 'เวียดนาม', text: 'เวียดนาม' },
        { value: 'ลาว', text: 'ลาว' },
        { value: 'มาเลเซีย', text: 'มาเลเซีย' },
        { value: 'สิงคโปร์', text: 'สิงคโปร์' },
        { value: 'ฟิลิปปินส์', text: 'ฟิลิปปินส์' },
        { value: 'เมียนมาร์', text: 'เมียนมาร์' },
        { value: 'กัมพูชา', text: 'กัมพูชา' },
        { value: 'บรูไน', text: 'บรูไน' }
    ];
    for (let option of options) {
        let option1 = document.createElement('option');
        option1.value = option.value;
        option1.text = option.text;
        selectprovince.appendChild(option1);
    }
    divprovince.appendChild(labelprovince);
    divprovince.appendChild(selectprovince);
    document.getElementById('change').appendChild(divprovince);
    

    // <div class="d-flex justify-content-center"></div>
    //     <button id="change_lang" class="btn btn-primary" onclick="change_lang()">
    //         Change Language
    //     </button>
    // </div>
    let button = document.createElement('button');
    button.id = 'change_lang';
    button.className = 'btn btn-primary';
    button.onclick = change_lang;
    button.innerText = 'เปลี่ยนเป็นอังกฤษ';
    let divButton = document.createElement('div');
    divButton.className = 'd-flex justify-content-center';
    divButton.appendChild(button);
    document.getElementById('change').appendChild(divButton);
}

function eng_lang() {

    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;">
    //     <label style="margin: auto; width: 25%;" for="fname">ชื่อ : </label>
    //     <input type="text" class="form-control" id="fname" name="fname" placeholder="ชื่อของคุณ">
    // </div>
    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;"><label style="margin: auto ;width: 25%;"
    //         for="lname">นามสกุล : </label>
    //     <input type="text" class="form-control" id="lname" name="lname" placeholder="นามสกุลของคุณ">
    // </div>
    // <div class="input-group flex-nowrap" style="margin: 10px auto; width: 20%;"><label style="margin: auto ;width: 25%;"for='province'>ประเทศ :</label>
    //     <select id= " province" name="province">
    //         <option value="" selected>---------- เลือกประเทศ ----------</option>
    //         <option value="ไทย">ไทย</option>
    //         <option value="เวียดนาม">เวียดนาม</option>
    //         <option value="ลาว">ลาว</option>
    //         <option value="มาเลเซีย">มาเลเซีย </option>
    //         <option value="สิงคโปร์">สิงคโปร์ </option>
    //         <option value="ฟิลิปปินส์">ฟิลิปปินส์</option>
    //         <option value="เมียนมาร์">เมียนมาร์</option>
    //         <option value="กัมพูชา">กัมพูชา </option>
    //         <option value="บรูไน">บรูไน </option>
    // </select>
    // </div>
    let divfname = document.createElement('div');
    divfname.className = 'input-group flex-nowrap';
    divfname.style.margin = '10px auto';
    divfname.style.width = '50%';
    let labelfname = document.createElement('label');
    labelfname.style.margin = 'auto';
    labelfname.style.width = '25%';
    labelfname.setAttribute('for', 'fname');
    labelfname.innerText = 'Full Name : ';
    let inputfname = document.createElement('input');
    inputfname.type = 'text';
    inputfname.className = 'form-control';
    inputfname.id = 'fname';
    inputfname.name = 'fname';
    inputfname.placeholder = 'Your Full Name';
    divfname.appendChild(labelfname);
    divfname.appendChild(inputfname);
    document.getElementById('change').appendChild(divfname);

    let divlname = document.createElement('div');
    divlname.className = 'input-group flex-nowrap';
    divlname.style.margin = '10px auto';
    divlname.style.width = '50%';
    let labellname = document.createElement('label');
    labellname.style.margin = 'auto';
    labellname.style.width = '25%';
    labellname.setAttribute('for', 'lname');
    labellname.innerText = 'Surname : ';
    let inputlname = document.createElement('input');
    inputlname.type = 'text';
    inputlname.className = 'form-control';
    inputlname.id = 'lname';
    inputlname.name = 'lname';
    inputlname.placeholder = 'Your Surname';
    divlname.appendChild(labellname);
    divlname.appendChild(inputlname);
    document.getElementById('change').appendChild(divlname);

    let divprovince = document.createElement('div');
    divprovince.className = 'input-group flex-nowrap';
    divprovince.style.margin = '10px auto';
    divprovince.style.width = '50%';
    let labelprovince = document.createElement('label');
    labelprovince.style.margin = 'auto';
    labelprovince.style.width = '25%';
    labelprovince.setAttribute('for', 'province');
    labelprovince.innerText = 'Country : ';
    
    let selectprovince = document.createElement('select');
    selectprovince.id = 'province';
    selectprovince.name = 'province';
    selectprovince.style.margin = 'auto';
    let options = [
        { value: '', text: '----------- Choose Country -----------', selected: true },
        { value: 'ไทย', text: 'Thai' },
        { value: 'เวียดนาม', text: 'Vietnam' },
        { value: 'ลาว', text: 'Lao' },
        { value: 'มาเลเซีย', text: 'Malaysia' },
        { value: 'สิงคโปร์', text: 'Singapore' },
        { value: 'ฟิลิปปินส์', text: 'Philipiness' },
        { value: 'เมียนมาร์', text: 'Myannar' },
        { value: 'กัมพูชา', text: 'Cambodia' },
        { value: 'บรูไน', text: 'Brunai' }
    ];
    for (let option of options) {
        let option1 = document.createElement('option');
        option1.value = option.value;
        option1.text = option.text;
        selectprovince.appendChild(option1);
    }
    divprovince.appendChild(labelprovince);
    divprovince.appendChild(selectprovince);
    document.getElementById('change').appendChild(divprovince);
    

    // <div class="d-flex justify-content-center"></div>
    //     <button id="change_lang" class="btn btn-primary" onclick="change_lang()">
    //         Change Language
    //     </button>
    // </div>
    let button = document.createElement('button');
    button.id = 'change_lang';
    button.className = 'btn btn-primary';
    button.onclick = change_lang;
    button.innerText = 'Change to Thai';
    let divButton = document.createElement('div');
    divButton.className = 'd-flex justify-content-center';
    divButton.appendChild(button);
    document.getElementById('change').appendChild(divButton);
}