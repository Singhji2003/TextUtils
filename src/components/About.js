import React, {useState}from 'react'

export default function About() {
    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
    })
   const hadlemode =()=>{
   if(style.color === 'white'){
    setStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
    })
    }
    else{
    setStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid black'
        
    })
}
    
   }
  return (
    <div >
      <div class="accordion"  id="accordionExample">
  <div class="accordion-item ">
    <h2 class="accordion-header" style={style}id="headingOne">
      <button class="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={style}>
      <div class="accordion-body ">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" style={style} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item 3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" style={style} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button type="button" onClick={hadlemode} class="btn btn-primary mx-3 my-3">Enable Dark Mode</button>
    </div>
  )
}
