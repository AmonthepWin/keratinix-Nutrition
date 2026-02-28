'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for deep depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yVeryFast = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#FCFBF9] text-ink min-h-[300vh] selection:bg-stone-300 selection:text-ink cursor-default overflow-x-hidden font-serif">

      {/* AMBIENT FLOATING WASHES (Hanfu Colors) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full wash-rose mix-blend-multiply opacity-40 blur-3xl animate-float-slow"></div>
        <div className="absolute top-[40%] left-[-20%] w-[70vw] h-[70vw] rounded-full wash-sage mix-blend-multiply opacity-30 blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full wash-peach mix-blend-multiply opacity-30 blur-3xl animate-float-slow" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* MINIMALIST SIDE NAVIGATION */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-12 items-center mix-blend-difference text-white">
        <a href="#manifesto" className="vertical-rl text-[10px] uppercase tracking-[0.4em] font-sans hover:text-primary transition-colors duration-500">The Codex</a>
        <a href="#archives" className="vertical-rl text-[10px] uppercase tracking-[0.4em] font-sans hover:text-primary transition-colors duration-500">Archives</a>
        <a href="#clinical" className="vertical-rl text-[10px] uppercase tracking-[0.4em] font-sans hover:text-primary transition-colors duration-500">Clinical Rx</a>
      </nav>

      <main className="relative z-10 w-full flex flex-col items-center">

        {/* HERO SECTION - THE ALCHEMIST SCHOLAR */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 lg:pt-0">
          <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center justify-between">

            {/* Left: Text & Titles */}
            <motion.div style={{ y: yFast, opacity: opacityFade }} className="w-full lg:w-5/12 flex flex-col items-start text-left z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <span className="text-[9px] uppercase tracking-[0.6em] font-sans text-stone-500 border-l border-stone-300 pl-4">
                  Welcome to the Sanctuary
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                className="text-[clamp(3.5rem,6vw,7rem)] font-arcane leading-[0.9] text-ink uppercase tracking-tighter mix-blend-multiply"
              >
                Keratinix <br /> <span className="italic font-serif font-light opacity-80 normal-case tracking-normal">Nutrition</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
                className="mt-6 text-xl md:text-3xl font-arcane text-stone-700 tracking-wide"
              >
                The Codex of Cultivation
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-[1px] bg-ink mt-8 hidden lg:block"
              ></motion.div>
            </motion.div>

            {/* Right: Floating Scholar Image */}
            <motion.div style={{ y: ySlow }} className="w-full lg:w-7/12 relative mt-16 lg:mt-0 flex justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-[800px] aspect-square overflow-hidden pointer-events-none mix-blend-multiply">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/images/scholar/Drinking Tea.webp"
                    alt="The Alchemist Scholar"
                    fill
                    className="object-contain object-bottom scale-110"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-stone-500 hidden md:block">Read the Manifesto</span>
            <div className="w-[1px] h-16 bg-stone-300 overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-1/2 bg-ink"
              ></motion.div>
            </div>
          </motion.div>

        </section>

        {/* THE MANIFESTO (Bilingual Dual Column) */}
        <section id="manifesto" className="relative w-full max-w-[1400px] px-6 py-32 md:py-48 flex items-center justify-center">
          <motion.div
            style={{ y: ySlow }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-16 relative"
          >
            <div className="absolute top-0 right-0 p-6 text-[10px] font-sans uppercase tracking-[0.5em] text-stone-400 border-b border-stone-200">
              Prologue
            </div>

            <h3 className="font-arcane text-4xl mb-16 text-center lg:text-left">The Grand Illusion & The Cure</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* English Pillar */}
              <div className="flex flex-col gap-6 text-stone-700 leading-relaxed font-light text-justify">
                <p className="first-letter:text-6xl first-letter:font-arcane first-letter:mr-3 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                  In a digital era flooded with viral gummies, fast-food beauty trends, and sponsored illusions, true vitality has become painfully rare. The wellness industry is basically an NPC simulation, pushing topical products that barely scratch the surface of our physiological potential.
                </p>
                <p>
                  Keratinix Nutrition is not a store; it is a sanctuary for those ready to stop coping and start elevating their inner architecture. We merge the timeless elegance of Eastern philosophy—the harmonization of Qi and mindful balance—with the absolute, unforgiving precision of Western clinical nutrition and cellular biochemistry.
                </p>
                <p>
                  Your guide through this journey is the <span className="font-medium italic">"Alchemist Scholar,"</span> an elegant, Hanfu-wearing master of molecular science. He possesses the ultimate "Chad" aura, but he is not here to judge your current routine; he is here to rescue it. With a warm, knowing smile and a cup of freshly brewed tea, he systematically cuts through the noise. He gently but firmly dismantles the trend-chasing influencers who misguide you, breaking down exactly why their advice is mid at the molecular level. He doesn't do this out of arrogance, but out of a sincere, scholarly devotion to the truth. He wants to protect your health and your wallet from copium.
                </p>
                <p>
                  At Keratinix, we teach that true Looksmaxxing begins at the cellular level. A sharp jawline (Mewing alone won't save you if your collagen is degrading), radiant skin, and unbreakable hair are not achieved through sheer luck; they are the emergent properties of optimized nutrition, precise supplementation, and hormonal balance. The Scholar freely shares his Codex—the clinical data, the verified peptide chains, the bioavailable extracts—so that you can rebuild your foundation and actually ascend.
                </p>
                <p className="font-medium italic text-ink">
                  He invites you to step out of the cycle of marketing gimmicks and step into a refined, highly-educated approach to your own body. Because true elegance isn't just worn—it is formulated from within.
                </p>
              </div>

              {/* Thai Pillar */}
              <div className="flex flex-col gap-6 text-stone-700 leading-relaxed font-light text-justify">
                <p className="first-letter:text-6xl first-letter:font-arcane first-letter:mr-3 first-letter:float-left first-line:tracking-wide">
                  ในยุคดิจิทัลที่หน้าฟีดเต็มไปด้วยเยลลี่คอลลาเจนตามกระแส อาหารเสริมที่ขายฝัน และคำแนะนำแบบ "อ่อม" สุดๆ ศาสตร์แห่งการดูแลสุขภาพที่แท้จริงกลับกลายเป็นบทเรียนที่คนมองข้าม อุตสาหกรรม Wellness ในปัจจุบันมักหลอกฟันเงินสารพัด NPC โดยยัดเยียดผลิตภัณฑ์ฉาบฉวยที่ทากันไปก็แค่นั้น เพราะมันไม่เคยไปถึงศักยภาพที่แท้จริงของร่างกาย (Potential) ของเราเลย
                </p>
                <p>
                  Keratinix Nutrition จึงไม่ใช่แค่บิวตี้บล็อกหรือร้านอาหารเสริมทั่วไป แต่มันคือ "พื้นที่เซฟโซน" สำหรับคนที่พร้อมจะเลิกหลอกตัวเอง (Stop Coping) และเริ่มยกระดับ Inner Architecture (โครงสร้างภายใน) อย่างจริงจัง เราผสานความสง่างามเหนือกาลเวลาของปรัชญาตะวันออก—การปรับสมดุล Qi (ชี่) และระบบไหลเวียน—เข้ากับความแม่นยำขั้นสุดแบบ No BS ของโภชนาการคลินิก (Clinical Nutrition) และชีวเคมีระดับเซลล์
                </p>
                <p>
                  ผู้นำทางของคุณในเส้นทางนี้คือ <span className="font-medium italic">"The Alchemist Scholar"</span> – ปราชญ์หนุ่มชุดฮั่นฝู ผู้เชี่ยวชาญด้านเวชศาสตร์โมเลกุล ผู้มาพร้อมกับ Vibe ระดับ Chad ตัวมัม ตัวมารดา เขาไม่ได้มาที่นี่เพื่อเบะปากใส่ Routine สกินแคร์พังๆ ของคุณ แต่เขามาเพื่อฉุดคุณขึ้นมาจากห้วงลึก ด้วยรอยยิ้มที่อ่อนโยนและชาอุ่นๆ หนึ่งจอก เขาพร้อมที่จะ "เบิกเนตร" ชำแหละข้อมูลขยะ และหักล้างคำแนะนำงงๆ ของอินฟลูฯ ที่สร้างความวอดวายให้กับร่างกายคุณได้อย่างนุ่มนวล เขาพร้อมกาง Fact check ให้เห็นภาพชัดๆ ว่าทำไมไอเท็มฮิตพวกนั้นถึงบ้งในระดับโมเลกุล... ไม่ใช่เพื่อจะขิงใคร แต่ด้วยความปรารถนาดีแบบฟีลพี่ชายสายวิทย์ เพราะเขาอยากปกป้องทั้งสุขภาพไตและเงินในบัญชีของคุณ
                </p>
                <p>
                  ที่ Keratinix เราขอประกาศกร้าวว่าศาสตร์แห่ง Looksmaxxing ขนานแท้นั้น มันไม่ได้จบแค่การทำ Mewing หรือฝึก Hunter Eyes แต่มันเริ่มต้นขึ้นลึกระดับเซลล์ต่างหาก กรอบหน้าที่พุ่งจนบาดมือ, ผิวที่โกลว์ระดับ Glass Skin, หรือเส้นผมที่เงางาม ไม่ได้เกิดจากบุญบารมีเก่า แต่มันคือผลลัพธ์ที่ตามมา (Emergent Properties) เมื่อเรารับโภชนาการที่เพอร์เฟกต์, การใช้ Supplements ที่แม่นยำ, และความสมดุลของระดับฮอร์โมน ปราชญ์ของเราพร้อมเปิด Codex เคล็ดลับนี้แบบรัวๆ—ทั้ง Clinical Data ที่เชื่อถือได้, Peptide Chains งานวิจัยตัวท็อป, และสารสกัดที่มี Bioavailability (การดูดซึมนำไปใช้งาน) ขั้นสุด—เพื่อให้คุณได้พาตัวเองตื่นรู้และ Ascend สู่ร่างทองที่แท้จริง
                </p>
                <p className="font-medium text-ink">
                  เขาขออัญเชิญให้คุณเดินออกจากวงจรอุบาทว์ของการตลาดหลอกเด็ก และเข้าสู่วิถีนักรบโภชนาการที่ฉลาด สง่างาม และมีคลาสมากขึ้น... เพราะออร่าความแพงที่แท้จริง ไม่ใช่แค่เสื้อผ้าที่สวมใส่ แต่มันคือโครงสร้างที่ถูก Formulated มาจากระบบภายในอย่างแท้จริง
                </p>
              </div>
            </div>
          </motion.div>
        </section>


        {/* BLOG ARCHIVES - BROKEN GRID */}
        <section id="archives" className="relative w-full max-w-[1500px] mt-24 mb-48 px-6 min-h-screen">

          <div className="w-full flex justify-between items-end border-b border-ink pb-4 mb-24">
            <h2 className="font-arcane text-5xl text-ink">The Archives</h2>
            <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500">Recent Dissertations</span>
          </div>

          <div className="flex flex-col gap-40 md:gap-64">

            {/* ARTICLE 1: The Collagen Myth */}
            <article className="flex flex-col md:flex-row items-center gap-16 relative">
              <motion.div
                style={{ y: yFast }}
                className="w-full md:w-5/12 order-2 md:order-1 relative z-10"
              >
                <div className="bg-[#FCFBF9]/80 backdrop-blur-md p-10 border border-stone-200 shadow-xl ml-0 md:-mr-16">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-stone-400 mb-6 block">Debunking Series • Entry 01</span>
                  <h3 className="font-arcane text-4xl mb-6 leading-tight text-ink hover:text-stone-500 transition-colors cursor-pointer">The Collagen Myth: Why Your Skincare Routine is Pure Copium</h3>
                  <p className="font-serif italic text-stone-600 mb-8 leading-relaxed">
                    "I observe the masses consuming topical creams, believing external friction alters internal truth." The Scholar coldly dismantles the multi-million dollar falsehood of superficial collagen application and explains molecular synthesis.
                  </p>
                  <a href="#" className="text-xs uppercase font-sans tracking-[0.2em] border-b border-ink pb-1 hover:text-stone-500 transition-colors">Read the Fact Check →</a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-7/12 order-1 md:order-2 aspect-[4/3] relative overflow-hidden mix-blend-multiply bg-stone-100"
              >
                <Image src="/images/scholar/Annoyed  Disappointed.webp" alt="Annoyed Scholar" fill className="object-cover object-top opacity-90 manhua-mask hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            </article>

            {/* ARTICLE 2: Mewing vs Molecular Density */}
            <article className="flex flex-col md:flex-row items-center justify-end gap-16 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-7/12 aspect-[4/3] relative overflow-hidden mix-blend-multiply bg-stone-100"
              >
                <Image src="/images/scholar/Mogging Jawline.webp" alt="Mogging Scholar" fill className="object-cover object-top opacity-90 manhua-mask hover:scale-105 transition-transform duration-1000" />
              </motion.div>
              <motion.div
                style={{ y: yVeryFast }}
                className="w-full md:w-5/12 relative z-10"
              >
                <div className="bg-[#FCFBF9]/80 backdrop-blur-md p-10 border border-stone-200 shadow-xl ml-0 md:-ml-16 mt-[-40px]">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-stone-400 mb-6 block">Structural Engineering • Entry 02</span>
                  <h3 className="font-arcane text-4xl mb-6 leading-tight text-ink hover:text-stone-500 transition-colors cursor-pointer">Mewing vs. Molecular Density: The Blueprint for a Chiseled Jawline</h3>
                  <p className="font-serif italic text-stone-600 mb-8 leading-relaxed">
                    Tongue posture alone cannot construct bone. The Scholar presents the irrefutable evidence linking jaw width to micronutrient density, Vitamin K2 mapping, and deep cellular integrity.
                  </p>
                  <a href="#" className="text-xs uppercase font-sans tracking-[0.2em] border-b border-ink pb-1 hover:text-stone-500 transition-colors">Study the Architecture →</a>
                </div>
              </motion.div>
            </article>

            {/* ARTICLE 3: Ascension via Extracts */}
            <article className="flex flex-col md:flex-row items-center gap-16 relative">
              <motion.div
                style={{ y: yFast }}
                className="w-full md:w-5/12 order-2 md:order-1 relative z-10"
              >
                <div className="bg-[#FCFBF9]/80 backdrop-blur-md p-10 border border-stone-200 shadow-xl ml-0 md:-mr-16">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-stone-400 mb-6 block">Elixir Crafting • Entry 03</span>
                  <h3 className="font-arcane text-4xl mb-6 leading-tight text-ink hover:text-stone-500 transition-colors cursor-pointer">Ascension via Extracts: The Role of Bioavailable Peptides in Looksmaxxing</h3>
                  <p className="font-serif italic text-stone-600 mb-8 leading-relaxed">
                    "True elegance is not worn—it is formulated." Explore the peak of bioavailability as the Scholar reveals the specific peptide chains responsible for absolute skin radiance and hair vitality.
                  </p>
                  <a href="#" className="text-xs uppercase font-sans tracking-[0.2em] border-b border-ink pb-1 hover:text-stone-500 transition-colors">Enter the Laboratory →</a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-7/12 order-1 md:order-2 aspect-[4/3] relative overflow-hidden mix-blend-multiply bg-stone-100"
              >
                <Image src="/images/scholar/Holding a glowing test tube.webp" alt="Scholar holding elixir" fill className="object-cover object-top opacity-90 manhua-mask hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            </article>

          </div>
        </section>


        {/* CLINICAL RX (AFFILIATE LINKS) */}
        <section id="clinical" className="relative w-full py-48 bg-stone-100 border-t border-stone-200">
          <div className="max-w-[1400px] mx-auto px-6">

            <div className="flex flex-col mb-24 text-center md:text-left items-center md:items-start max-w-3xl">
              <span className="vertical-rl absolute hidden md:block -top-16 right-10 text-[120px] font-arcane text-stone-200 opacity-50 pointer-events-none select-none">Rx</span>
              <h2 className="font-arcane text-4xl md:text-6xl text-ink mb-6">Clinical Interventions</h2>
              <p className="font-serif italic text-stone-600">The Scholar's carefully curated, verified formulations. Procure these elements to rebuild your foundation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {[
                { name: "Peptide Matrix Pro", type: "Collagen Synthesizer", price: "55.00 CC" },
                { name: "K2/D3 Architect", type: "Bone Density Optimizer", price: "32.00 CC" },
                { name: "Qi Adaptogen Blend", type: "Cortisol Regulator", price: "48.00 CC" },
                { name: "Keratin Absolute", type: "Follicular Maximizer", price: "64.00 CC" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col group cursor-pointer"
                >
                  <div className="relative aspect-square bg-[#FCFBF9] border border-stone-200 flex justify-center items-center overflow-hidden mb-6 transition-colors duration-500 group-hover:bg-white group-hover:border-stone-400 group-hover:shadow-lg">
                    <span className="font-arcane text-6xl text-stone-200 opacity-50 group-hover:scale-110 transition-transform duration-700 select-none">Rx</span>
                    <div className="absolute inset-0 wash-sage opacity-10 mix-blend-multiply group-hover:opacity-30 transition-opacity duration-700"></div>
                  </div>
                  <h4 className="font-arcane text-xl text-ink mb-1 group-hover:text-stone-500 transition-colors">{item.name}</h4>
                  <p className="text-xs text-stone-500 font-serif italic mb-6">{item.type}</p>
                  <div className="flex justify-between items-center border-t border-stone-300 pt-4 mt-auto">
                    <span className="font-sans text-[10px] font-medium tracking-widest text-stone-400">{item.price}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-ink group-hover:text-stone-500 transition-colors">Procure</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="relative z-10 w-full bg-[#1A1A1A] text-stone-300 pt-32 pb-16 px-6 font-sans border-t border-ink">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 flex flex-col">
            <span className="text-3xl font-arcane tracking-widest text-white mb-8 block">Keratinix Nutrition</span>
            <p className="font-serif italic text-stone-400 mb-12 max-w-sm leading-relaxed text-sm">
              The pursuit of profound elegance wrapped in silken logic. Unbound by standard metrics. End the copium; begin the ascension.
            </p>
            <form className="flex border-b border-stone-600 pb-2 w-full max-w-sm">
              <input className="bg-transparent border-none w-full text-white placeholder:text-stone-600 focus:ring-0 uppercase tracking-[0.2em] text-[10px] outline-none" placeholder="ENLIST IN THE ACADEMY" type="email" />
              <button className="uppercase text-[9px] tracking-widest text-stone-300 hover:text-white transition-colors" type="submit">Join</button>
            </form>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { title: "The Scholarship", links: ["The Manifesto", "Research Papers", "Clinical Trials"] },
              { title: "Formulations", links: ["All Interventions", "Custom Pre-Mixes", "Raw Elements"] },
              { title: "The Order", links: ["Log In", "Track Requisitions", "Contact the Scholar"] }
            ].map(col => (
              <div key={col.title} className="flex flex-col gap-6">
                <h4 className="uppercase tracking-[0.3em] text-[9px] text-stone-500 border-b border-stone-800 pb-2">{col.title}</h4>
                {col.links.map(link => (
                  <a key={link} className="text-xs font-serif italic hover:text-white transition-colors text-stone-400" href="#">{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-stone-800 text-stone-600 text-[9px] uppercase tracking-[0.3em]">
          <p>© 1024-2024 Keratinix Academy.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a className="hover:text-stone-300 transition-colors" href="#">Privacy Doctrine</a>
            <a className="hover:text-stone-300 transition-colors" href="#">Terms of Covenant</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
