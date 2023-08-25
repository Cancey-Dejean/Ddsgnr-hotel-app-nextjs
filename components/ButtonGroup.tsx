import ButtonLink from "./ButtonLink";

const ButtonGroup = ({
  buttons = [
    {
      label: "Book Now",
      variant: "btn-inverted",
      url: "/",
      linkable: true,
      icon: false,
      className: "",
    },
  ],
}: {
  buttons?: {
    url: string;
    className?: string;
    label: string;
    variant?: string;
    linkable?: boolean;
    size?: string;
    icon?: boolean;
  }[];
}) => {
  return (
    <>
      {buttons.map((button, index) => (
        <ButtonLink
          key={index}
          label={button.label}
          url={button.url}
          size={button.size as any}
          variant={button.variant as any}
          className={button.className}
          icon={button.icon}
          linkable={button.linkable}
        />
      ))}
    </>
  );
};

export default ButtonGroup;
