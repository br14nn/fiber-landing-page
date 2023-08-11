import LinksGroup from "../LinksGroup/LinksGroup";
import Link from "../LinksGroup/Link";
import { testimoniesData } from "../../Data";

export default function () {
  return (
    <section className="bg-vista-white px-28 py-20 tablet:px-14 mobile-max:px-8">
      <div className="flex flex-row items-start justify-between tablet:flex-col tablet:gap-y-10">
        <div className="flex w-[35%] flex-col items-start gap-y-2 tablet:w-1/2 mobile-max:w-full">
          <p className="text-xl font-bold">Fiber</p>
          <p className="text-liver">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates. <br />
            <br /> Made with ❤ in the Netherlands.
          </p>
        </div>

        <LinksGroup title="Sitemap">
          <Link>Homepage</Link>
          <Link>Pricing</Link>
          <Link>Testimonials</Link>
          <Link>Features</Link>
        </LinksGroup>
        <LinksGroup title="Resources">
          <Link>Resources</Link>
          <Link>Contact</Link>
          <Link>FAQ</Link>
        </LinksGroup>
        <LinksGroup title="Company">
          <Link>About</Link>
          <Link>Customers</Link>
          <Link>Blog</Link>
        </LinksGroup>

        <LinksGroup title="Portfolios">
          {testimoniesData.map((val, idx) => {
            return (
              <Link key={`${val.lastName}-${idx}`}>
                {val.firstName} {val.lastName}
              </Link>
            );
          })}
        </LinksGroup>
      </div>
    </section>
  );
}
