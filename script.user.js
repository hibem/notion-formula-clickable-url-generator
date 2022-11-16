// ==UserScript==
// @name         notion formula clickable url generator
// @version      0.1
// @description  try to take over the world!
// @author       Hibem
// @match        https://www.notion.so/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=notion.so
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var I = 0;
const getDom = setInterval(() => {
    if(!document.querySelector("a.newurlsign")){
        I = 0
    }
    if (document.evaluate('//div[contains(text(), "http")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength-1>I){//Fill "dom" with target dom
        //code start
        console.log(I)
        console.log(document.evaluate('//div[contains(text(), "http")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength-1)
        addUrl()
        //code end
      //  clearInterval(getDom)
    }
},500)


function addUrl(){
var urlDom = document.evaluate('//div[contains(text(), "http")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null )
for ( var i=0 ; i < urlDom.snapshotLength; i++ )
{
    var newurl = document.createElement("a")
    newurl.innerHTML = 'via'
    newurl.setAttribute("href",urlDom.snapshotItem(i).textContent)
    newurl.setAttribute("target","_blank")
    newurl.setAttribute("class","newurlsign")
    newurl.setAttribute("style",`
    position:absolute;
    left:${urlDom.snapshotItem(i).getBoundingClientRect().left-324}px;
    z-index:1000;
    cursor: pointer;
    border-bottom-right-radius: 4px;
    padding: 2px 6px 4px;
    font-size: 11px;
    line-height:1.1;
    background: rgb(35, 131, 226);
    color: white;
    text-decoration: none;
    `)
    urlDom.snapshotItem(i).parentNode.parentNode.appendChild(newurl)
    I=i;

}
    return I
}


})();
