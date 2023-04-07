const container = document.getElementById("btn-container");
const addStructure = () =>{
  return container.innerHTML = 
    btnData.map((item)=>{
      let { btnClass, id, value, text } = item;
      return `
        <div class="btn">
          <button class="${btnClass}" id="${id}" value="${value}">
            ${text}
          </button>
        </div>
      `
    }).join("")
}
addStructure();