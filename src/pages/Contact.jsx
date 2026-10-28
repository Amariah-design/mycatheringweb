import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Event catering",
        date: "",
        details: "",
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    function sendToWhatsApp() {
        // Replace with your real WhatsApp number in international format.
        const phoneNumber = "2349060976683";

        const message = [
            "Hello SweetBites! I'd like to make an enquiry.",
            "",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Service: ${form.service}`,
            `Date: ${form.date || "Not decided"}`,
            `Order details: ${form.details || "Not provided"}`,
        ].join("\n");

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer",
        );
    }

    return (
        <>
            <section className="bg-[#fbf0ed] px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad8050]">
                        Get in touch
                    </p>
                    <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl">
                        Let's talk about your order.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#766762]">
                        Tell us what you have in mind, whether it's a
                        celebration cake, a tray of Nigerian food or catering
                        for a special event.
                    </p>
                </div>
            </section>

            <section className="px-5 py-16 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div>
                        <h2 className="font-serif text-3xl">
                            We'd love to hear from you.
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[#766762]">
                            Complete the form with your contact details and a
                            little information about your order. You can then
                            continue to WhatsApp to send the enquiry.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="rounded-2xl border border-[#eee1da] p-5">
                                <p className="text-xs uppercase tracking-wider text-[#ad8050]">
                                    Phone / WhatsApp
                                </p>
                                <p className="mt-2 text-sm text-[#5f514c]">
                                    09060976683
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#eee1da] p-5">
                                <p className="text-xs uppercase tracking-wider text-[#ad8050]">
                                    Email
                                </p>
                                <p className="mt-2 text-sm text-[#5f514c]">
                                    immaculatepaulose@gmail.com
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#eee1da] p-5">
                                <p className="text-xs uppercase tracking-wider text-[#ad8050]">
                                    Service area
                                </p>
                                <p className="mt-2 text-sm text-[#5f514c]">
                                    Abuja Municipal Area Council, FCT, Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-[#ebded7] bg-white p-5 sm:p-8"
                    >
                        <h2 className="font-serif text-2xl">Make an enquiry</h2>
                        <p className="mt-2 text-sm leading-6 text-[#766762]">
                            Fields marked with * are required.
                        </p>

                        <div className="mt-7 grid gap-5 sm:grid-cols-2">
                            <label className="text-sm font-medium">
                                Full name *
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                />
                            </label>

                            <label className="text-sm font-medium">
                                Email address *
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                />
                            </label>

                            <label className="text-sm font-medium">
                                Phone number *
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your phone number"
                                    className="mt-2 w-full rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                />
                            </label>

                            <label className="text-sm font-medium">
                                Service *
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                >
                                    <option>Event catering</option>
                                    <option>Birthday cake</option>
                                    <option>Wedding catering</option>
                                    <option>Small chops</option>
                                    <option>Nigerian food trays</option>
                                    <option>Corporate catering</option>
                                    <option>Other</option>
                                </select>
                            </label>

                            <label className="text-sm font-medium sm:col-span-2">
                                Preferred date
                                <input
                                    type="date"
                                    name="date"
                                    value={form.date}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split("T")[0]}
                                    className="mt-2 w-full rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                />
                            </label>

                            <label className="text-sm font-medium sm:col-span-2">
                                Tell us about your order
                                <textarea
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Number of guests, dishes, cake size, budget or any special requests..."
                                    className="mt-2 w-full resize-y rounded-xl border border-[#e6d9d2] bg-[#fffaf7] px-4 py-3 font-normal outline-none focus:border-[#c85c78]"
                                />
                            </label>
                        </div>

                        {!submitted ? (
                            <button
                                type="submit"
                                className="mt-6 w-full rounded-full bg-[#c85c78] px-6 py-4 text-sm font-medium text-white hover:bg-[#a84662]"
                            >
                                Prepare My Enquiry
                            </button>
                        ) : (
                            <div className="mt-6 rounded-2xl bg-[#f8efeb] p-5">
                                <p className="font-medium text-[#392b27]">
                                    Your enquiry is ready.
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#766762]">
                                    Continue to WhatsApp to send your details.
                                    Your enquiry has not been sent yet.
                                </p>
                                <button
                                    type="button"
                                    onClick={sendToWhatsApp}
                                    className="mt-4 w-full rounded-full bg-[#c85c78] px-6 py-3.5 text-sm text-white hover:bg-[#a84662]"
                                >
                                    Continue to WhatsApp
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="mt-3 w-full rounded-full border border-[#e6d9d2] px-6 py-3 text-sm"
                                >
                                    Edit details
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
}
