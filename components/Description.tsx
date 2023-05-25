interface IProps {
  description: string;
}
const Description = ({ description }: IProps) => {
  return (
    <p className="text-gradient bg-TEXT_GRADIENT text-MID font-SPACEGR">
      {description}
    </p>
  );
};

export default Description;
