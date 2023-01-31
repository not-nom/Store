import Card from '../Card/Card'
import style from './CardList.module.css'
export const data = [{key:0,img:"https://audimediacenter-a.akamaihd.net/system/production/media/83874/images/f62389ba427e1b7eeb42d53962bcc42bc8544dfd/A1911755_blog.jpg?1582557976", model:"2020 Audi S5 Coupe",text:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus non finibus risus, vel rhoncus lacus. Pellentesque malesuada commodo velit nec aliquam. Ut lacus justo, imperdiet placerat luctus sed, bibendum sed leo."},
{key:1,img:"https://www.motorsport-total.com/img/2016/160628/192601_w620_h500.jpg?ts=1666372805", model:"2016 Ford Mustang GT",text:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus non finibus risus, vel rhoncus lacus. Pellentesque malesuada commodo velit nec aliquam. Ut lacus justo, imperdiet placerat luctus sed, bibendum sed leo."},
{key:2,img:"https://hips.hearstapps.com/hmg-prod/images/02-ss300p-3i4-front-1567937037.jpg", model:"2020 Bugatti Chiron",text:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus non finibus risus, vel rhoncus lacus. Pellentesque malesuada commodo velit nec aliquam. Ut lacus justo, imperdiet placerat luctus sed, bibendum sed leo."},
{key:3,img:"https://cdn.motor1.com/images/mgl/nr6Jx/s1/porsche-911-carrera-992-2019.jpg", model:"2019 Porsche 911 Carrera",text:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus non finibus risus, vel rhoncus lacus. Pellentesque malesuada commodo velit nec aliquam. Ut lacus justo, imperdiet placerat luctus sed, bibendum sed leo."},]

function CardList() {
  return (
    <div className={style.CarList}>
        {data.map((car) => {
return (<Card key={car.key} id={car.key} img={car.img} model={car.model} text={car.text} />);
        })}
    </div>
  )
}
export default CardList