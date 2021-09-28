import React from 'react';
import Footer from './Footer';

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';

    let x = props.x;
    let y = props.y;
    let z = props.z;
    
    if((x===y) && (y===z)){
       return (
         <>
         <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
            <h1>
                This is Matching
            </h1>
         </div>
         </>
      )
    }else{
        return (
            <>
            <div className="slot_inner">
               <h1>
                   {x} {y} {z}
               </h1>
               <h1>
                   This is Not Matching
               </h1>
            </div>
            </>
         )
    }
}

const App = () => {
return(
<>
<h1 className="heading_style">
     😄 🎰 WELCOME TO <span style={{ fontWeight : 'bold',color:'blue',letterSpacing:'2px'}}>SLOT MACHINE GAME </span>🎰 😄 
</h1>
<div class="slot_machine">
<SlotM  x="😄"  y='😄'  z='😄' />
<hr/>
<SlotM  x='😈'  y='😭'  z='😄'/>
<hr/>
<SlotM  x='⚽'  y='🏀'  z='🏈'/>
<hr/>
<SlotM  x='🐌'  y='🐌'  z='🐌'/>
<hr/>
<SlotM  x='🥭' y='🍌' z='🍍'/>
</div>
<Footer />
</>
);
};

export default App;
