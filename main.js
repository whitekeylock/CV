function myFunction() {
    var copyText = document.getElementById("pgp");

    // Create a range object and select the text
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
    try {
        document.execCommand("copy");
        // Use SweetAlert2 
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'The PGP key has been copied to the clipboard.',
            confirmButtonText: 'Okay',
        });
    } catch (err) {
        console.error("Unable to copy text: ", err);
    }

    // Clear the selection
    window.getSelection().removeAllRanges();
}