import Image from "next/image";


import SearchSection from "./SearchSection";

export default function Career() {
  return (
    <main className="bg-white">


      
      {/* TOP BAR */}
      <div className="bg-teal-800 py-6">
        <h1 className="text-center text-white text-3xl font-semibold">
          Careers
        </h1>
      </div>

      {/* HERO SECTION */}
      <section className="bg-[#eaf3ec]">
        <div className="mx-auto max-w-7xl px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Drive the Movement | Build <br />
              What Moves the World
            </h2>

            <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
              At DriverX Mobile, we’re more than a telecom company — we’re an
              innovation engine built for the people who keep the world moving.
              From gig workers to fleet operators, our mission is to power
              productivity on the road — and it takes bold thinkers, builders,
              and doers to make that happen.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[380px] w-full">
            <Image
              src="/images/c.png"
              alt="Careers at DriverX"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

     <section className="py-14">
  <h3 className="text-center text-teal-700 font-semibold mb-10">
    Why Work With Us
  </h3>

  <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
    {[
      {
        title: "Culture of Innovation",
        desc: "Thrive in an environment that fosters curiosity, embraces bold ideas and invests in advanced research.",
        icon: "💡",
      },
      {
        title: "Growth Without Limits",
        desc: "From internal mobility to certifications, mentorship and hands-on learning.",
        icon: "📈",
      },
      {
        title: "Impact, Not Hierarchy",
        desc: "Your work directly improves the lives of drivers and delivery professionals.",
        icon: "👥",
      },
      {
        title: "Global Backing, Agile Execution",
        desc: "Scale of a Fortune-grade infrastructure with startup agility.",
        icon: "🌍",
      },
    ].map((item, i) => (
      <div key={i}>
        <div className="flex justify-center mb-4 text-3xl text-teal-700">
          {item.icon}
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">
          {item.title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* JOB CATEGORIES */}
      <section className="bg-white py-16">
  <div className="mx-auto max-w-7xl px-8 text-center">
    <p className="text-gray-700 max-w-3xl mx-auto mb-12">
      At Zoiko Healthcare, your skills can thrive in a multitude of areas.
      We are continuously seeking bright minds across functions such as
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        "Software Development",
        "Customer Operations & Loyalty Lifecycle Management",
        "IoT, SIM, & Telematics Engineering",
        "Strategic Partnerships & B2B Sales",
        "Business Development Executives",
        "Analytics, Insights & Performance Strategy",
      ].map((role, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-6 flex flex-col items-center"
        >
          {/* ICON BOX */}
          <div className="w-12 h-12 rounded-md bg-yellow-400 flex items-center justify-center mb-4">
            <span className="text-lg">💼</span>
          </div>

          {/* TITLE */}
          <h4 className="font-semibold text-gray-900 text-sm mb-6 text-center leading-snug">
            {role}
          </h4>

          {/* BUTTON */}
        <button className="mt-auto border border-blue-600 text-blue-600 text-xs px-5 py-2 rounded-full hover:bg-blue-50 transition">
  Apply Now
</button>
        </div>
      ))}
    </div>
  </div>
</section>



<SearchSection/>
    </main>
  );
}
