import ButtonLink from ".."

const ButtonGroup = ({
  buttons = [
    {
      label: "Button",
      variant: "btn-primary",
      url: "/",
      icon: false,
      className: "",
    },
    {
      label: "Button",
      variant: "btn-border-dark",
      url: "/",
      icon: false,
      className: "",
    },
  ],
}: {
  buttons?: (typeof ButtonLink)[number][]
}) => {
  return (
    <div className="flex gap-4">
      {buttons.map((button, index) => (
        <ButtonLink
          type={button.type}
          key={index}
          label={button.label}
          url={button.url}
          size={button.size as any}
          variant={button.variant as any}
          className={button.className}
          icon={button.icon}
        />
      ))}
    </div>
  )
}

export default ButtonGroup
