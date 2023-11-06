function hasSystemMenu() {
    return window.visualViewport.height < window.innerHeight;
  }
  
  function getSystemMenuHeight() {
    if (hasSystemMenu()) {
      return window.innerHeight - window.visualViewport.height;
    }
    return 0;
  }
  
  if (hasSystemMenu()) {
    const systemMenuHeight = getSystemMenuHeight();
  }

  function setPaddingForSystemMenu() {
    var systemMenuHeight = getHeightOfSystemMenu(); 
  
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
  
    if (header) {
      header.style.paddingTop = systemMenuHeight + 'px';
    }
  
    if (footer) {
      footer.style.paddingBottom = systemMenuHeight + 'px';
    }
  }
  
  setPaddingForSystemMenu();