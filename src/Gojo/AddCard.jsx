import { onValue, ref, update } from 'firebase/database'
import React, { useState } from 'react'
import { v4 } from 'uuid';
import { getStorage, ref as ref1,uploadBytes, listAll, getDownloadURL } from "firebase/storage";


export default function AddCard({db, storage}) {

    const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = (name) => {
    if (imageUpload == null) return;
    const imageRef = ref1(storage, `Email/${name}/${v4()}`)
    uploadBytes(imageRef, imageUpload)
  };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImageUpload(file)
      };

    async function add(){

        let name = document.querySelector('.name').value;
        let base = document.querySelector('.base-price').value;
        let loc = document.querySelector('.location').value;
        let date = document.querySelector('.date').value;
        let date1 = new Date(date);
        // let date2 = new Date();
        // date2.toDateString();
        // if(date1 > date2){
        //     console.log("date1 >")
        // }
        // else{
        //     console.log("False")
        // }


        uploadImage(name)
        update(ref(db, `Varshith/Vini/Products`), {
            [name] : {
                Base : parseInt(base),
                Location : loc,
                Email : 'Email',
                Author : 'Author',
                Time : date1,
                Cat : 'Cat',
                Bid : {

                    Bid1 : 0,
                    Bid2 : 0,
                    Bid3 : 0,
                }
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
            <div className="img-con">
                <input type='file' className='pro-img' onChange={handleImageUpload}/>
            </div>
            <div className="Location-con">
                <textarea rows={10} cols={70} className='location' ></textarea>
            </div>
            <div className="cat-con">
                
            </div>
            <div className="date-con">
                <input type="date" className='date'/>
            </div>
            <div className="sub">
                <button onClick={add}>Submit</button>
            </div>
        </div>
    </>
  )
}