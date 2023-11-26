import { TextField } from "@mui/material"

type Props = {
  label: string
  id: string
} & React.ComponentProps<typeof TextField>

const Input = ({ label, id, ...props }: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-[8px] block text-base" tabIndex={0}>
          {label}
        </label>
      )}

      <TextField id={id} {...props} fullWidth />
    </div>
  )
}

export default Input
