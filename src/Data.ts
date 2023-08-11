import UserAvatar from "./assets/image/user_avatar.webp";
import UserAvatar2 from "./assets/image/user_avatar_2.webp";
import UserAvatar3 from "./assets/image/user_avatar_3.webp";

interface IData {
  avatarImage: any;
  firstName: string;
  lastName: string;
  revenue: string;
  comment: string;
}

const testimoniesData: IData[] = [
  {
    avatarImage: UserAvatar,
    firstName: "Sarah",
    lastName: "Andrews",
    revenue: "$100k",
    comment:
      "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
  },
  {
    avatarImage: UserAvatar2,
    firstName: "Mathew",
    lastName: "Higgins",
    revenue: "$20k",
    comment:
      "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
  },
  {
    avatarImage: UserAvatar3,
    firstName: "Janice",
    lastName: "Dave",
    revenue: "$30k",
    comment:
      "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
  },
];

export { testimoniesData };
