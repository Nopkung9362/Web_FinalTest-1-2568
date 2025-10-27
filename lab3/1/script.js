function validateForm() {    

    let id = document.getElementById("ID").value;
    if (id.length != 13) {
        alert("ID must be 13 characters long.");
        return false;
    }

    // check if title is selected from radio input if no title is selected
    // then alert user to select title
    let title = document.querySelector('input[name="title"]:checked');
    if (!title) {  
        alert("Title must be selected.");
        return false;
    } else {
        title = title.value; // get the value of the selected title
    }

    let fname = document.getElementById("FirstName").value; 
    if ((fname.length < 2) || (fname.length > 20) || (!fname)) {
        alert("FirstName must be between 2 and 20 characters long.");
        return false;
    }

    let lname = document.getElementById("LastName").value;
    if ((lname.length < 2) || (lname.length > 20) || (!lname)) {
        alert("LastName must be between 2 and 20 characters long.");
        return false;
    }

    let address = document.getElementById("Address").value;
    if (address.length < 15) {
        alert("Address must be at least 15 characters long.");
        return false;
    }

    let subdistrict = document.getElementById("subdistrict").value;
    if (subdistrict.length < 2) {
        alert("Subdistrict must be at least 2 characters long.");
        return false;
    }

    let district = document.getElementById("district").value;
    if (district.length < 2) {
        alert("District must be at least 2 characters long.");
        return false;
    }

    let province = document.getElementById("province").value;
    if (!province) {
        alert("Province must be selected.");
        return false;
    }

    let zipcode = document.getElementById("zipcode").value;
    if (zipcode.length != 5 || isNaN(zipcode)) {
        alert("Zipcode must be a 5-digit number.");
        return false;
    }
    // If all validations pass and when click button, return true
    // to indicate that the form is valid
    // and can be submitted or processed further.
    alert("Form is valid. You can proceed.");
    return true;
}

/**
     - การตรวจสอบความยาวของตัวอักษร
     let str = new String( "This is string" );
     document.write("str.length is:" + str.length);
     // str.length is: 14
     - การหาตำแหน่งข้อความในชุดตัวอักษร
     let str = "Hello world, welcome to the universe.";
     let n = str.indexOf("welcome"); 
     // n = 13
*/