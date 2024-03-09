import { onValue, ref, update } from 'firebase/database'
import React, {useState} from 'react'
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
        uploadImage(name)
        
        return
        update(ref(db, `Varshith/Vini/Products`), {
            [name] : {
                Base : parseInt(base),
                Location : 'Location',
                Email : 'Email',
                Author : 'Author',
                Time : 'Time',
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
            <div className="sub">
                <button onClick={add}>Submit</button>
            </div>
        </div>
    </>
  )
}
