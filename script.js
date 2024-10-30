//your JS code here. If required.
// const text= document.getElementById("text").value;
// const num= document.getElementById("delay").value;
const btn= document.getElementById("btn");
const div= document.getElementById("output");

btn.addEventListener('click', async()=>{
	 const text = document.getElementById("text").value;
    const num = parseInt(document.getElementById("delay").value);
    await displayOutput(text,num);
})
 async function displayOutput(mes,delay){
	 await new Promise(resolve=>setTimeout(resolve,delay));
	 div.innerText=mes;
 }