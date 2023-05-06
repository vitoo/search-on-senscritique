chrome.contextMenus.create({
    title: "Search with Senscritique",
    contexts:["selection"],
    onclick: function(info, tab) {
      var selectedText = info.selectionText;
      var searchUrl = "https://www.senscritique.com/search?query=" + encodeURIComponent(selectedText);
      chrome.tabs.create({ url: searchUrl });
    }
  });
  