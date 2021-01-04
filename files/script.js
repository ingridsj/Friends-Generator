function generate(){
    let result = window.document.getElementById("result")
    let Images = ["images/chandler.jpg","images/monica.jpg","images/phoebe.jpg","images/rachel.jpg","images/ross.jpg","images/joey.jpg"]
    
    randomImages = Math.floor(Math.random() * Images.length)
    window.document.getElementById("image").src = Images[randomImages]
    
  switch(randomImages){
    case 0:
      result.innerText = 'You are Chandler Bing!' 
      break
    case 1:
      result.innerText = 'You are Monica Geller!'
      break
    case 2:
      result.innerText = 'You are Phoebe Buffay!'
      break
    case 3:
      result.innerText = 'You are Rachel Green!'
      break
    case 4:
      result.innerText = 'You are Ross Geller!'
      break
    case 5:
      result.innerText = 'You are Joey Tribbiani!'
      break
  }    
}