import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'

type Props = {
  name: string
  code: string
}

const information = [
  {
    title: 'Daily Work hours',
    value: '8:30',
  },
  {
    title: 'Hours worked to date',
    value: 40,
  },
  {
    title: 'Overtime to date',
    value: 12,
  },
  {
    title: 'Negative hours to date',
    value: 0,
  },
]

export const Header: React.FC<Props> = ({ name, code }) => {
  const fullName = name.split(' ')

  const initials = fullName
    .map((name) => name[0])
    .join('')
    .toUpperCase()

  const [firstName] = fullName

  return (
    <header className="flex justify-between container">
      <div className="flex flex-col justify-between">
        <div className="flex gap-3">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 justify-center">
            <h1 className="text-base font-medium leading-none">
              Hey, {firstName}
            </h1>
            <p className="text-xs text-muted-foreground">#{code}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">
            Let&apos;s get to work!
          </span>
          <Button size="sm" className="w-60">
            Clock In
          </Button>
        </div>
      </div>
      <ul className="list-none space-y-2 text-xs font-medium text-muted-foreground">
        {information.map((info) => (
          <li key={info.title} className="flex gap-2">
            <div className="min-w-40">{info.title}</div>
            <div className="p-1 min-w-24 flex justify-center items-center rounded bg-muted">
              {!info.value
                ? '--'
                : `${info.value} ${typeof info.value === 'number' ? 'hrs' : ''}`}
            </div>
          </li>
        ))}
      </ul>
    </header>
  )
}
