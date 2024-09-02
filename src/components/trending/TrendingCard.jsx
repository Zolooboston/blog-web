const TrendingCardData = [
  {
    id: 1,
    url: `https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZzsJh3lY7EcttC-4C8aBiiPT-NW04aFfoPCrIof6fnJ02SOzyGzvK-QsiPzt2i4yIY1hnolGCyWzOZJh5cQITI3Tkdkx7kAqEpf9dSzqn~0x8XKPnJ7bKKtXKKRXbgW8a3kEY~6h8CTGo-RFzgZ40mvQI5nWVaowOUsjOML4XMAWp1KvRvKaecs9m36KpNDYdV4VBGYSMN9lWkCDYBgliiz4a-yauJWW3EuYQT4V2b~-FcZMv9jCxA6yYSwG9hWsGd9ytCYiEYb~RwR~qrMuqx8Cc4IILgOsQ5PQmueei00QuFFiFAWfVCEBonUskfL1W5qhuSN3ZNKbCCSNdUY7g__`,
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },

  {
    id: 2,
    url: `https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNuXPbUh1TfAKSVfBCl72BiQjxJRDOAVpdB6e8XvVAKtBGTW5eXmGGdJ2JsJyuKM-QuTYzJU53Q6MYj6L2ktlz9U2CZKT9ilsLnMRbpMHwyyBivbiCofVUdVyOXEozyVsQazE6eAVWejTrgfEuqvYemWi1MCBdjhJ7lSFvIlVY3Ix4wf6uvJZYUWqImL7g1iN68-ce8pFhKm6KliNH9Kcc6WPs7dMCxljeMteKSl0LNUyWPXjB5lOZ6JV-YRGm4CnPfBcO3fFiGsgZM8QiV16NLZjQpOU3qzRRk3tSOE28icoTQor8rHrYTEI4Jx3LCZvJUji8dMQ19oNUminl5eFA__`,
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },

  {
    id: 3,
    url: `https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oK68-NGbNQeRGKUE5kLNIFGrxE4gUm6LsdpYvV3E7WdRUvNNBPFWl5pbIw~dxVeq2V08iUA3~XbqMoxroGoyyPOjoN~3g6VdJre7gMsfwK57AgGd0o-2UVMAdNytBsFoEd8Rpx11bR9MChu-ThSQDjZG7U7hQNP3igFEVopUmbOO5xgmZjFZb-h4blAmmGyuSgYFqv5gmyECs2uYbu8RoY0aABvs2Xp9U5Qi7t2-ybg1xnsOqg6fNuxa9jGBkbsZs2JWqm7Gh3wh0KjDnSuFCpzxND8yejsjaiHKBp7CsSqgAFgYcwbXVlbAHoY3y3H-VsWA~mfn9neiyFb2jm~6Nw__`,
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },

  {
    id: 4,
    url: `https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U0NoBQrhG-o0R5rXnLbK6jhS2r1pK21o05r6d5Rhfa1zyYM7czpgz4o8Ni9CQYL1d2fq8fTLtI-ZVfUtGF-fbl848WTVBnHkRE-UGWkrn7M~WN2H0IIyiAkgG9hdWMDOG6KOAGVLPslRsY5zeY-bEnQYfXeQ4pKudkBXh~VBl6~4gyo0C8DVyq5mZZYBLqUsse-PINwHS37gUkSqAe7cMdcoaGcDnHuHa1gwNwWiapHM9L3tpwyzQY4tB69aUfVwRGYZb6-wddda2JWqRewbzpM4Xi7WLeaGX7Cehy5969vn9S96J85rBHiYsJjiq4oTcosGddtHRfIsI7V2dlGo0A__`,
    title: "Technology",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

export const TrendingCard = () => {
  return (
    <div className=" w-full flex justify-between gap-[20px] pt-[30px]">
      {TrendingCardData.map((card) => (
        <div className="relative flex items-end ">
          <div>
            <img
              className="h-[320px] object-cover w-[289px] rounded-[12px]"
              src={card.url}
              alt=""
            />
          </div>
          <div className="flex flex-col absolute left-[28.5px] bottom-7 gap-4">
            <div className=" justify-start px-[10px] py-1 w-[77px] h-[20px] rounded-md bg-[#4B6BFB] technology ">
              Technology
            </div>
            <div className="flex flex-col text-white text-[18px] font-[600] items-start">
              {card.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
