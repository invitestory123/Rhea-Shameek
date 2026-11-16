/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    bride: "Rhea Badyal",
    brideShort: "Rhea",
    groom: "Shameek Dave",
    groomShort: "Shameek",
    hashtag: "#RheaAndShameek",
  },
  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate their wedding",
  },
  event: {
    title: "The Wedding of Rhea & Shameek",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2027-02-12T10:00:00+05:30",
    endsAt: "2027-02-12T23:00:00+05:30",
    dateLabel: "30th Jan, 11th & 12th February 2027",
    dateLine1: "30th Jan",
    dateLine2: "11th & 12th February 2027",
    dayLabel: "",
    timeLabel: "",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Celebrations to follow",
  },
  venue: {
    name: "Mayfair Lake Resort",
    address: "Sector 24, Atal Nagar-Nava Raipur, Tuta, Raipur, Chhattisgarh 492101",
    mapsQuery: "Mayfair Lake Resort, Raipur, Chhattisgarh",
    url: "https://share.google/MXAlmNJHjwyfxZ8Pc",
    lat: 21.162,
    lng: 81.787,
  },
  itinerary: [
    {
      date: "30th Jan 2027",
      title: "Engagement",
      location: "Bhatinda",
    },
    {
      date: "11th Feb 2027",
      title: "Mehendi, Sangeet",
      location: "Mayfair Lake Resort, Raipur",
    },
    {
      date: "12th Feb 2027",
      title: "Choora, Haldi, Wedding",
      location: "Mayfair Lake Resort, Raipur",
    },
  ],
  story: [],
  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation:
      "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "",
  },
  footer: {
    families: "With love & warm wishes from the Badyal & Dave Families",
    contacts: [],
  },
  meta: {
    title: "Rhea & Shameek — Wedding Invitation",
    description:
      "Rhea Badyal and Shameek Dave cordially invite you to celebrate their wedding on February 12, 2027 at Mayfair Lake Resort, Raipur.",
    url: "https://rhea-shameek.vercel.app",
    image: "https://media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Rhea & Shameek Wedding",
  },
} as const;

export type Invitation = typeof invitation;
