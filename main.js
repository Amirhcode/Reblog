function goToStep1() {
    document.getElementById("Customization").classList.remove("step-primary");
    document.getElementById("Content").classList.add("step-primary");
    document.getElementById("step2Content").style.display = "none";
    document.getElementById("step1Content").style.display = "block";
    document.getElementById("step3Content").style.display = "none";
    updatePreview();
}

function goToStep2() {
    document.getElementById("Content").classList.remove("step-primary");
    document.getElementById("Customization").classList.add("step-primary");
    document.getElementById("step1Content").style.display = "none";
    document.getElementById("step2Content").style.display = "block";
    document.getElementById("step3Content").style.display = "none";
    updatePreview();
}

function goToStep3() {
    document.getElementById("Customization").classList.remove("step-primary");
    document.getElementById("Production").classList.add("step-primary");
    document.getElementById("step2Content").style.display = "none";
    document.getElementById("step3Content").style.display = "block";
    updatePreview();
}

function goToStep4() {
    document.getElementById("Production").classList.remove("step-primary");
    document.getElementById("ResPreview").classList.add("step-primary");
    document.getElementById("step3Content").style.display = "none";
    document.getElementById("step4Content").style.display = "block";
    updatePreview();
}

function GenerateCode() {
    var image = document.getElementById("ReblogAvator").value || "https://via.placeholder.com/42";
    var link = document.getElementById("ReblogUrl").value || "https://blog.ir";
    var firstname = document.getElementById("ReblogAuther").value || "امیرحسین";
    var time = document.getElementById("ReblogDate").value || "۲۰ آذر";
    var username = document.getElementById("ReblogUsername").value || "Amirhossein";
    var content = document.getElementById("ReblogCode").value || " مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…";

    var code = `
        <style>
        .ReblogView {
            position: relative
        }

        .ReblogView {
            max-width: 600px;
            min-width: 400px
        }

        .ReblogView {
            border-width: 3px;
            border-style: solid
        }

        .ReblogBorder1 {
            border-color: rgba(77, 172, 254, 95%)
        }

        .ReblogBorder2 {
            border-color: rgba(255, 8, 68, 95%)
        }

        .ReblogBorder3 {
            border-color: rgba(68, 233, 123, 95%)
        }

        .ReblogBorder4 {
            border-color: rgba(102, 127, 234, 95%)
        }

        .ReblogBorder5 {
            border-color: rgba(247, 141, 160, 95%)
        }

        .ReblogView {
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px
        }

        .ReblogView {
            padding-top: 20px;
            padding-left: 25px;
            padding-right: 25px;
            padding-bottom: 20px
        }

        .ReblogView {
            border-radius: 12px;
        }

        .DarkReblogView {
            background-color: #161616
        }

        .LightReblogView {
            background-color: #FFFFFF
        }

        .ReblogView::before {
            content: ''
        }

        .ReblogView::before {
            float: left
        }

        .ReblogView::before {
            margin-top: 25px
        }

        .ReblogView::before {
            width: 24px;
            height: 24px
        }

        .ReblogView::before {
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url('https://www.svgrepo.com/show/466014/retweet.svg');
        }

        .DarkReblogView::before {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(107deg) brightness(103%) contrast(101%)
        }

        .ReblogFlex {
            display: flex;
            flex-direction: row
        }

        .ReblogImage {
            width: 48px;
            height: 48px
        }

        .ReblogImage {
            padding: 2px
        }

        .ReblogImage {
            margin-top: 12px;
            margin-left: 12px
        }

        .ReblogImage {
            border-radius: 50%
        }

        .ReblogGradient1 {
            background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%)
        }

        .ReblogGradient2 {
            background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        }

        .ReblogGradient3 {
            background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%)
        }

        .ReblogGradient4 {
            background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
        }

        .ReblogGradient5 {
            background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
        }

        .ReblogFirstName {
            color: #252525;
        }

        .DarkReblogView .ReblogFirstName {
            color: #FAFAFA
        }

        .ReblogFirstName {
            font-size: 16px;
            font-weight: bolder;
        }

        .ReblogFirstName {
            padding-top: 14px
        }

        .ReblogID {
            padding-top: 3px;
            padding-bottom: 3px
        }

        .ReblogWeb {
            opacity: 60%
        }

        .ReblogWeb {
            font-size: 13px;
            font-weight: 300
        }

        .ReblogWeb {
            text-decoration: none
        }

        .ReblogWeb {
            color: #252525
        }

        .DarkReblogView .ReblogWeb {
            color: #FAFAFA
        }

        .ReblogContent {
            color: #252525
        }

        .DarkReblogView .ReblogContent {
            color: #FAFAFA
        }

        .ReblogContent {
            line-height: 1.9
        }

        .ReblogContent {
            font-size: 16px;
            font-weight: normal;
            text-align: justify
        }

        .ReblogContent {
            padding-top: 25px;
            padding-bottom: 45px
        }

        .ReblogTimes,
        .ReblogRedirect {
            bottom: 20px;
            position: absolute
        }

        .ReblogTimes {
            right: 20px
        }

        .ReblogRedirect {
            left: 20px
        }

        .ReblogTime {
            padding-top: 6px;
            display: inline-block
        }

        .ReblogTime,
        .ReblogRedirect {
            color: #252525
        }

        .DarkReblogView .ReblogTime, 
        .DarkReblogView .ReblogRedirect {
            color: #FAFAFA
        }

        .ReblogTime,
        .ReblogRedirect {
            opacity: 60%
        }

        .ReblogTime,
        .ReblogRedirect {
            font-size: 14px;
            font-weight: normal
        }

        .TimeIcon,
        .RedirectIcon {
            width: 24px;
            height: 24px;
        }

        .TimeIcon {
            float: right
        }

        .TimeIcon {
            opacity: 50%
        }

        .TimeIcon {
            margin-left: 6px
        }

        .RedirectIcon {
            float: left
        }
        
        .TimeIcon,
        .RedirectIcon {
            background-size: contain;
            background-repeat: no-repeat
        }

        /*
        .TimeIcon {
            background-image: url('https://www.svgrepo.com/show/525711/calendar.svg');
        }
        */

        .RedirectIcon {
            background-image: url('https://www.svgrepo.com/show/525982/link-circle.svg');
        }

        .DarkReblogView .TimeIcon,
        .DarkReblogView .RedirectIcon {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(107deg) brightness(103%) contrast(101%)
        }
        </style>
        <div class="ReblogView ${getSelectedBGClasses()} ${getSelectedBordersClasses()}">
        <div class="ReblogAvatar">
            <div class="ReblogFlex">
                <img src="${image}" class="ReblogImage ${getSelectedGradientClasses()}" alt="${firstname}" />
                <div class="ReblogFirstName">
                    ${firstname}
                    <div class="ReblogID">
                        <a href="#" class="ReblogWeb">${username}</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="ReblogContent">
            <p class="ReblogParagraph">${content}</p>
        </div>

        <div class="ReblogTimes">
            <div class="TimeIcon"></div>
            <time class="ReblogTime">${time}</time>
        </div>

        <div class="ReblogRedirect">
            <a href="${link}" class="ReblogLink" target="_blank"><i class="RedirectIcon"></i></a>
        </div>
    </div>
    `;
    document.getElementById("ReblogYourCode").value = code;
}

