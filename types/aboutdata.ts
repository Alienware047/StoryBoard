export type ValueCard = {
  id: string
  title: string
  desc: string
  icon: string // name of icon for reference
}

export type AboutData = {
  title: string
  description: string
  heroImage: string
  mission: {
    heading: string
    body: string
    image: string
  }
  values: ValueCard[]
  cta: {
    heading: string
    actionHref: string
    actionLabel: string
  }
}
