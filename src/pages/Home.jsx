import { Link } from "react-router-dom";

const featured = [
    {
        name: "Party Jollof Rice",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85",
        description: "A favourite for celebrations and family gatherings.",
    },
    {
        name: "Celebration Cakes",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
        description: "Sweet treats for birthdays and special milestones.",
    },
    {
        name: "Small Chops",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
        description: "Tasty little bites for sharing with your guests.",
    },
];

export default function Home() {
    return (
        <>
            <section className="bg-[#fbf0ed] px-5 py-14 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
                    <div>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                            Freshly made · Made with love
                        </p>

                        <h1 className="font-serif text-5xl leading-tight text-[#392b27] sm:text-6xl">
                            Good food,
                            <br />
                            <span className="italic text-[#c85c78]">
                                beautiful
                            </span>
                            <br />
                            moments.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-8 text-[#766762]">
                            From the jollof that brings everyone together to the
                            cake that makes a birthday special, we make food
                            worth looking forward to.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/menu"
                                className="rounded-full bg-[#c85c78] px-6 py-3.5 text-sm text-white hover:bg-[#a84662]"
                            >
                                Explore Our Menu ↗
                            </Link>

                            <Link
                                to="/contact"
                                className="rounded-full border border-[#c7a16d] px-6 py-3.5 text-sm text-[#654638] hover:bg-white"
                            >
                                Book Our Catering
                            </Link>
                        </div>

                        <p className="mt-8 text-sm text-[#765f54]">
                            ♡ Made with care &nbsp; · &nbsp; ✳ Made for sharing
                        </p>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
                        alt="A colourful selection of freshly prepared food"
                        className="h-[340px] w-full rounded-[40%_40%_14px_14px] object-cover sm:h-[460px]"
                    />
                </div>
            </section>

            <section className="px-5 py-20 md:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                        A taste of SweetBites
                    </p>
                    <h2 className="mt-3 font-serif text-3xl text-[#392b27] sm:text-4xl">
                        Made for your favourite moments.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#766762]">
                        Discover a few of the meals and treats we can prepare
                        for your next celebration or special order.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featured.map((item) => (
                            <article
                                key={item.name}
                                className="overflow-hidden rounded-2xl border border-[#eee1da] bg-white"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="h-60 w-full object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="font-serif text-xl">
                                        {item.name}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#766762]">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Link
                            to="/menu"
                            className="inline-block rounded-full border border-[#d6b98c] px-6 py-3 text-sm text-[#754b47] hover:bg-[#f5e2e4]"
                        >
                            View the full menu ↗
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8efeb] px-5 py-16 text-center md:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                    Planning something special?
                </p>
                <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl sm:text-4xl">
                    Let us take care of the food.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#766762]">
                    Tell us what you're celebrating, and let's discuss a menu
                    that suits your occasion.
                </p>
                <Link
                    to="/contact"
                    className="mt-7 inline-block rounded-full bg-[#c85c78] px-7 py-3.5 text-sm text-white hover:bg-[#a84662]"
                >
                    Make an Enquiry ↗
                </Link>
            </section>
        </>
    );
}
