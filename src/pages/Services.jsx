import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        title: "Event Catering",
        description:
            "Nigerian meals and food packages for weddings, birthdays, family gatherings and corporate events.",
        detail: "Tell us your guest count, preferred dishes and budget.",
    },
    {
        number: "02",
        title: "Cakes & Desserts",
        description:
            "Celebration cakes, cupcakes and sweet treats for birthdays, anniversaries and special milestones.",
        detail: "Share your preferred size, flavour and design.",
    },
    {
        number: "03",
        title: "Small Chops",
        description:
            "Puff-puff, samosas, spring rolls and other party favourites prepared for sharing.",
        detail: "Ask about available combinations and quantities.",
    },
    {
        number: "04",
        title: "Food Trays",
        description:
            "Convenient trays of Nigerian favourites for offices, family meals and private celebrations.",
        detail: "Choose your dishes and let us discuss portions.",
    },
];

export default function Services() {
    return (
        <>
            <section className="bg-[#fbf0ed] px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                        What we offer
                    </p>
                    <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                        Good food for every kind of gathering.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#766762]">
                        From a box of sweet treats to catering for a special
                        event, find the service that suits your plans.
                    </p>
                </div>
            </section>

            <section className="px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="rounded-2xl border border-[#eee1da] bg-white p-7 sm:p-9"
                        >
                            <p className="font-serif text-3xl italic text-[#c85c78]">
                                {service.number}
                            </p>
                            <h2 className="mt-5 font-serif text-2xl">
                                {service.title}
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[#766762]">
                                {service.description}
                            </p>
                            <p className="mt-4 border-l-2 border-[#d1aa72] pl-3 text-sm leading-6 text-[#654e47]">
                                {service.detail}
                            </p>
                            <Link
                                to="/contact"
                                className="mt-7 inline-block rounded-full border border-[#d6b98c] px-5 py-3 text-sm text-[#754b47] hover:bg-[#f5e2e4]"
                            >
                                Ask about this service ↗
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#f8efeb] px-5 py-16 text-center md:px-8">
                <h2 className="font-serif text-3xl">Not sure what you need?</h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#766762]">
                    Tell us a little about your occasion, and we can discuss
                    suitable menu options and quantities.
                </p>
                <Link
                    to="/contact"
                    className="mt-6 inline-block rounded-full bg-[#c85c78] px-6 py-3.5 text-sm text-white hover:bg-[#a84662]"
                >
                    Talk to Us
                </Link>
            </section>
        </>
    );
}
