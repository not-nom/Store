import {useParams} from "react-router-dom"
import { data } from "../CardList/CardList"
import {useMemo} from "react"
function CardD() {
    const params = useParams()
    const detal = useMemo(()=>{
        return(data.find((item)=>{return item.key+"" ===params.id}))
        
    },[params,data])
  return (
    <div>
        <h2>{detal.model}</h2>
    </div>
  )
}
export default CardD