"use client";
import Breadcrumb from "@/common/Breadcrumb";
import React from "react";
import Container from "@/common/Container";
import Categories from "./Categories";
import Typography from "@/common/Typography";
import Plans from "./Plans";
import MoreTopics from "./MoreTopics";
let list = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Wedding ideas",
    link: "/ideas",
  },
  {
    title: "Planning Basic",
    link: "/ideas",
  },
  {
    title: "2022 Wedding...",
    link: "/ideas",
    active: true,
  },
];
const IdeasSlug = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-6">
        <Breadcrumb list={list} />
      </div>

      <Container className="py-16 space-y-16">
        <div className="grid grid-cols-7 gap-16">
          <div className="col-span-5">
            <div className="flex justify-between">
              <div>
                <Typography
                  component="h3"
                  className="mb-3"
                  title="2022 Wedding Trends That Are Actually Doable"
                />
              </div>
              <div className="icons flex gap-2">
                <img src='/ideas/Share.svg' alt='share_icons' className="h-[30px] w-[30px]" />
                <img src='/ideas/Heart_01.svg' alt='heart_icons' className="h-[30px] w-[30px]" />
              </div>
            </div>
            <img
                src="/ideas/articles.svg"
                alt="ideas_image"
                height={427}
                className="w-full rounded-sm"
              />
              <Typography
                  component="p"
                  className="my-5"
                  title=" Each and every year, we look forward to creating a list of the top wedding trends for the upcoming season. It’s a labor of love for our team, and always exciting to hear from pros about the unique ideas that we can expect to see in the months ahead. However, we can’t ignore that this has been a wedding season like no other. Events are back in a big way (hello, wedding boom!), and with gathering restrictions loosened, couples can have more flexibility in terms of guest lists and seating arrangements. But with the on-going COVID-19 pandemic and shortages rocking the industry, anyone who’s planning a wedding right now deserves a major round of applause (and perhaps a strong beverage). "
              />

                  <Typography
                  component="p"
                  className="my-5"
                  title=" Given all that’s going on in the world, we wanted to present a somewhat different take on our 2022 wedding trends report this year. Yes, it’s fun to look at lofty trends, like multi-course tasting menus and over-the-top favors, but we’re all about keeping things real here. You’ll find that our 2022 wedding trends are less about specific items and “must-dos,” and more about new ways of thinking about your wedding as a whole and providing options for all couples."
              />

                  <Typography
                  component="p"
                  className="my-5"
                  title='“Although it feels like we are just now catching our breath after one wild 2021 season, we could not be more excited about all that is to come in 2022,” says Nora Sheils of Bridal Bliss in Lake Oswego, Oregon. "And what is so unique about next year is that it is somewhat of a non-trend trend year. Whether our couples are focusing on what truly is important to them or a push towards individuality, we are seeing more of our couples marching to their own drums, picking colors they love, flowers that they are drawn to, and celebrating with their favorite people.”'
              />

                 <Typography
                  component="p"
                  className="my-5"
                  title="We’re totally on board with that. These 2022 trends are ones that anyone can incorporate into their wedding."
              />
              <img
                src="/ideas/image 116.svg"
                alt="ideas_image"
                height={427}
                className="w-full rounded-sm"
              />

               <Typography
                  component="h4"
                  className="my-5"
                  title="Guest-Centered Mindset "
                  />

                  <Typography
                  component="p"
                  className="my-5"
                  title="As we’re entering into a new wedding season, there’s been a major shift in the industry. And no, it has nothing to do with color schemes, themes, or style—it’s a change in mindset. “We're rapidly moving away from a couple-centered celebration to a guest-centered mindset,” says Kristy Rice of Momental Designs in Wyoming, Pennsylvania. “Couples are returning to ways they can pamper their guests, make them feel at home and cared for. Couples are realizing that their wedding is the first time many families are coming out into the world of parties again and are being exceptionally sensitive to this fact.” "
                  />

                 <Typography
                  component="p"
                  className="my-5"
                  title="And no, focusing on the guest experience doesn’t mean blowing your budget. It can mean something as simple as changing up the seating arrangement during your ceremony. According to Natasha Celestin of Just4U Wedding Coordination and More in Fort Worth, Texas, circular wedding ceremonies, where guests are seated in a circle around the couple, are gaining popularity. With this setup, guests are able to see the couple and each other from all angles, making for a more comfortable and community-focused ceremony experience. "
                  />

                  <Typography
                  component="p"
                  className="my-5"
                  title="Or you might consider adding a surprise element to the day, whether it’s a special song-and-dance number or a candy truck featuring your favorite childhood treats. “Surprises equal memories, and it’s more important than ever to create memories with the people you love the most after a year in lockdown,” says Amy Shack Egan of Modern Rebel & Co. in Brooklyn, New York."
                  />
              
          </div>
          <div className="col-span-2 ">
            <Categories />
          </div>
        </div>
        <hr />
        <MoreTopics />
      </Container>
    </div>
  );
};

export default IdeasSlug;
