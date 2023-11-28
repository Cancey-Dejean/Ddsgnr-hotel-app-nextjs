import ButtonLink from "../Button"

const ButtonGroup = ({
  buttons = [
    {
      label: "Button",
      variant: "btn-inverted",
      url: "/",
      linkable: true,
      icon: false,
      className: "",
    },
    {
      label: "Button",
      variant: "btn-primary",
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
    <>
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
    </>
  )
}

export default ButtonGroup
