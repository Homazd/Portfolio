import type { Dictionary } from "@/i18n/dictionaries";
import type { SkillGroup } from "@/lib/types";
import { Heading } from "./heading";

const CHIP_COLORS = [
  "bg-plum text-plum-foreground",
  "bg-butter text-on-color",
  "bg-mint text-on-color",
  "bg-sky text-on-color",
];

export function Skills({ groups, dict }: { groups: SkillGroup[]; dict: Dictionary["skills"] }) {
  return (
    <section id="skills" className="border-t-3 border-line bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading title={dict.title} intro={dict.intro} />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {groups.map((group, i) => (
            <div key={group.name}>
              <h3 className="text-2xl font-extrabold">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className={`rounded-full border-3 border-line px-4 py-1.5 font-bold shadow-[3px_3px_0_#000] ${
                      CHIP_COLORS[i % CHIP_COLORS.length]
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
