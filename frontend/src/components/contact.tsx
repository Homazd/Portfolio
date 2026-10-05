import type { Profile } from "@/lib/types";
import { ContactForm } from "./contact-form";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="border-t-3 border-line bg-mint py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="display text-6xl sm:text-8xl">Get in touch</h2>
          <p className="mt-5 max-w-[45ch] text-lg leading-relaxed">
            Tell me about your project or the role you&apos;re hiring for, and I&apos;ll get back to you by email.
          </p>
          <dl className="mt-10 space-y-5 text-lg">
            <div>
              <dt className="font-semibold">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-2xl font-extrabold break-all underline decoration-plum decoration-4 underline-offset-6 hover:text-plum"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            {profile.phone && (
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="font-bold hover:text-plum">
                    {profile.phone}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="font-semibold">Based in</dt>
              <dd className="font-bold">{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-[18px] border-3 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
