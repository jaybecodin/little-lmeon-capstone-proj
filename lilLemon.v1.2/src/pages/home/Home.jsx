import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    const categories = ["Lunch","Mains","Desserts","A La Carte","Specials"]

    const categoriesMap = categories.map( category => {
        return <button key={category}className="menuPill rounded-full p-2.5  text-LLH7 font-extrabold text-LLGreen  min-w-fit">
            {category}
        </button>
    })

    const menunItems = [
        {
            item: "Greek Salad",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99,
            imageUrl : "../../../public/images/greekSald.webp"
        },
        {
            item: "Bruschetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
            price: 7.99,
            imageUrl : "../../../public/images/Bruschetta.jpg"
        },
        {
            item: "Grilled Fish",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
            price: 10.99,
            imageUrl : "../../../public/images/grilledFish.jpg"
        }
]

const menunItemsMap = menunItems.map( menunItem => {
    return <Fragment key={menunItem.item}>
            <div className="flex" key={menunItem.item}>
                <img src={menunItem.imageUrl} alt={menunItem.item} className="menuItem mr-4"/>
                <div className=" space-y-4"> 
                    <h1 className="text-LLH6 font-bold mb-2 capitalize">{menunItem.item}</h1>
                    <p className="paragraphSnippet text-LLH7 font-normal text-LLGreen mb-2 ">{menunItem.description}</p>
                    <h2 className="text-LLH6 font-medium text-LLGreen">${menunItem.price}</h2>
                </div>
            </div>
            <hr />
        </Fragment>
    
})
    return (
        <>
            <section className="container-nb2 LLGreen mb-10 ">.
                <div className="px-4 pb-10" >
                    <div className="mb-4 w-fit h-fit">
                        <h1 className="heroH1 text-LLyellow text-LLH1 font-serif font-medium">Little Lemon</h1>
                        <h2 className="text-LLH2 font-serif text-LLwhite font-normal">Chicago</h2>
                    </div>
                    <p className="hero-sec-p text-LLwhite text-LLH6 font-medium mb-12 max-w-">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/reserveATable" > <button className="text-black  bg-LLyellow rounded-full text-LLH7 font-bold py-2 px-4"> Reserve a table </button> </Link>
                </div>
            </section>

            <section className="container-b3 overflow-x-hidden ">
                <div className="container-b3-c1 px-4 ">
                    <div className="mb-4">
                        <h1 className="text-LLH5  font-extrabold mb-4">ORDER FOR DELIVERY</h1>
                        <div className="flex space-x-3 mb-8 capitalize">{categoriesMap}</div>
                        <hr />
                    </div>
                    <div className=" space-y-4">
                        {menunItemsMap}
                    </div>
                </div>
            </section>
        </>
    )
}