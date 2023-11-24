(function ($) {

    $(document).ready(function () {
        
        // for toggle sign up form to log in form
        $('#loginpagea').on('click', function (e) {
            e.preventDefault();
            $('#formsign').toggle();
            $('#formlog').toggle();
            $('#foot').show();
        });

        // for toggle log in form to sign in form
        $('#signuppagea').on('click', function (e) {
            e.preventDefault();
            $('#formsign').toggle();
            $('#formlog').toggle();
            $('#foot').hide();
        });

        //------------------------------------sign up validation-----------------------------------//

        // for password hide and show sign up
        $('#showhidesign').on('click', function (e) {
            e.preventDefault();
            var passwordField = $('#ipasssign');
            passwordField.toggleClass('hiddens');
            var passwordFieldType = passwordField.attr('type');
            if (passwordFieldType === 'password') {
                passwordField.attr('type', 'text');
                $(this).html('<i class="bi bi-eye-slash"></i> Hide');
            } else {
                passwordField.attr('type', 'password');
                $(this).html('<i class="bi bi-eye"></i>Show');
            }
        });

        //for the buttons onclick 
        function openLink(link) {
            window.open(link, "_self")
        }

        $("#facebtns").click(function (e) {
            e.preventDefault();
            openLink("https://www.facebook.com/");
        });

        $("#googlebtns").click(function (e) {
            e.preventDefault();
            openLink("https://www.google.com/");
        });

        $("#githubbtns").click(function (e) {
            e.preventDefault();
            openLink("https://github.com/");
        });

        $("#feidebtns").click(function (e) {
            e.preventDefault();
            openLink("https://www.feide.no/");
        });

        //Email input change event
        $('#isemail').on('input', function () {
            validateEmail();
        });

        $('#passcheck li::before').css('background-color', 'green');

        // Password input change event
        $('#ipasssign').on('input', function () {
            validatePassword();
        });

        //Email validation function
        function validateEmail() {
            var email = $('#isemail').val();
            var customPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!email) {
                setValidationIcon('emailIcon', '', '');
                $('#isemail').css('border-color', '');
                $('#isemail').css('box-shadow', '');
                return;
            } else if (!customPattern.test(email)) {
                setValidationIcon('emailIcon', '', '');
                $('#isemail').css('border-color', '');
                $('#isemail').css('box-shadow', '');
                return;
            } else {
                setValidationIcon('emailIcon', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#isemail').css('border-color', 'green');
                $('#isemail').css('box-shadow', '');
                $('#error').hide("fast");
            }
        }

        //Password validation function
        function validatePassword() {
            var password = $('#ipasssign').val();
            var hasUppercase = /[A-Z]/.test(password);
            var hasLowercase = /[a-z]/.test(password);
            var hasNumber = /\d/.test(password);
            var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(password);
            var hasMinimumLength = password.length >= 8;

            // Check all conditions
            $('#uppercase').css('color', hasUppercase ? 'gray' : 'initial');
            $('#lowercase').css('color', hasLowercase ? 'gray' : 'initial');
            $('#onenumber').css('color', hasNumber ? 'gray' : 'initial');
            $('#specialchar').css('color', hasSpecialChar ? 'gray' : 'initial');
            $('#minimumnum').css('color', hasMinimumLength ? 'gray' : 'initial');

            $('#uppercase').toggleClass('valid', hasUppercase);
            $('#lowercase').toggleClass('valid', hasLowercase);
            $('#onenumber').toggleClass('valid', hasNumber);
            $('#specialchar').toggleClass('valid', hasSpecialChar);
            $('#minimumnum').toggleClass('valid', hasMinimumLength);

            // Check all conditions
            var allConditionsMet = hasUppercase && hasLowercase && hasNumber && hasSpecialChar && hasMinimumLength;

            // Update password indicator and border color
            if (allConditionsMet) {
                setValidationIcons('passwordIcon', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#ipasssign').css('border-color', 'green');
                $('#strongPassword').show();
                $('#passcheck').hide();
                $('#errorBox').hide("fast");
                $('#ipasssign').css('box-shadow', '');
            } else {
                setValidationIcons('passwordIcon', '', '');
                $('#ipasssign').css('border-color', '');
                $('#strongPassword').hide();
                $('#passcheck').show();
            }
        }

        //set validation icon section for email
        function setValidationIcon(elementId, icon, color) {
            $('#' + elementId).html(icon);
            $('#' + elementId).css('color', color);
        }

        //set validation icon section for password
        function setValidationIcons(elementId, icon, color) {
            $('#' + elementId).html(icon);
            $('#' + elementId).css('color', color);
        }

        // for validate all the condition are satisfy or not when click the sign up button
        $('#isignbtn').click(function (event) {
            event.preventDefault();

            var email = $('#isemail').val();
            var password = $('#ipasssign').val();
            var customPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~]).{8,}$/;

            // for email validation
            if (!email) {
                setValidationIcon('emailIcon', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#error').text('Please enter an email');
                $('#isemail').css('border-color', 'red');
                $('#isemail').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                $('#error').show();
                return;
            } else if (!customPattern.test(email)) {
                setValidationIcon('emailIcon', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#error').text('Looks like you forgot something');
                $('#isemail').css('border-color', 'red');
                $('#isemail').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                $('#error').show();
                return;
            } else {
                setValidationIcon('emailIcon', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#isemail').css('border-color', 'green');
                $('#isemail').css('box-shadow', '');
                $('#error').hide("fast");
            }

            // for password validation
            var password = $('#ipasssign').val();
            if (!password) {
                setValidationIcons('passwordIcon', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#errorBox').text('Password is required');
                $('#ipasssign').css('border-color', 'red');
                $('#ipasssign').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                $('#errorBox').show();
                return;
            } else if (!password.match(passwordPattern)) {
                setValidationIcons('passwordIcon', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#errorBox').text('Password requirements not met');
                $('#ipasssign').css('border-color', 'red');
                $('#ipasssign').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                $('#errorBox').show();
                return;
            } else {
                $('#ipasssign').css('border-color', 'green');
                $('#ipasssign').css('box-shadow', '');
                $('#errorBox').hide("fast");
            }

            function setValidationIcon(elementId, icon, color) {
                $('#' + elementId).html(icon);
                $('#' + elementId).css('color', color);
            }

            // verify check box validation
            var isVerCheckChecked = $('#vercheck').is(':checked');
            if (!isVerCheckChecked) {
                alert('Please agree to receive email updates');
                return;
            }

            // alert message when all condition satisfy
            alert('Sign Up Successful! New user created.');
            $('#ipasssign').css('border-color', '');
            $('#isemail').css('border-color', '');
            $('#isemail').val('');
            $('#ipasssign').val('');
            $('#strongPassword').hide();
            $('#passcheck').show('');
            $('#passcheck').val('');
            $('#uppercase').css('color', 'initial').removeClass('valid');
            $('#lowercase').css('color', 'initial').removeClass('valid');
            $('#onenumber').css('color', 'initial').removeClass('valid');
            $('#specialchar').css('color', 'initial').removeClass('valid');
            $('#minimumnum').css('color', 'initial').removeClass('valid');
            $('#emailIcon').html('');
            $('#passwordIcon').html('');
            document.getElementById('vercheck').checked = true;
            $('#showhidesign').html('<i class="bi bi-eye"></i>Show');
            $('#ipasssign').attr('type', 'password').addClass('hiddens');
        });

        // ---------------------------------------log in validation---------------------------------------------- //

        // for password hide and show login
        $('#showhidelog').on('click', function (e) {
            e.preventDefault();
            var passwordField = $('#ipasslog');
            passwordField.toggleClass('hidden');
            var passwordFieldType = passwordField.attr('type');
            if (passwordFieldType === 'password') {
                passwordField.attr('type', 'text');
                $(this).html('<i class="bi bi-eye-slash"></i> Hide');
            } else {
                passwordField.attr('type', 'password');
                $(this).html('<i class="bi bi-eye"></i>Show');
            }
        });

        //Email input change event in log in form
        $('#ilemail').on('input', function () {
            validateEmails();
        });

        //Password inpt change event in log in form
        $('#ipasslog').on('input', function () {
            validatePasswords();
        });

        //Email validation function in log in form
        function validateEmails() {
            var email = $('#ilemail').val();
            var customPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!email) {
                $('#ilemail').css('border-color', '');
                setValidationIcon('emailIconlog', '', '');
                $('#ilemail').css('box-shadow', '');
                return;
            } else if (!customPattern.test(email)) {
                setValidationIcon('emailIconlog', '', '');
                $('#ilemail').css('box-shadow', '');
                $('#ilemail').css('border-color', '');
                return;
            } else {
                setValidationIcon('emailIconlog', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#ilemail').css('border-color', 'green');
                $('#ilemail').css('box-shadow', '');
                $('#errors').hide("fast");
            }
        }

        //Password validation function in log in form
        function validatePasswords() {
            var password = $('#ipasslog').val();
            var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~]).{8,}$/;

            if (password === '') {
                $('#ipasslog').css('border-color', '');
                setValidationIcons('passwordIconlog', '', '');
                $('#ipasslog').css('box-shadow', '');
            } else if (!password.match(passwordPattern)) {
                $('#ipasslog').css('border-color', '');
                setValidationIcons('passwordIconlog', '', '');
                $('#ipasslog').css('box-shadow', '');
                // $('#errorBo').text('Password requirements not met');
                // $('#ipasslog').css('border-color', 'red');
            } else {
                setValidationIcons('passwordIconlog', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#ipasslog').css('border-color', 'green');
                $('#errorBo').hide();
                $('#ipasslog').css('box-shadow', '');
            }
        }

        function setValidationIcon(elementId, icon, color) {
            $('#' + elementId).html(icon);
            $('#' + elementId).css('color', color);
        }

        //set validation icon section for password
        function setValidationIcons(elementId, icon, color) {
            $('#' + elementId).html(icon);
            $('#' + elementId).css('color', color);
        }

        // for validate all the condition are satisfy or not when click the log in button
        $('#ilogbtn').on('click', function (e) {
            e.preventDefault();

            var email = $('#ilemail').val();
            var password = $('#ipasslog').val();
            var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()_+{}\[\]:;<>,.?~]).{8,}$/;
            var gmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // for email validation
            if (!email) {
                setValidationIcon('emailIconlog', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#errors').text('Please enter an email');
                $('#ilemail').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315)');
                $('#ilemail').css('border-color', 'red');
                $('#errors').show();
                return;
            } else if (!gmailPattern.test(email)) {
                setValidationIcon('emailIconlog', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#errors').text('Looks like you forgot something');
                $('#ilemail').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                $('#ilemail').css('border-color', 'red');
                $('#errors').show();
                return;
            } else {
                setValidationIcon('emailIconlog', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#ilemail').css('border-color', 'green');
                $('#ilemail').css('box-shadow', '');
                $('#errors').hide();
            }

            function setValidationIcon(elementId, icon, color) {
                $('#' + elementId).html(icon);
                $('#' + elementId).css('color', color);
            }

            function setValidationIcons(elementId, icon, color) {
                $('#' + elementId).html(icon);
                $('#' + elementId).css('color', color);
            }

            const userCredentials = [
                { email: "user1@gmail.com", password: "Pass@123" },
                { email: "user2@rifluxyss.com", password: "Riflu@123" },
                { email: "user3@info.com", password: "secure@PW1" },
                { email: "user4@yahoo.com", password: "Passya@42" },
                { email: "user5@careers.com", password: "userPass@123" },
                { email: "user6@rifinfo.com", password: "newPass!987" },
                { email: "user7@gmail.com", password: "example!PWD789" },
                { email: "user8@gmail.com", password: "passWORD@123" },
                { email: "user9@gmail.com", password: "qwertyPass1" },
                { email: "user10@gmail.com", password: "P@ssword432" }
            ];
            const validCredentials = userCredentials.some(cred => cred.email === email && cred.password === password);

            // for password validation
            if (password === '') {
                setValidationIcons('passwordIconlog', '<i class="bi bi-exclamation-circle" style=" font-size:14px;"></i>', 'red');
                $('#errorBo').html('<i class="bi bi-exclamation-circle" style="color: red; margin-left:10px;"></i>  Please enter your password.');
                $('#ipasslog').css('border-color', 'red');
                $('#ipasslog').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315)');
                $('#errorBo').show();
                return;
            } else if (!password.match(passwordPattern)) {
                $('#errorBo').html('<i class="bi bi-exclamation-circle" style="color: red; margin-left:10px;"></i>  Password requirements not met');
                $('#ipasslog').css('border-color', 'red');
                $('#ipasslog').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315)');
                $('#errorBo').show();
                return;
            } else if (!validCredentials) {
                $('#errorBo').html('<i class="bi bi-exclamation-circle" style="color: red; margin-left:10px;"></i>  Invalid email or password. Please try again.');
                $('#ipasslog').css('border-color', 'red');
                setValidationIcons('passwordIconlog', '', '');
                $('#ipasslog').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px rgba(196, 37, 37, 0.315)');
                $('#ilemail').css('box-shadow', '0 2px 2px 0 rgba(196, 37, 37, 0.315), 0px 0px 0px 2px  rgba(196, 37, 37, 0.315) ');
                setValidationIcon('emailIconlog', '<i class="bi bi-exclamation-circle"></i>', 'red');
                $('#ilemail').css('border-color', 'red');
                $('#errorBo').show();
                return;
            } else {
                setValidationIcons('passwordIconlog', '<i class="bi bi-check" style=" font-size:20px;"></i>', 'green');
                $('#ipasslog').css('border-color', 'green');
                $('#ipasslog').css('box-shadow', '');
                $('#errorBo').hide();
            }

            // if all condition are satisfy then show login successful
            alert("Login successful!");

            $('#ilemail').val('');
            $('#ipasslog').val('');
            $('#errorBo').hide();
            $('#ipasslog').css('border-color', '');
            $('#ilemail').css('border-color', '');
            $('#emailIconlog').html('');
            $('#passwordIconlog').html('');
            $('#showhidelog').html('<i class="bi bi-eye"></i>Show');
            $('#ipasslog').attr('type', 'password').addClass('hidden');

        });

        //Below all foe the login form buttons like facebook, google , github and feide
        $("#facebtnl").click(function (e) {
            e.preventDefault();
            openLink("https://www.facebook.com/");
        });

        $("#googlebtnl").click(function (e) {
            e.preventDefault();
            openLink("https://www.google.com/");
        });

        $("#githubbtnl").click(function (e) {
            e.preventDefault();
            openLink("https://github.com/");
        });

        $("#feidebtnl").click(function (e) {
            e.preventDefault();
            openLink("https://www.feide.no/");
        });

    });
})(jQuery);