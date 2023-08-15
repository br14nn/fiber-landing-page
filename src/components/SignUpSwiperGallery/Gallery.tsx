type TGalleryProps = {
  srcImg: string;
  title: string;
  children: React.ReactNode;
};

export default function (props: TGalleryProps) {
  return (
    <>
      <img className="w-full" src={props.srcImg} />
      <p className="mt-4 text-4xl font-semibold text-white">{props.title}</p>
      <p className="mt-3 text-center text-link-water/90">{props.children}</p>
    </>
  );
}
