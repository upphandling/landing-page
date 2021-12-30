import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  note: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div className="mt-6 text-sm leading-9">{props.note}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={props.image} alt={props.imageAlt} className="h-fit" />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
