var test = editor({
    root:"root",
    // width:"2000px",
    // height: "500px"
    // createBtn : {
    //     ui: 'fab fa-instagram',
    //     // url: "./test.png",
    //     id : 'instagram',
    //     function :function(){alert("hi")},
    // },
    // createToolbar : {
    //     createTemplateObj : [
    //         {key:"bold", value:"강조", ui : "fas fa-bold", cmd :"bold", id : "bold", width:"100px",height:"20px"},
    //         {key:"italic", value:"기울기", ui : "fas fa-italic", cmd :"italic", id : "italic"},
    //         {key:"newWirte", value:"새글", ui : "far fa-newspaper" ,id : "newWrite", cmd : "none"},
    //         {key:"emoji", value:"이모티콘", ui :"far fa-smile" , cmd:"none", id :"emoji"},
    //     ],
    //     width: "300px",
    //     height: "0px"
    // }
});
test.startEditor();



var test2 = editor({
    root:"wrap",
    // width:"800px",
    // height:"1000px",
    // createBtn : {
    //     url : "./test.png",
    //     id : "test2",
    //     function : function(){alert("hi2")}
    // },
    // createToolbar: {
    //     createTemplateObj : [
    //         {key:"emoji", value:"이모티콘", ui :"far fa-smile" , cmd:"none", id :"emoji"},
    //         {key:"bold", value:"강조", ui : "fas fa-bold", cmd :"bold",
    //         id : "bold", function: function(){alert('hit3')} },
    //         {key:"italic", value:"기울기", ui : "fas fa-italic", cmd :"italic", id : "italic"},
    //         {key:"newWirte", value:"새글", ui : "far fa-newspaper" ,id : "newWrite", cmd : "none"},
    //     ],
    //     // width:"100px",
    //     // height:"80px"
    // },
    event:{
        onInitCompleted: function(editor){
            console.warn("onInitCompleted");
            console.log(editor);
        },
        onInitUICompleted: function(){
            console.warn("onInitUICompleted");
        }
    }
})
test2.startEditor();


// console.log(test.startEditor() === test2.startEditor());