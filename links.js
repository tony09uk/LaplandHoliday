const config = {
    "isLive": true,
    "internalLinks": {
        "baseUrl_live": "https://gentle-river-09bc03f03.2.azurestaticapps.net/things-to-do.html/",
        "baseUrl_test": "file:///D:/Dev/Web/LaplandHoliday/",
        "home": "index.html",
        "diyChecklist": "lapland-checklist.html",
        "clothing": "clothing.html",
        "thingsToDo": "things-to-do.html",
        "carHire": "car-hire.html",
        "faq": "faq.html",
        "vLog": "v-log.html",
        "comingSoon": "coming-soon.html",
        "credits": "credits.html",
        "sitemap": "sitemap.html",
    },
    "content": {
        "footer": "footer-content.html"
    },
    "emailAddress": "mailto:email@example.com"
}

let internalLinks = config.internalLinks;
let content = config.content;
let baseUrl = config.isLive ? internalLinks.baseUrl_live : internalLinks.baseUrl_test;

$(document).ready(function() {
    $(".link_diyChecklist").prop("href", baseUrl+internalLinks.diyChecklist);
    $(".link_home").prop("href", baseUrl+internalLinks.home);
    $(".link_thingsToDo").prop("href", baseUrl+internalLinks.thingsToDo);
    $(".link_vLog").prop("href", baseUrl+internalLinks.vLog);
    $(".link_carHire").prop("href", baseUrl+internalLinks.carHire);
    $(".link_clothing").prop("href", baseUrl+internalLinks.clothing);
    $(".link_faq").prop("href", baseUrl+internalLinks.faq);
    $(".link_coming-soon").prop("href", baseUrl+internalLinks.comingSoon);
    $(".link_credits").prop("href", baseUrl+internalLinks.credits);
    $(".link_sitemap").prop("href", baseUrl+internalLinks.sitemap);

    $.get(baseUrl+content.footer, function(data){
        $(this).children(".footer_content:first").html(data);
    });

    $( ".content_footer" ).append( baseUrl+content.footer );

    $(".emailAddress").prop("href", config.emailAddress);
});
