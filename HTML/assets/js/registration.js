function RegisterView(){
    //language=HTML
    return`
     <div class="container">
        <form id="form1">
            <h3>Create Account</h3>
            <input type="fname" placeholder="First Name">
            <input type="lname" placeholder="Last Name">
            <input type="DOB" placeholder="DOB (format YYYY-MM-DD)">
            <input type="SSN" placeholder="SSN (format ###-##-####)">
            <input type="text" placeholder="Email">
            <input type="username" placeholder="Enter your desired username">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Type your password again">
            <br>
            <br>
            <div class="btn-box">
                <button type="button" id="next1" class="submit btn-primary">Next>>></button>
            </div>
        </form>
        <!--Form page 3-->
        <form id="form2">
            <h3>Veteran Verification</h3>
            <span class="loader"></span>

            <div class="btn-box">
                <button type="button" id="back1" class="submit btn-primary"><<< Back</button>
                <button type="button" id="next2" class="submit btn-primary">Next>>></button>
            </div>
        </form>
        <!--Form page 4-->
        <form id="form3">
            <h3>Verification Status - Approved</h3>
            <h1>You have been vetted and approved! Please select your desired communities.</h1>
            <div class="community-container">
                <ul class="ks-cboxtags">
                    <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash"><label for="checkboxOne">PTSD</label></li>
                    <li><input type="checkbox" id="checkboxTwo" value="Cotton Candy" checked><label for="checkboxTwo">Anxiety</label></li>
                    <li><input type="checkbox" id="checkboxThree" value="Rarity" checked><label for="checkboxThree">Depression</label></li>
                    <li><input type="checkbox" id="checkboxFour" value="Moondancer"><label for="checkboxFour">Substance Misuse</label></li>
                    <li><input type="checkbox" id="checkboxFive" value="Surprise"><label for="checkboxFive">Sexual Addiction</label></li>
                    <li><input type="checkbox" id="checkboxSix" value="Twilight Sparkle" checked><label for="checkboxSix">General Mental Health</label></li>
                    <li><input type="checkbox" id="checkboxSeven" value="Fluttershy"><label for="checkboxSeven">Eating Disorder</label></li>
                    <li><input type="checkbox" id="checkboxEight" value="Derpy Hooves"><label for="checkboxEight">Personality Disorder</label></li>
                    <li><input type="checkbox" id="checkboxNine" value="Princess Celestia"><label for="checkboxNine">Mood Disorder</label></li>
                    <li><input type="checkbox" id="checkboxTen" value="Gusty"><label for="checkboxTen">Phobias</label></li>
                    <li class="ks-selected"><input type="checkbox" id="checkboxEleven" value="Discord"><label for="checkboxEleven">Obsessive Compulsive Disorder</label></li>
                    <li><input type="checkbox" id="checkboxTwelve" value="Clover"><label for="checkboxTwelve">Panic Disorder</label></li>
                </ul>
            </div>
            <h4>By click submit, you are agreeing to Vetted <a href="https://benice.com/">community guidelines.</a></h4>
            <div class="btn-box">
                <button type="button" id="back2" class="submit btn-primary"><<< Back</button>
                <button type="button" class="submit btn-primary">Submit>>></button>
            </div>
        </form>

        <div class="step-row">
            <div id="progress"></div>
            <div class="step-col"><small>Step 1</small></div>
            <div class="step-col"><small>Step 2</small></div>
            <div class="step-col"><small>Step 3</small></div>
        </div>
    </div>
    `;
}
function RegisterEvent(){
    let form1 = document.getElementById("form1");
    let form2 = document.getElementById("form2");
    let form3 = document.getElementById("form3");

    let progress = document.getElementById("progress");

    $(document).on('click', '.next1', function () {
        form1.style.left = "-450px";
        form2.style.left = "40px";
        progress.style.width = "240px";
    })

    $(document).on('click', '.back1', function () {
        form1.style.left = "40px";
        form2.style.left = "450px";
        progress.style.width = "120px";
    })

    $(document).on('click', '.next2', function () {
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    })

    $(document).on('click', '.back2', function () {
        form1.style.left = "40px";
        form2.style.left = "450px";
        progress.style.width = "240px";
    })
}