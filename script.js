const isSystemMenuSupported = /Safari|Mobile Chrome/i.test(navigator.userAgent);

if (isSystemMenuSupported) {
  const systemMenuHeight = 40;

  
  function adjustForSystemMenu() {
    document.body.style.paddingBottom = systemMenuHeight + 'px';
  }

  
  window.addEventListener('load', adjustForSystemMenu);
  window.addEventListener('resize', adjustForSystemMenu);
}   