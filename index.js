console.log('The Bot is starting...!');

var Twit = require('twit');

// const config = {
var T = new Twit({
    consumer_key:,
    consumer_secret:,
    access_token:,
    access_token_secret:,
    // env: 'test',
    // ngrok: 'test',
  });

  var searchHashtag={
      q: '#GlobalWarming',
      count:1,
      result_type:"recent"
  };

function retweet(){

    T.get("search/tweets",searchHashtag,(err,data)=>{
        if(err){
            console.log('Something went wrong!');
            return;
        }
        if (data && data.statuses.length > 0){
            
           let tweet =data.statuses[0];
           console.log(tweet);


           //Retweet
           T.post("statuses/retweet/"+ tweet.id_str, (e,res)=>{
             if(e){
                 console.log("Cannot Retweet!");
                 return;
             }
             if(res){
                 console.log("Successed!")
             }
           })

        }else{
            console.log('No tweets on the Hastag:', searchHastag.q);
        }
      });
}

//First time
retweet();

//After an hour
setInterval(retweet, 1000*60);
// setInterval(retweet, 3600*1000);




// //EVENT FOLLOW USER
// //setting up a user stream
// var stream =T.stream('user');

// //Anyone follows me
// stream.on('follow',followed);

// function followed(eventMsg){
//     var name=eventMsg.source.name;
//     var screenName=eventMsg.source.screen_name;
//     tweetIt('@' + screenName + "thank you following me");

// // tweetIt();
// // setInterval(tweetIt, 1000*60)

// function tweetIt(txt){

//     var r =Math.floor(Math.random()*100);

//     var tweet={
//     status: txt
//   }
// T.post('statuses/update', tweet, tweeted);

// function tweeted(err,data,response){
//     if(err){
//         console.log('Something went wrong!');
//     }else{
//         console.log("Succeed!");
//         }
//   }
// }



//SEARCH FOR TWEETS

// var params= { 
//     q: 'sad', 
//     count: 5
// }

// T.get('search/tweets', params , gotData);


// function gotData(err, data, response) {
//     var tweets=data.statuses;
//     for (var i=0; i<tweets.length;i++){
//         console.log(tweets[i].text);
//     }
//   };
  
//

//SEND TWEET

// var tweet={
//     status:'Why so sad?'
// }
// T.post('statuses/update', tweet, tweeted);

// function tweeted(err,data,response){
//     if(err){
//         console.log('something went wrong!');
//     }else{
//         console.log("Succeed!");
//         }
// }



  //SEND A TWEET-class EXAMPLE1 notes
  
// const Twitter = require("./twitter.js");
// const a2zitp = new Twitter(config);

// testTweet();
// async function testTweet(){
//     console.log(config);
//     const response = await a2zitp.tweet('Hello');
//     console.log(response);
// }
