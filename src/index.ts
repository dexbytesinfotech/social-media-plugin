
import { Meta } from "./resources/meta";
import { Google } from "./resources/google";
import { GoogleTokenGenerator } from "./resources/google/common/google.TokenGenerator";


export{
    Meta,Google
}



const abc = Google.Youtube("");
const a1 =abc.fetchChannelVideos("obvdfvhdfv",{limit:10,id:true})

// import { GoogleAuthUrlGenerator } from "./google/common/google.AuthUrlGenereator";
// import {GoogleTokenGenerator} from "./google/common/google.TokenGenerator";

// // export {
// //     //classes for generating tokens and long lived tokens 
// //     GenericOauth,
// //     UserIdFetcher,
// //     LongLivedAccessToken,
// //     //classes for fetching facebook page data
// //     FacebookPagePosts,
// //     FacebookPagePhotos,
// //     FacebookPageEvents,
// //     FacebookPageFeeds,
// //     FacebookPageDetails,
// //     //classes for the InstagramAccount Details
// //     InstagramAccountDetails,
// //     InstagramAccountMedia,
// //     InstagramAccountLiveMedia,
// //     InstagramAccountStories 
// // };
    const clientId= '197651720211-tv3j6rall0uic4mmqa9g5hdf6ttedk1e.apps.googleusercontent.com'
    const clientSecret ='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'
    const redirectUri= 'http://localhost:3000/auth/facebook/callback'
    const storedRefreshToken = "1//0gVTosoIfj6rXCgYIARAAGBASNwF-L9IrAeyzTNym8I57itYXzNbT6R-vPQPIIQRQJUynotH00sFLKlUJJPCqe8PSn-wmXvVFm_4"
    const scope ="https://www.googleapis.com/auth/youtube"
    const code ="4/0AeaYSHBoiXI1Qwn8f2HxrrAHodBQdGsQspu698H1KalK9dnfAVIh7eTP5_A4OHZgg1hF2w"
const authenticator = new GoogleTokenGenerator(clientId,clientSecret,redirectUri)

    authenticator.refreshAccessToken(storedRefreshToken)
  .then((tokenData: any) => {
    // Handle the refreshed token data
    console.log("Refreshed Token Data:", tokenData);
  })
  .catch((error: { message: any; }) => {
    // Handle errors
    console.error("Error refreshing token:", error.message);
  });
// const url = new GoogleAuthUrlGenerator(clientId,redirectUri,scope)
// const resp=url.getAuthorizationUrl()
// console.log(resp)


// // Example usage:
// const accessToken = 'ya29.a0AfB_byBphWxxiBx2X37qHBhSRUIZukeEk3BgBeq_vMIpy-zwhBNCXcPv70mhQXjF2yZktDTCEaekww_XUhLSG-5abOzFnngOoeWovTcnVmZ-KZkOdPnBOruAEzuunF-zW6sFnqhI8zO5w4fb7nl8re89MnvC8jNa7lVeaCgYKAVoSARASFQHGX2Mi5XNmIsY2WyN43r-E8khIeg0171';

// const youtubeChannel = new YouTubeChannel(accessToken);
// youtubeChannel.getVideoDetails()
//   .then(videoDetails => {
//     console.log('Video Details:', videoDetails);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });






//  // Replace with your actual access token

// const accesstoken = "ya29.a0AfB_byDyiKMFcBZcocK2XM_nsVqrumbz1523hFsL3uWFx_3TZ4tn22nXIwlq_Zn2InrmA8Xc51HCDMNVgsAWkzH0wf0HStuhpGqE5RNU7ewSG_9oIeRbfSUo6Yi11Vd_mPpdSYIaeZyEWxo6pxcrJn9TuCbSCHO4xmRq2QaCgYKARgSARASFQHGX2MielizqfU5m13Lutn6iHAxMg0173"
// // // const  data = new YoutubeChannelDetails(accesstoken)

// // // const response = data.fetchChannelDetails("",{contentDetails:true,snippet:true})
// // // console.log(response)

// const data3 =  Google.AccessToken(clientId,clientSecret,redirectUri)
// // // Wrap the asynchronous operation in an async function
// async function fetchData() {
//     try {
//       data3
//         // const response = await data3.fetchChannelVideosDetails('AEJwdqfpujk',{snippet:true,statistics:true,fileDetails:true});
//         // const responses = await data3.fetchChannelActivities("UC3ZUakany9YL7D_FWqiXLww",{id:true,snippet:true,contentDetails:true})
//         // const response2 = await data2.fetchPlaylistItems("PLelmWrYIjLYs2f_w8axd4GHcoHyXxUoFE",{snippet:true,limit:1,status:true})
//         // const response3 = await data3.fetchChannelSubscriptions("UC3ZUakany9YL7D_FWqiXLww",{id:true,limit:1,snippet:true})
//         // const response = await data3.fetchRegions({snippet:true})
//         const responses = await data3.refreshAccessToken(storedRefreshToken)
//         console.log(responses);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // // // Call the async function
// fetchData();

// UC3ZUakany9YL7D_FWqiXLww
//w0RKkuiEejs'
//PLelmWrYIjLYs2f_w8axd4GHcoHyXxUoFE

// const accessMeta = 'EAAEWQ8RZBLAQBO9Ey8RWwZB8eWCtF1RUlh5XhZCCIWYRzEvSdvJ6EInYhqPKBekTi6YH3wn8S99lmi5xMCvUs6jLM8J1c94O0IasirZAeaz2Rapf6ozW0xHnVLZBan5LNvOCUZAhIHNMJgRZBZAcOFn11B4fe9GAXQu1K7W4jDOontdVsZBWQWZA2VKuQV'
// const userId = '17841464147069566'
// const clientSecret="abfbb99eadf8d180480a2034b92e744a"
// const clientId="305955291933700"

// const page = Meta.FacebookPageMedia(accessMeta)


// async function fetchData() {
//   try {
//     const response = await page.fetchPagePosts("203190019549106",{likes:true})
//     // const response = await page.fetchPageFeeds("203190019549106", {limit:0,place:true})
//     console.log(response);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// // fetchData()

// const pageTokeN  ="EAAEWQ8RZBLAQBOxaQ1nFZAZBi1FNoCwXRAsoDC4pLC2I4tGEszZAqv81703XHowvPLa0WDLn2g9quHrPytS1z7ZCA81X0Vtzh9e5u0GQvwWIq7R67r21CmSh0NrBI2lmrZBd7hL8g5KA2OkCMqxCDMunIZAub7mxzOkKJG15rPy0gCPRrVykoUSyWXwFBsyg3YZD"

// const page2= Meta.FacebookPageMedia(pageTokeN)

// async function fetchdata2(){
//   try{
//     const response =await page2.fetchPagePosts("203190019549106",{isExpired:true,canDelete:true,likes:true,album:true,actions:true,comments:true,permalinkUrl:true,adminCreator:true,coordinates:true,webpImages:true,dynamicPosts:true,application:true,createTime:true,dimensions:true,targeting:true,subscribed:true,shares:true})
//     console.log(response)
//   }catch(error){
//   console.log(error);
//   }
// }
// // fetchdata2()

// const tokens = Meta.createMetaLongLivedAccessToken(clientId,clientSecret,accessMeta)

// async function fetchdata3(){
//   try{
//     const token = await tokens.requestLongLivedAccessToken()
//     console.log(token)
//   }catch(error){
//   console.log(error);
//   }
// }
// fetchdata3()