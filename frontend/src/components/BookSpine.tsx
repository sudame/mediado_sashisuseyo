type Prop = {
  title: string;
};

export const BookSpine: React.FC<Prop> = ({ title }) => {
  return <div>{title}</div>;
};
