import { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5050/menu')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        })
    })
    return (
        <div>
            <section>
                <SectionTitle
                heading={'From Out Menu'}
                subHeading={'---Popular Items---'}>
                </SectionTitle>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {
                menu.map(item => 
                <MenuItem
                key={item._id}
                item = {item}
                // name = {item.name}
                // recipe = {item.recipe}
                // image = {item.image}
                // price = {item.price}
                ></MenuItem>)
            }

            </div>
            </section>
        </div>
    );
};

export default PopularMenu;