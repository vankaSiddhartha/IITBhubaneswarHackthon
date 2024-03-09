import React from 'react'
import { read } from '../App'
import { update, ref } from 'firebase/database';
export default function Bidding({ db }) {

    async function bid(){

        let bid1, bid2, bid3;
        let nbid = document.querySelector('.bid').value;
        let Bid = await read(`Varshith/Vini/Products/soap`)
        if(Bid.Time <= "jsbcj"){
            return
        }
        bid1 = Bid.Bid.Bid1.split('_')[0];
        bid2 = Bid.Bid.Bid2.split('_')[0];
        bid3 = Bid.Bid.Bid3.split('_')[0];
        if(nbid < bid3 || nbid < Bid.Base){
            return
        }
        else if(nbid == bid1 || nbid == bid2 || nbid == bid3){
            return
        }
        else if(nbid > bid1){
            bid3 = bid2;
            bid2 = bid1;
            bid1 = nbid;
        }
        else if(nbid > bid2){
            bid3 = bid2;
            bid2 = nbid;
        }
        else if(nbid > bid3){
            bid3 = nbid;
        }
        update(ref(db, `Varshith/Vini/Products/soap`), {
            Bid : {
                Bid1 : `${bid1}_U1`,
                Bid2 : `${bid2}_U2`,
                Bid3 : `${bid3}_U3`,
            }
        })
    }
  return (
    <>
        <div className="bidcon">
            <input type="text" className='bid' />
        </div>
        <div className="bid-btncon">
            <button className='bid-btn' onClick={bid}>Bid</button>
        </div>
    </>
  )
}