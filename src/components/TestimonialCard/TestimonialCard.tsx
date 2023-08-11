import Name from "./Name";
import Revenue from "./Revenue";
import Comment from "./Comment";
import ViewPortfolioButton from "./ViewPortfolioButton";

type TTestimonialCardProps = {
  avatarImage: any;
  firstName: string;
  lastName: string;
  revenue: string;
  comment: string;
};

export default function (props: TTestimonialCardProps) {
  return (
    <div className="flex min-h-[17rem] w-full flex-col gap-y-4 rounded-md border border-light-grey p-7 font-medium mobile-max:w-full mobile-max:min-w-min mobile-max:max-w-max">
      <div className="flex flex-row items-center gap-4">
        <img
          className="selector"
          src={props.avatarImage}
          width={54}
          height={54}
          alt={`user avatar`}
        />
        <p className="text-sm leading-tight">
          <Name>
            {props.firstName} {props.lastName}
          </Name>
          <br />
          <Revenue>{props.revenue} in revenue</Revenue>
        </p>
      </div>
      <Comment>{props.comment}</Comment>
      <ViewPortfolioButton firstName={props.firstName} />
    </div>
    // <div className="flex min-w-[396px] max-w-[396px] flex-col gap-y-4 rounded-md border border-light-grey p-7 font-medium mobile-max:w-full mobile-max:min-w-min mobile-max:max-w-max">
    //   <div className="flex flex-row items-center gap-4">
    //     <img
    //       className="selector"
    //       src={props.avatarImage}
    //       width={54}
    //       height={54}
    //       alt={`user avatar`}
    //     />
    //     <p className="text-sm leading-tight">
    //       <Name>
    //         {props.firstName} {props.lastName}
    //       </Name>
    //       <br />
    //       <Revenue>{props.revenue} in revenue</Revenue>
    //     </p>
    //   </div>
    //   <Comment>{props.comment}</Comment>
    //   <ViewPortfolioButton firstName={props.firstName} />
    // </div>
  );
}
