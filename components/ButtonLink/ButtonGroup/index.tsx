import ButtonLink from ".."

const ButtonGroup = ({
  buttons = [
    {
      label: "Button",
      variant: "btn-primary",
      url: "/",
      linkable: true,
      icon: false,
      className: "",
    },
    {
      label: "Button",
      variant: "btn-border-dark",
      url: "/",
      linkable: true,
      icon: false,
      className: "",
    },
  ],
}: {
  buttons?: {
    url: string
    className?: string
    label: string
    variant?: string
    linkable?: boolean
    size?: string
    icon?: boolean
  }[]
}) => {
  return (
    <div className="flex gap-4">
      {buttons.map((button, index) => (
        <ButtonLink
          type={button.linkable ? "button" : "submit"}
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
    </div>
  )
}

export default ButtonGroup
