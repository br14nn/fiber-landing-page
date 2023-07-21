import Star from "./Star";

type TRatingsProps = {
  className?: string;
};

export default function (props: TRatingsProps) {
  return (
    <div className={`flex flex-row items-center gap-4 ${props.className}`}>
      <div className="flex flex-row gap-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p>Rated 4.8/5 (243 reviews)</p>
    </div>
  );
}
