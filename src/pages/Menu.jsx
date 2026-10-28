import { useState } from "react";
import { Link } from "react-router-dom";

const foods = [
    {
        name: "Party Jollof Rice",
        category: "Nigerian Meals",
        price: "Ask for price",
        description: "A classic favourite for celebrations and gatherings.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Egusi Soup",
        category: "Nigerian Meals",
        price: "Ask for price",
        description: "A rich Nigerian soup traditionally served with swallow.",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Celebration Cake",
        category: "Cakes",
        price: "Request a quote",
        description: "Custom cakes for birthdays and special occasions.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Cupcakes",
        category: "Cakes",
        price: "Request a quote",
        description: "Sweet little treats for parties and gifting.",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Small Chops",
        category: "Small Chops",
        price: "Request a quote",
        description: "A selection of savoury bites for sharing.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
    },
    {
        name: "Peppered Chicken",
        category: "Nigerian Meals",
        price: "Ask for price",
        description: "A flavourful option for meals and party trays.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85",
    },
];

const categories = ["All", "Nigerian Meals", "Cakes", "Small Chops"];

export default function Menu() {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredFoods = foods.filter((food) => {
        const matchesCategory =
            category === "All" || food.category === category;

        const matchesSearch = food.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <section className="bg-[#fbf0ed] px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                        From our kitchen
                    </p>
                    <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl">
                        Our Menu
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#766762]">
                        Nigerian favourites, freshly baked treats and party
                        bites. Explore the menu and enquire about your order.
                    </p>
                </div>
            </section>

            <section className="px-5 py-14 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <label className="block max-w-md">
                        <span className="mb-2 block text-sm font-medium">
                            Search the menu
                        </span>
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search for jollof, cake, small chops..."
                            className="w-full rounded-xl border border-[#e6d9d2] bg-white px-4 py-3 outline-none focus:border-[#c85c78]"
                        />
                    </label>

                    <div className="my-7 flex flex-wrap gap-2">
                        {categories.map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setCategory(item)}
                                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                                    category === item
                                        ? "border-[#c85c78] bg-[#c85c78] text-white"
                                        : "border-[#e5d3ca] bg-white text-[#654e47] hover:border-[#c85c78]"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {filteredFoods.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredFoods.map((food) => (
                                <article
                                    key={food.name}
                                    className="overflow-hidden rounded-2xl border border-[#eee1da] bg-white"
                                >
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        loading="lazy"
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-5">
                                        <p className="text-xs uppercase tracking-wider text-[#ad8050]">
                                            {food.category}
                                        </p>
                                        <h2 className="mt-2 font-serif text-xl">
                                            {food.name}
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-[#766762]">
                                            {food.description}
                                        </p>
                                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eee2db] pt-4">
                                            <span className="text-sm font-medium text-[#754b47]">
                                                {food.price}
                                            </span>
                                            <Link
                                                to="/contact"
                                                className="rounded-full border border-[#d6b98c] px-4 py-2 text-xs text-[#754b47] hover:bg-[#f5e2e4]"
                                            >
                                                Enquire ↗
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-[#f8efeb] px-5 py-12 text-center">
                            <h2 className="font-serif text-2xl">
                                Nothing found just yet.
                            </h2>
                            <p className="mt-3 text-sm text-[#766762]">
                                Try another search or choose a different
                                category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch("");
                                    setCategory("All");
                                }}
                                className="mt-5 rounded-full bg-[#c85c78] px-5 py-3 text-sm text-white"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
