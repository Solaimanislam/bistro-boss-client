import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/assets/home/featured.jpg";
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
            heading='Featured Items'
            subHeading='Check it Out'
            ></SectionTitle>
            <div className=" md:flex justify-center bg-slate-500 bg-opacity-60 items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=" md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p>Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam magni maxime officiis distinctio soluta, iure, ea at iusto odio praesentium reprehenderit dignissimos! Sit harum veritatis perspiciatis accusamus, explicabo provident?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;