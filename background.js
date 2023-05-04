// chrome.runtime.onMessage.addListener(async function () {
//   if (message.msg === "image") {
//     const getImage = await fetch('https://dog.ceo/api/breeds/image/random')
//     const processedResponse = await getImage.json();
//     senderResponse({data: processedResponse, index: message.index})
//     return true;
//   }
// });


// chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
//   if (message.msg === "image") {
//     fetch('https://dog.ceo/api/breeds/image/random')
//           .then(response => response.json())
//           .then(data => {
//             let dataObj = JSON.parse(data);
//             senderResponse({data: dataObj, index: message.index});
//           })
//           .catch(error => console.log("error", error))
//       return true;
//   }
// })


async function loadDogs() {
  const imgPage = document.querySelector('.image')
  const getImage = await fetch('https://dog.ceo/api/breeds/image/random');
  const processedResponse = await getImage.json();
  imgPage.src = processedResponse.message;
  console.log(processedResponse);
}

const button = document.querySelector('button');
button.addEventListener('click', () => loadDogs());




