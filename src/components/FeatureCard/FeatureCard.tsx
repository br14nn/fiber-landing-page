type TFeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function (props: TFeatureCardProps) {
  return (
    <div className="flex w-1/4 flex-col gap-4 laptop-max:text-xl tablet:w-full tablet:items-center tablet:text-center mobile-max:items-start mobile-max:text-start">
      {props.icon}
      <p className="font-bold">{props.title}</p>
      <p className="leading-snug text-liver">{props.description}</p>
    </div>
  );
}
