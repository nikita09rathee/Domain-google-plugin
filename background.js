
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      const url = new URL(tab.url);
      const domain = url.hostname;
      const apiUrl = `http://localhost:5000/${domain}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(res => console.log(res))
        .catch(error => console.error('Error:', error));
    }
  });
  