
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div>
            <div className="flex items-center gap-3">
                <div>
                    <img src={image} className="w-28 rounded-full rounded-tl-none"/>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-medium">{name}    --------------------</p>
                        <p className="text-yellow-600">${price}</p>
                    </div>
                    <div>
                        <p>{recipe}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem