var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.fname= document.getElementById('fname');
    fields.lname = document.getElementById('lname');
    fields.eaddress = document.getElementById('eaddress');
    fields.question = document.getElementById('question');
    })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
    }

class User {
    constructor(fname, lname, eaddress, question) {
    this.fname = fname;
    this.lname = lname;
    this.eaddress = eaddress;
    this.question = question;
    }
}