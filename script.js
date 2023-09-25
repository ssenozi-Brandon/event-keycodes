// // method one
// window.addEventListener('keydown', (e) => {
//   const insert = document.querySelector('#insert')

//   insert.innerHTML = `
  
//   <div class="key">
//           ${e.key === ' '? 'space': e.key}
//           <small>e.key</small>
//         </div>

//         <div class="key">
//           ${e.keyCode}
//           <small>e.keyCode</small>
//         </div>

//         <div class="key">
//           ${e.code}
//           <small>e.code</small>
//         </div>

//   `
// })

// method 2
function showKeys(e){
  const insert = document.querySelector('#insert')
  insert.innerHTML = '';
 
  const keyCodes = {
    'e.key':e.key === ' '? 'space': e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for(let key in keyCodes){
    const div = document.createElement('div');
    div.className = 'key'

    const small = document.createElement('small');

    const keytext = document.createTextNode(key)
    const valueText = document.createTextNode(keyCodes[key])
    
    small.appendChild(keytext)
    div.appendChild(valueText)
    div.appendChild(small)

    insert.appendChild(div)
  }
}

window.addEventListener('keydown',showKeys)