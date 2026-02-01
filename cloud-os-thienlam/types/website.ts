import { CategoryType } from "@/constants/categories"

export interface Website {
  id: string
  name: string
  url: string
  description: string
  icon: string
  color: string
  category?: CategoryType
}