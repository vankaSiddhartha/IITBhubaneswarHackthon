import { onValue, ref, update } from 'firebase/database'
import React from 'react'

export default function AddCard({db}) {

    async function add(){

        let name = document.querySelector('.name').value
        let base = document.querySelector('.base-price').value
        update(ref(db, `Varshith/Vini/Products`), {
            [name] : {
                Base : base
            }
        })
        // await new Promise((res, rej) => {
        //     onValue(ref(db, 'Varshith'), snap => {
        //         logs = snap.val()
        //         res(0)
        //     })
        // })
        // console.log(logs)
    }

  return (
    <>
        <div className="con">
            <div className="name-con">
                <input type="text" className='name' />
            </div>
            <div className="base-price-con">
                <input type="text" className='base-price'/>
            </div>
            <div className="sub">
                <button onClick={add}>Submit</button>
            </div>
        </div>
    </>
  )
}
