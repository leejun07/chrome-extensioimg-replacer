// chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
//   if (message.msg === "image") {
//     fetch('https://dog.ceo/api/breeds/image/random')
//           .then(response => response.json())
//           .then(data => {
//             let dataObj = JSON.parse(data);
//             senderResponse({data: dataObj, index: message.index});
//           })
//           .catch(error => console.log("error", error))
//       return true;  // Will respond asynchronously.
//   }
// });

chrome.runtime.onMessage.addListener(async function(message, sender, senderResponse){
    if (message.msg === "image") {
      const getImage =  await fetch('https://dog.ceo/api/breeds/image/random')
      const processedResponse = await promise.json();
      console.log(processedResponse.message);
      return true;
    }
  });