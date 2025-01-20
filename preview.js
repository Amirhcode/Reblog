function updatePreview() {
    var image = document.getElementById("ReblogAvator").value || "https://via.placeholder.com/42";
    var link = document.getElementById("ReblogUrl").value || "https://blog.ir";
    var firstname = document.getElementById("ReblogAuther").value || "امیرحسین";
    var time = document.getElementById("ReblogDate").value || "۲۰ آذر";
    var username = document.getElementById("ReblogUsername").value || "Amirhossein";
    var content = document.getElementById("ReblogCode").value || " مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…";

    var previewContent = `
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
            <!--<div class="TimeIcon"></div>-->
            <time class="ReblogTime">${time}</time>
        </div>

        <div class="ReblogRedirect">
            <a href="${link}" class="ReblogLink" target="_blank"><i class="RedirectIcon"></i></a>
        </div>
    </div>
    `;

    document.getElementById("previewContent").innerHTML = previewContent;
    document.getElementById("previewDialog").innerHTML = previewContent;
}

document.getElementById("ReblogUrl").addEventListener("input", updatePreview);
document.getElementById("ReblogAvator").addEventListener("input", updatePreview);
document.getElementById("ReblogAuther").addEventListener("input", updatePreview);
document.getElementById("ReblogDate").addEventListener("input", updatePreview);
document.getElementById("ReblogUsername").addEventListener("input", updatePreview);
document.getElementById("ReblogCode").addEventListener("input", updatePreview);

document.addEventListener("DOMContentLoaded", updatePreview);

function updatePreview() {
    var image = document.getElementById("ReblogAvator").value || "https://via.placeholder.com/42";
    var link = document.getElementById("ReblogUrl").value || "https://blog.ir";
    var firstname = document.getElementById("ReblogAuther").value || "امیرحسین";
    var time = document.getElementById("ReblogDate").value || "۲۰ آذر";
    var username = document.getElementById("ReblogUsername").value || "Amirhossein";
    var content = document.getElementById("ReblogCode").value || " مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…";

    var previewContent = `
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
            <!--<div class="TimeIcon"></div>-->
            <time class="ReblogTime">${time}</time>
        </div>

        <div class="ReblogRedirect">
            <a href="${link}" class="ReblogLink" target="_blank"><i class="RedirectIcon"></i></a>
        </div>
    </div>
    `;

    document.getElementById("previewContent").innerHTML = previewContent;
    document.getElementById("previewDialog").innerHTML = previewContent;
}

document.getElementById("ReblogUrl").addEventListener("input", updatePreview);
document.getElementById("ReblogAvator").addEventListener("input", updatePreview);
document.getElementById("ReblogAuther").addEventListener("input", updatePreview);
document.getElementById("ReblogDate").addEventListener("input", updatePreview);
document.getElementById("ReblogUsername").addEventListener("input", updatePreview);
document.getElementById("ReblogCode").addEventListener("input", updatePreview);

document.getElementById("LightSelector").addEventListener("change", updatePreview);
document.getElementById("DarkSelector").addEventListener("change", updatePreview);
document.getElementById("BorderBlue").addEventListener("change", updatePreview);
document.getElementById("BorderRed").addEventListener("change", updatePreview);
document.getElementById("BorderGreen").addEventListener("change", updatePreview);
document.getElementById("BorderPurple").addEventListener("change", updatePreview);
document.getElementById("BorderPink").addEventListener("change", updatePreview);
document.getElementById("GradientBlue").addEventListener("change", updatePreview);
document.getElementById("GradientRed").addEventListener("change", updatePreview);
document.getElementById("GradientGreen").addEventListener("change", updatePreview);
document.getElementById("GradientPurple").addEventListener("change", updatePreview);
document.getElementById("GradientPink").addEventListener("change", updatePreview);

document.addEventListener("DOMContentLoaded", updatePreview);