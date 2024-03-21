import SectionTitle from "../../../../Components/SectionTitle";
import featuredImage from "../../../../assets/home/featured.jpg"
import "./featured.css"

const Featured = () => {
    const date = new Date();
    const month = date.getMonth()
    const dates = date.getDate()
    const year = date.getFullYear()
    return (
        <div>
            <section className="featured-image  py-20 mt-20 bg-fixed">
                <div className="bg-gradient-to-r from-gray-800 to-transparent">
                    <SectionTitle
                        subHeading={'---Check it now---'}
                        heading={'From Our Menu'}>
                    </SectionTitle>

                    <div className="flex items-center  justify-around ">
                        <div className="w-1/3">
                            <img src={featuredImage} className="" />
                        </div>
                        <div>
                            <h2>{month + 1}{dates}, {year}</h2>
                            <h3>Where Can I Get Some?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsam vero totam quod soluta iusto optio commodi exercitationem?</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Featured;