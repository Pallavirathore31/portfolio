function Contact() {
  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-slate-800"
          />

          <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;