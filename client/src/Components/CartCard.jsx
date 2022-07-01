import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';

export function CartCard(prodId){
    const [openPanel, setOpenPanel] = useState(false);
   // const data = JSON.parse(localStorage.cart)
    //console.log("DATACART--->",data);
    return (
        <div>
            <div>
                <button onClick={() => setOpenPanel(true)}>Open</button>
            </div>
            <SlidingPanel
                type={'left'}
                isOpen={openPanel}
                size={30}
            >
                <div>
                    <div>
                        
                    </div>
                    <button onClick={() => setOpenPanel(false)}>close</button>
                </div>
            </SlidingPanel>
        </div>
    );
};