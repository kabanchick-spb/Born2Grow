var systemMenuHeight = window.innerHeight - document.documentElement.clientHeight;

if (systemMenuHeight > 0) {
    var isSystemMenuAtTop = systemMenuHeight > window.innerHeight / 2;

    if (isSystemMenuAtTop) {
        document.body.style.paddingTop = systemMenuHeight + "px";
    } else {
        document.body.style.paddingBottom = systemMenuHeight + "px";
    }
}