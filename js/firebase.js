// $(document).ready(function(){
//     // REGISTER DOM ELEMENTS
//     const $title = $('#title');
//     const $doc = $("#doc");
  
//     // INITIALIZE FIREBASE
//     // firebase.initializeApp({
//     //     apiKey: "AIzaSyBl0KEXiAmJpLLICG_XDRVn9juS2zVe4BI",
//     // authDomain: "webdesign-68d66.firebaseapp.com",
//     // databaseURL: "https://webdesign-68d66-default-rtdb.firebaseio.com",
//     // projectId: "webdesign-68d66",
//     // storageBucket: "webdesign-68d66.appspot.com",
//     // messagingSenderId: "553263725412",
//     // appId: "1:553263725412:web:b86df9ce83c61022709871",
//     // measurementId: "G-S7RK5H1ZP7"
//     // });
  
//     // let db = firebase.firestore();
//     // let usersRef = db.collection("2021webDesign");
//     // usersRef.add({
//     //   "name": "NTUE",
//     //   "age": 13,
//     //   "tel": {
//     //     "tel1": "111-111",
//     //     "tel2": "222-111"
//     //   }
//     // });
  
//     // let docRef = usersRef.doc("huey0201");
  
//     // docRef.get().then(function(doc){
//     //   $doc.html(`doc huey0201 name = ${doc.data().name}`)
//     // });
  
//     // docRef.set({
//     //   "name": "Alex2",
//     //   "age": 27,
//     //   "tel": {
//     //     "tel1": "111-111",
//     //     "tel2": "222-111"
//     //   }
//     // });
//     // let messageCollectionRef = db.collection("2021webDesign");

//     // const $name = $('#name');
//     // const $mail = $('#mail');
//     // // const $phone = $('#phone');
//     // const $comment = $('#comment');

//     // // LISTEN FOR KEYPRESS EVENT
//     // $("#submit").click(function(e) {
//     //     // FIELD VALUES
//     //     let sendername = $name.val();
//     //     let mail = $mail.val();
//     //     // let phone = $phone.val();
//     //     let comment = $comment.val();
//     //     // SAVE DATA TO FIREBASE
//     //     if ((sendername | mail | comment) == "") {
//     //         alert("填寫資料不正確");
//     //     } else {
//     //         messageCollectionRef.add({
//     //             sendername: sendername,
//     //             mail: mail,
//     //             // phone: phone,
//     //             comment: comment,
//     //             // timeStamp: data.now(),

//     //         });
//     //         console.log("789");
//     //         $name.val("");
//     //         $mail.val("");
//     //         // $phone.val("");
//     //         $comment.val("");
//     //         alert("送出成功");
//     //     }
//     // });
  
//     // docRef.update({
//     //   "name": "John Doe"
//     // });
  
//     // docRef.onSnapshot(
//     //   function(doc){
//     //     $title.html(`user name = ${doc.data().name}, user age = ${doc.data().age}`);
//     //   }
//     // );
    
  
//   });
$(document).ready(function () {
    // REGISTER DOM ELEMENTS
    const $title = $('#title');
    const $doc = $("#doc");
    // INITIALIZE FIREBASE
    firebase.initializeApp({
        apiKey: "AIzaSyBl0KEXiAmJpLLICG_XDRVn9juS2zVe4BI",
        authDomain: "webdesign-68d66.firebaseapp.com",
        databaseURL: "https://webdesign-68d66-default-rtdb.firebaseio.com",
        projectId: "webdesign-68d66",
        storageBucket: "webdesign-68d66.appspot.com",
        messagingSenderId: "553263725412",
        appId: "1:553263725412:web:b86df9ce83c61022709871",
        measurementId: "G-S7RK5H1ZP7"
        
    });
    console.log("hhh");
    // REFERENCE CHATROOM DOCUMENT
    let db = firebase.firestore()
        .collection("2021webdesign")
        .doc("huey0201");
    // let messageCollectionRef = db.collection("2021webDesign"); 
    // REFERENCE CHATROOM MESSAGES
    let messagesCollectionRef = db.collection("messages");
    // QUERY MESSAGES BY TIMESTAMP ORDERING 
    
    
    // REGISTER DOM ELEMENTS
    const $name = $('#name');
    const $mail = $('#mail');
    const $comment = $('#comment');
    console.log("85757");
    
    // LISTEN FOR KEYPRESS EVENT
    $("#submit").click(function (e) { 
        
        //FIELD VALUES
        let senderName = $name.val();
        let mail = $mail.val();
        let comment = $comment.val();
      
        if (senderName=="") {
            alert("姓名欄位未填寫");
        } 
        else if(mail==""){
            alert("電子郵件欄位未填寫");
        }
        else if(comment==""){
            alert("內容欄位未填寫");
        }
        else {
            //SAVE DATA TO FIREBASE
            messagesCollectionRef.add({
                senderName: senderName,
                mail: mail,
                comment : comment,
            });
            console.log("87");
            alert("送出成功");
            
        }  console.log("666");
        //版本一無then版之後要加動畫
        //EMPTY INPUT FIELD
        $name.val('');
        $mail.val('');
        $comment.val('');
    });
    
            
    // docRef.get().then(function(doc){
    // $title.html(`user name = ${doc.data().name}`)
    // });
    // messagesCollectionRef.add().then(function(doc){
    //     //$title.html(`user name = ${doc.data().nameone}`)
    //     console.log("456");
    // });
});