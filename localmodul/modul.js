/*function sayhello(){
    console.log("this is local module");
}
module.exports = sayhello;*/

const detail = {
    name:"sandeep",
    place:"kerala",
    age  :21,
    greet :function(){
        console.log("my name is "+ this.name);
    },

};
module.exports = detail;
