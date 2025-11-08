import Image from "next/image";

import profileImage from '../../public/Steyn_kalala_headshot.png'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 font-serif dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-4 md:px-16 bg-slate-50 dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6  sm:items-start sm:text-left">
          <h1 className=" text-6xl font-semibold  tracking-tight text-black dark:text-zinc-50 mb-3 md:mb-10">
            Steyn Kalala
          </h1>
          <div className="flex mb-0">
            <div className="md:w-1/5 w-2/5 mt-10 md:mt-0">
              <Image
                src={profileImage}
                alt="Picture of the author"
                width={118}
                height={118}
                className="rounded-full"
              />
            </div>
            <div className="w-4/5 mt-4">
              <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I work as a software architect and engineer at{" "}
                <a
                  href="#ogiven"
                  className="underline decoration-dotted decoration-indigo-300"
                >
                  Ogiven
                </a>
                . I&#39;m also scaling my startup,{" "}
                <a
                  href="#esdantis"
                  className="underline decoration-dotted decoration-indigo-300"
                >
                  Esdantis
                </a>
                , and running operations for my charity,{" "}
                <a
                  href="#bantucode"
                  className="underline decoration-dotted decoration-indigo-300"
                >
                  Bantucode
                </a>
                . With over 16 years of coding experience, I&#39;ve developed
                software that enhances operations across the sales, medical, and
                manufacturing industries.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400 -mt-2">
              I&#39;m also a writer,{" "}
              <a
                href="#bantucode"
                className="underline decoration-dotted decoration-indigo-300"
              >
                amateur economist
              </a>
              , {" "}
              <a
                href="#skateboarding"
                className="underline decoration-dotted decoration-indigo-300"
              >
                former aspiring pro skateboarder
              </a>
              , {" "}
              <a
                href="#economics"
                className="underline decoration-dotted decoration-indigo-300"
              >
                teacher
              </a>
              , and family man.{" "}
            </p>
          </div>
          <div className="mb-10">
            <h1
              className=" text-xl font-semibold  tracking-tight text-black dark:text-zinc-50 mb-2"
              id="skateboarding"
            >
              What Skateboarding Taught Me
            </h1>
            <p className="max-w-full text-base leading-8 text-zinc-600 dark:text-zinc-400">
              <a
                href="https://www.youtube.com/watch?v=4cpD_fe5nO0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
                id="african-economics"
              >
                Skateboarding
              </a>{" "}
              has taught me valuable lessons that go beyond the sport itself.
              Every fall is an opportunity to learn, and every failed attempt
              reminds me that persistence is key. I&#39;ve learned to get back
              up after falling and to keep trying until I land a trick, no
              matter how many times it takes. This mindset of resilience,
              patience, and determination has shaped how I approach all
              challenges.
            </p>
          </div>
        <div className="mb-10">
            <h1
              className=" text-xl font-semibold   text-black dark:text-zinc-50 mb-2 scroll-mt-32"
              id="ogiven"
            >
              Creator of Ogiven
            </h1>
            <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <a
                href="https://ogiven.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
              >
                Ogiven
              </a>{" "}
              is a software development company dedicated to helping businesses
              thrive through innovative and reliable technology solutions. We
              specialize in building custom software that streamlines
              operations, enhances productivity, and drives growth. Our team
              works closely with clients to understand their unique challenges
              and deliver scalable, high-performance applications that simplify
              complex processes. At Ogiven, we believe great software isn&#39;t
              just about code—it&#39;s about empowering companies to do better
              business every day.
            </p>
          </div>

            <div className="mb-10">
            <h1
              className=" text-xl font-semibold  tracking-tight text-black dark:text-zinc-50 mb-2 scroll-mt-32"
              id="esdantis"
            >
              Creator of Esdantis
            </h1>
            <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <a
                href="https://esdantis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
              >
                Esdantis
              </a>{" "}
              is an art-selling social media platform I created to help artists
              make a living by sharing and selling their work more effectively.
              The platform connects artists directly with buyers, allowing them
              to showcase their art, build a following, and turn their
              creativity into income. Esdantis is designed to empower artists by
              giving them the tools and visibility they need to grow their
              audience, sell more art, and sustain their passion through
              meaningful engagement and opportunity.
            </p>
          </div>
           <div className="mb-10">
            <h1 className=" text-xl font-semibold  tracking-tight text-black dark:text-zinc-50 mb-2">
              Creator of Bantucode
            </h1>
            <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I created{" "}
              <a
                href="https://bantucode.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
                id="bantucode"
              >
                Bantucode
              </a>{" "}
              , a charitable initiative dedicated to providing access to
              computing technology for individuals who lack the means to learn
              coding. Through Bantucode, we supply devices, training, and
              mentorship to help people gain valuable programming skills. Our
              program also integrates AI education, empowering learners to
              understand and apply modern technologies in real-world projects.
              The goal of Bantucode is to bridge the digital divide and create
              opportunities for aspiring programmers to build a better future
              through technology and innovation.
            </p>
          </div>
         
       <div className="mb-10">
            <h1 className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-2">
              Sharing Knowledge
            </h1>
            <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I love teaching and sharing knowledge, which I do through two
              YouTube channels. On one channel, I explore{" "}
              <a
                href="https://www.youtube.com/@steynkalala"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
                id="economics"
              >
                African economics and African economic history
              </a>
              , helping viewers understand the forces shaping the continent
              today. On the other channel, I teach{" "}
              <a
                href="https://www.youtube.com/channel/UCN2PVc5dXXdSoy5DBT8HfqQ"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-500 dark:text-indigo-300 underline"
                id="software-dev"
              >
                software development
              </a>
              , including mobile app development using        <a
                  href="https://www.swift.org/"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  Swift
                </a>,  <a
                  href="https://kotlinlang.org/"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  Kotlin
                </a>, and
              TypeScript/JavaScript; web development using  <a
                  href="https://nextjs.org/"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  React-Nextjs
                </a>; API
              development using  <a
                  href="https://nodejs.org/en"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  NodeJs
                </a>, <a
                  href="https://www.djangoproject.com/"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  Django
                </a>, and <a
                  href="https://gin-gonic.com/"
                  className="underline decoration-dotted decoration-indigo-300"
                     target="_blank"
                rel="noopener noreferrer"
                >
                  GIN/GO
                </a>; and DevOps
              practices across all major cloud providers. Teaching allows me to
              empower others with practical skills and a deeper understanding of
              technology and economics.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
