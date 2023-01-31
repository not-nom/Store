import {useState , useEffect} from 'react'
import style from './ModalImg.module.css'
let secondState = true;
function ModalImg({ img }) {
    console.log("HELLO!")
    const [onHider, setOnHider] = useState(true);
    setOnHider(true)
    const [SecondState, setSecondState] = useState(true);
    const [pon, setPon] = useState(true);
    useEffect(() => {
        if(secondState){
            setOnHider(true)
        }else{

            setPon(!pon)
            if(secondState){
                setPon(!pon)
                setSecondState(true)
            }else{
                setPon(!pon)
                secondState=true;
            }
            console.log(pon)
        }
        console.log(SecondState)
    }, [pon]);
    const Hider = () =>{
        setOnHider(false);
        setSecondState(false)
        secondState = false;
    }
    return(
        <>
        {onHider ? (
    <div onClick={Hider} className={style.ModalImgSect}>
        <img onClick={(event) =>{event.stopPropagation()}} src={img} alt="model of car scaled"  className={style.ModalImg}/>
    </div>
    ) : (<div>ok</div>)}
        </>
    )
// if(onHider){
//   return (
//     <div onClick={Hider} className={style.ModalImgSect}>
//         <img onClick={(event) =>{event.stopPropagation()}} src={img} alt="model of car scaled"  className={style.ModalImg}/>
//     </div>
//     )
//     }else{
//         secondState=true;
//         return null;
//     }
}
export default ModalImg