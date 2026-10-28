import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <section className="bg-[#fbf0ed] px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                        Our story
                    </p>
                    <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                        Good food has a way of bringing people together.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#766762]">
                        At SweetBites, we believe that food is more than
                        something we eat. It is part of our celebrations,
                        traditions and everyday moments.
                    </p>
                </div>
            </section>

            <section className="px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85s"
                        alt="A cook preparing food in a kitchen"
                        className="h-[330px] w-full rounded-3xl object-cover sm:h-[440px]"
                    />

                    <div>
                        <h2 className="font-serif text-3xl sm:text-4xl">
                            A little care goes a long way.
                        </h2>
                        <p className="mt-5 text-sm leading-8 text-[#766762]">
                            From familiar Nigerian dishes to carefully decorated
                            cakes, we want every order to feel thoughtfully
                            prepared. Whether you're planning a gathering or
                            ordering a treat for someone special, we're here to
                            help you find something you'll enjoy.
                        </p>
                        <p className="mt-4 text-sm leading-8 text-[#766762]">
                            Our approach is simple: listen to what our customers
                            need, discuss suitable options and pay attention to
                            the details that make a meal memorable.
                        </p>
                        <Link
                            to="/services"
                            className="mt-7 inline-block rounded-full bg-[#c85c78] px-6 py-3.5 text-sm text-white hover:bg-[#a84662]"
                        >
                            Explore Our Services ↗
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8efeb] px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                            What matters to us
                        </p>
                        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                            The little things matter.
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3">
                        {[
                            {
                                title: "Good food",
                                description:
                                    "Food choices made with flavour, care and attention.",
                            },
                            {
                                title: "Thoughtful service",
                                description:
                                    "Clear communication about orders, portions and preferences.",
                            },
                            {
                                title: "Special moments",
                                description:
                                    "Helping make birthdays, gatherings and celebrations feel special.",
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-[#ebded7] bg-[#fffaf7] p-6"
                            >
                                <h3 className="font-serif text-xl">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#766762]">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-16 text-center md:px-8">
                <h2 className="font-serif text-3xl">
                    Let's make something delicious.
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#766762]">
                    Have an occasion coming up or a cake in mind? We'd love to
                    hear what you're planning.
                </p>
                <Link
                    to="/contact"
                    className="mt-6 inline-block rounded-full bg-[#c85c78] px-6 py-3.5 text-sm text-white hover:bg-[#a84662]"
                >
                    Get in Touch
                </Link>
            </section>
        </>
    );
}
