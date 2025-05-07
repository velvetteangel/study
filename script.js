document.addEventListener("DOMContentLoaded", () => {
    const settingsSidebar = document.getElementById("settingsSidebar");
    const settingsToggle = document.getElementById("settingsToggle");
    const closeSidebar = document.getElementById("closeSidebar");
    const content = document.getElementById("content");
  
    // Header Customization
    const headerTextInput = document.getElementById("headerTextInput");
    const headerColorInput = document.getElementById("headerColorInput");
    const headerFontSizeInput = document.getElementById("headerFontSizeInput");
    const applyHeaderBtn = document.getElementById("applyHeaderBtn");
    const customHeader = document.getElementById("customHeader");
    const headerText = document.getElementById("headerText");
  
    applyHeaderBtn.addEventListener("click", () => {
      const newText = headerTextInput.value;
      const newColor = headerColorInput.value;
      const newFontSize = headerFontSizeInput.value;
  
      if (newText) headerText.textContent = newText;
      if (newColor) customHeader.style.backgroundColor = newColor;
      if (newFontSize) headerText.style.fontSize = `${newFontSize}px`;
    });
  
    // Background Customization
    const backgroundImageInput = document.getElementById("backgroundImageInput");
    const backgroundImageUrl = document.getElementById("backgroundImageUrl");
    const backgroundPreviewContainer = document.getElementById("backgroundPreviewContainer");
    const backgroundPreview = document.getElementById("backgroundPreview");
    const setBackgroundBtn = document.getElementById("setBackgroundBtn");
  
    function showBackgroundPreview(src) {
      backgroundPreview.src = src;
      backgroundPreviewContainer.classList.remove("hidden");
    }
  
    backgroundImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          showBackgroundPreview(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  
    backgroundImageUrl.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        showBackgroundPreview(url);
      }
    });
  
    setBackgroundBtn.addEventListener("click", () => {
      content.style.backgroundImage = `url(${backgroundPreview.src})`;
      backgroundPreviewContainer.classList.add("hidden");
    });
  
    // Font Customization
    const fontSelector = document.getElementById("fontSelector");
    const applyFontBtn = document.getElementById("applyFontBtn");
  
    applyFontBtn.addEventListener("click", () => {
      const selectedFont = fontSelector.value;
      document.body.style.fontFamily = selectedFont;
    });
  
    // GIF Management
    const gifInput = document.getElementById("gifInput");
    const gifUrlInput = document.getElementById("gifUrlInput");
    const gifPreviewContainer = document.getElementById("gifPreviewContainer");
    const gifPreview = document.getElementById("gifPreview");
    const addGifConfirmBtn = document.getElementById("addGifConfirmBtn");
  
    function showGifPreview(src) {
      gifPreview.src = src;
      gifPreviewContainer.classList.remove("hidden");
    }
  
    gifInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          showGifPreview(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  
    gifUrlInput.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        showGifPreview(url);
      }
    });
  
    addGifConfirmBtn.addEventListener("click", () => {
      const gif = document.createElement("img");
      gif.src = gifPreview.src;
      gif.classList.add("gif");
      gif.style.position = "absolute";
      gif.style.cursor = "grab";
      content.appendChild(gif);
      gifPreviewContainer.classList.add("hidden");
    });
  
    // Tabs Toggle
    const tabsContainer = document.getElementById("tabsContainer");
    const youtubeTab = document.getElementById("youtubeTab");
    const notesTab = document.getElementById("notesTab");
  
    document.getElementById("toggleYouTubeTab").addEventListener("click", () => {
      tabsContainer.classList.remove("hidden");
      youtubeTab.classList.toggle("hidden");
      notesTab.classList.add("hidden");
    });
  
    document.getElementById("toggleNotesTab").addEventListener("click", () => {
      tabsContainer.classList.remove("hidden");
      notesTab.classList.toggle("hidden");
      youtubeTab.classList.add("hidden");
    });
  
    // Sidebar Toggle
    settingsToggle.addEventListener("click", () => {
      settingsSidebar.classList.toggle("shown");
    });
  
    closeSidebar.addEventListener("click", () => {
      settingsSidebar.classList.remove("shown");
    });
  });