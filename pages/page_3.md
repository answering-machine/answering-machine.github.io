
<form id="myFormToSubmit" action="your_server_script.php" method="post">
    <div>
        <textarea
            id="mySizedText"
            name="userText"
            style="width: 768px; height: 100px;"
        >This is the pre-filled text that will appear in the textbox.
You can edit it.
It can even span multiple lines, just like this.\n
Make sure to replace this with your actual desired pre-filled content!
Special characters like <, >, & should be HTML encoded if they are part of the text content you want to display literally (e.g., < for <). However, for plain text, you usually don't need to worry.</textarea>
        <!-- No explicit submit button here -->
    </div>
</form>

<script>
    const textarea = document.getElementById('mySizedText');
    const form = document.getElementById('myFormToSubmit');

    textarea.addEventListener('keydown', function(event) {
        // Check if the Enter key was pressed
        // event.key === "Enter" is the modern way
        // event.keyCode === 13 is for older browser compatibility (optional)
        if (event.key === 'Enter' || event.keyCode === 13) {
            // IMPORTANT: Prevent the default action of Enter key in a textarea
            // (which is to add a new line)
            event.preventDefault();

            // Now, submit the form
            if (form) {
                form.submit();
            } else {
                console.error("Form with ID 'myFormToSubmit' not found!");
            }
        }
    });
</script>

