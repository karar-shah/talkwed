import CustomSlider from '@/common/Slider/CustomSlider';
import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
let list = [
    {
        image: "/vendor21.svg",
        title: "Laurie Rhodes Photo",
        price: "$6,720",
        rating: "4.9",
        totalReviews: "145",
        location: "New York, NY",
    },
    {
        image: "/vendor22.svg",
        title: "Laurie Rhodes Photo",
        price: "$6,720",
        rating: "4.9",
        totalReviews: "145",
        location: "New York, NY",
    },
    {
        image: "/vendor23.svg",
        title: "Laurie Rhodes Photo",
        price: "$6,720",
        rating: "4.9",
        totalReviews: "145",
        location: "New York, NY",
    },
    {
        image: "/vendor24.svg",
        title: "Laurie Rhodes Photo",
        price: "$6,720",
        rating: "4.9",
        totalReviews: "145",
        location: "New York, NY",
    },
    {
        image: "/Wadding1.png",
        title: "Laurie Rhodes Photo",
        price: "$6,720",
        rating: "4.9",
        totalReviews: "145",
        location: "New York, NY",
    },
];
const Photographers = () => {
    return (
        <section>
            <h1 className="text-brand-heading text-[26px] font-bold mb-4">Top rated photographers</h1>
            <CustomSlider slidesPerView={4}>
                {list?.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded w-full">
                        <img src={item.image} alt="Top rated vendor" height={131} className="w-full rounded max-h-[131px]" />
                        <div className="space-y-1 p-2">
                            <div className="flex items-center justify-between">
                                <h4 className="text-brand-muted font-semibold text-lg truncate">
                                    {item.title}
                                </h4>
                                <p className="text-brand-muted2">
                                    {item.price}
                                </p>
                            </div>
                            <div className="flex items-center text-brand-muted2 text-base font-semibold">
                                <BsStarFill className="text-[#FBBC05]" />&nbsp;{item.rating}&nbsp;({item.totalReviews})
                            </div>
                            <p className="flex items-center text-brand-muted2  text-base font-semibold"><IoLocationOutline />&nbsp;{item.location}</p>
                        </div>
                    </div>
                ))}
            </CustomSlider>
        </section>
    )
}

export default Photographers