function updateGradientSelection(selectedId) {
    const gradientc = document.querySelectorAll('input[name="GradientColor"]');
    gradientc.forEach(button => {
        if (button.id !== selectedId) {
            button.checked = false;
        }
    });
}

function getSelectedGradientClasses() {
    var classes = [];

    if (document.getElementById("GradientBlue").checked) {
        classes.push("ReblogGradient1");
    }
    if (document.getElementById("GradientRed").checked) {
        classes.push("ReblogGradient2");
    }
    if (document.getElementById("GradientGreen").checked) {
        classes.push("ReblogGradient3");
    }
    if (document.getElementById("GradientPurple").checked) {
        classes.push("ReblogGradient4");
    }
    if (document.getElementById("GradientPink").checked) {
        classes.push("ReblogGradient5");
    }

    if (classes.length === 0) {
        classes.push("ReblogGradient5");
    }

    return classes.join(" ");
}

function updateBGSelection(selectedId) {
    const darkbtn = document.querySelectorAll('input[name="RadioSelector"]');
    darkbtn.forEach(button => {
        if (button.id !== selectedId) {
            button.checked = false;
        }
    });
}

function getSelectedBGClasses() {
    var classes = [];

    if (document.getElementById("DarkSelector").checked) {
        classes.push("DarkReblogView");
    }
    if (document.getElementById("LightSelector").checked) {
        classes.push("LightReblogView");
    }

    if (classes.length === 0) {
        classes.push("LightReblogView");
    }

    return classes.join(" ");
}

function updateBorderSelection(selectedId) {
    const radioButtons = document.querySelectorAll('input[name="BorderColor"]');
    radioButtons.forEach(button => {
        if (button.id !== selectedId) {
            button.checked = false;
        }
    });
}

function getSelectedBordersClasses() {
    var classes = [];

    if (document.getElementById("BorderBlue").checked) {
        classes.push("ReblogBorder1");
    }
    if (document.getElementById("BorderRed").checked) {
        classes.push("ReblogBorder2");
    }
    if (document.getElementById("BorderGreen").checked) {
        classes.push("ReblogBorder3");
    }
    if (document.getElementById("BorderPurple").checked) {
        classes.push("ReblogBorder4");
    }
    if (document.getElementById("BorderPink").checked) {
        classes.push("ReblogBorder5");
    }

    if (classes.length === 0) {
        classes.push("ReblogBorder3");
    }

    return classes.join(" ");
}

function CopyCode() {
    var code = document.getElementById("ReblogYourCode").value;
    var compressedCode = code.replace(/\s+/g, ' ').trim();
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = compressedCode;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert("کد با موفقیت در Clipboard ذخیره شد.");
}
