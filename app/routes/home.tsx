import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title =
    "Jurassic Words | Dinosaur Facts, Word Games, Printables for Kids";
  const description =
    "Learn about dinosaurs with kid friendly facts, timelines, and vocabulary. Play dinosaur word games, try printable activities, and explore prehistoric science with classrooms and families.";
  const canonical = "https://www.jurassicwords.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    {
      name: "keywords",
      content:
        "dinosaurs for kids, dinosaur facts, dinosaur word games, dinosaur vocabulary, printable dinosaur activities, dinosaur worksheets, prehistoric era timeline, classroom science, paleo facts, word search, crossword",
    },

    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    // Replace with a real image when ready
    {
      property: "og:image",
      content: "https://www.jurassicwords.com/og-image.jpg",
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },

    // Canonical
    { rel: "canonical", href: canonical } as any,
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    message: "New fossils are being prepared in the lab.",
    lastUpdatedISO: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const lastUpdated = new Date(loaderData?.lastUpdatedISO ?? Date.now());
  const lastUpdatedDisplay = lastUpdated.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-green-700">
      {/* Skip link */}
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Dino top nav */}
      <header className="mb-10">
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-5 text-sm">
            <li>
              <a href="#facts" className="hover:underline">
                Dinosaur Facts
              </a>
            </li>
            <li>
              <a href="#games" className="hover:underline">
                Word Games
              </a>
            </li>
            <li>
              <a href="#vocabulary" className="hover:underline">
                Vocabulary
              </a>
            </li>
            <li>
              <a href="#activities" className="hover:underline">
                Printables
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:underline">
                Timeline
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="content" className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-green-800">
          Jurassic Words. Dinosaur learning with word games and classroom
          activities
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Explore the world of dinosaurs with friendly facts, clear science, and
          fun word games. Build vocabulary, read short profiles, and try
          printable activities made for classrooms and families.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#games"
            className="inline-flex items-center rounded-md bg-green-700 px-4 py-2 text-white"
          >
            Play word games
          </a>
          <a
            href="#activities"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2"
          >
            Get printables
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-600" aria-live="polite">
          {loaderData?.message} Last updated {lastUpdatedDisplay}.
        </p>
      </section>

      {/* Dinosaur Facts */}
      <section id="facts" aria-labelledby="facts-title" className="mb-12">
        <h2 id="facts-title" className="text-2xl font-bold">
          Dinosaur facts for kids
        </h2>
        <p className="mt-3 text-slate-700">
          Meet famous species and learn what made them special. Profiles will
          include size, diet, habitat, and the era they lived in. Content is
          written for young learners and classroom use.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Tyrannosaurus rex</h3>
            <p className="mt-2 text-slate-700">
              Large carnivore from the Late Cretaceous. Powerful jaws, strong
              legs, and keen senses.
            </p>
          </li>
          <li className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Triceratops</h3>
            <p className="mt-2 text-slate-700">
              Herbivore with three horns and a large frill. Lived in herds and
              grazed on tough plants.
            </p>
          </li>
        </ul>
      </section>

      {/* Word Games */}
      <section id="games" aria-labelledby="games-title" className="mb-12">
        <h2 id="games-title" className="text-2xl font-bold">
          Learning games with dinosaur words
        </h2>
        <p className="mt-3 text-slate-700">
          Word games grow reading skills and reinforce science terms. Games will
          be simple to start and friendly on phones and tablets.
        </p>
        <ul className="mt-4 list-disc pl-5 text-slate-700">
          <li>Dinosaur word search with species names and fossil terms</li>
          <li>Crossword puzzles with clues from facts and timelines</li>
          <li>Vocabulary match with images and short definitions</li>
          <li>Scramble and build with themed letter tiles</li>
        </ul>
        <div className="mt-4 text-sm text-slate-600">
          <p>
            <strong>Teacher tip:</strong> each game will include word lists,
            answer keys, and difficulty settings.
          </p>
        </div>
      </section>

      {/* Vocabulary */}
      <section id="vocabulary" aria-labelledby="vocab-title" className="mb-12">
        <h2 id="vocab-title" className="text-2xl font-bold">
          Dinosaur vocabulary and science terms
        </h2>
        <p className="mt-3 text-slate-700">
          A growing glossary for young readers. Clear definitions with a short
          example sentence and a picture cue.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded border border-slate-200 p-4">
            <strong>Herbivore</strong>
            <p className="text-slate-700 mt-1">
              An animal that eats plants. Many dinosaurs were plant eaters.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Carnivore</strong>
            <p className="text-slate-700 mt-1">
              An animal that eats meat. Some dinosaurs hunted other animals.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Fossil</strong>
            <p className="text-slate-700 mt-1">
              The preserved remains or traces of a living thing from the past.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Paleontologist</strong>
            <p className="text-slate-700 mt-1">
              A scientist who studies fossils to learn about ancient life.
            </p>
          </li>
        </ul>
      </section>

      {/* Printables */}
      <section
        id="activities"
        aria-labelledby="activities-title"
        className="mb-12"
      >
        <h2 id="activities-title" className="text-2xl font-bold">
          Printable dinosaur activities
        </h2>
        <p className="mt-3 text-slate-700">
          Ready to print worksheets for home and school. Clean outlines and
          readable fonts help early readers.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Word search pack</h3>
            <p className="mt-2 text-slate-700">
              Species names, body parts, and fossil terms with answer keys.
            </p>
            <a
              href="/printables/word-search-pack"
              className="mt-3 inline-block text-green-700 underline"
            >
              Sample coming soon
            </a>
          </article>
          <article className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold">Crossword mini set</h3>
            <p className="mt-2 text-slate-700">
              Short clues based on facts and the timeline.
            </p>
            <a
              href="/printables/crossword-mini"
              className="mt-3 inline-block text-green-700 underline"
            >
              Sample coming soon
            </a>
          </article>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" aria-labelledby="timeline-title" className="mb-12">
        <h2 id="timeline-title" className="text-2xl font-bold">
          Prehistoric timeline for young learners
        </h2>
        <p className="mt-3 text-slate-700">
          Three major periods help place dinosaurs in time. Jurassic is famous,
          but many favorites lived in the Cretaceous.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          <li className="rounded border border-slate-200 p-4">
            <strong>Triassic</strong>
            <p className="text-slate-700 mt-1">
              Early dinosaurs appear. Small and quick species begin to spread.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Jurassic</strong>
            <p className="text-slate-700 mt-1">
              Large plant eaters and fierce hunters thrive. Many classic species
              rise.
            </p>
          </li>
          <li className="rounded border border-slate-200 p-4">
            <strong>Cretaceous</strong>
            <p className="text-slate-700 mt-1">
              Great diversity across the world. Ends with a famous mass
              extinction.
            </p>
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-title" className="mb-16">
        <h2 id="faq-title" className="text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-5">
          <details>
            <summary className="cursor-pointer font-semibold">
              Are the games free
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. Games will be free to play. Printable packs will include free
              samples.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Is this site safe for classrooms
            </summary>
            <p className="mt-2 text-slate-700">
              Yes. Content is written for young readers and teachers. No log in
              is required to play.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Can I suggest words or topics
            </summary>
            <p className="mt-2 text-slate-700">
              Suggestions are welcome after launch. You can request species,
              terms, or puzzle themes.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-6 text-sm text-green-600">
        <p>
          © {new Date().getFullYear()} Jurassic Words. All rights reserved.
        </p>
      </footer>

      {/* JSON-LD: WebSite, Organization, Breadcrumbs, FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jurassic Words",
              url: "https://www.jurassicwords.com/",
              inLanguage: "en",
              description:
                "Dinosaur facts, word games, vocabulary, and printable activities for kids and classrooms.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jurassic Words",
              url: "https://www.jurassicwords.com/",
              sameAs: [],
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.jurassicwords.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Printables",
                  item: "https://www.jurassicwords.com/printables",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are the games free",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Games will be free to play. Printable packs will include free samples.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this site safe for classrooms",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Content is written for young readers and teachers. No log in is required to play.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I suggest words or topics",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Suggestions are welcome after launch. You can request species, terms, or puzzle themes.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
