import {
  LayoutGrid,
  Sparkles,
  Target,
  Users,
  Activity,
  Settings,
  LucideIcon,
  ShieldCheck,
  Globe,
} from 'lucide-react'

export type Submenu = {
  href: string
  label: string
  active?: boolean
}

export type Menu = {
  href: string
  label: string
  active?: boolean
  icon: LucideIcon
  submenus?: Submenu[]
}

export type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Vue Cockpit',
          icon: LayoutGrid,
          active: pathname === '/dashboard' || pathname === '/dashboard/',
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Moteurs & Recommandations',
      menus: [
        {
          href: '/dashboard',
          label: 'Moteurs IA',
          icon: Sparkles,
          submenus: [
            {
              href: '/dashboard',
              label: 'ChatGPT 4o',
              active: true,
            },
            {
              href: '/dashboard',
              label: 'Perplexity AI',
              active: false,
            },
            {
              href: '/dashboard',
              label: 'Claude 3.7',
              active: false,
            },
          ],
        },
        {
          href: '/dashboard',
          label: '30 Questions Cibles',
          icon: Target,
          submenus: [],
        },
        {
          href: '/dashboard',
          label: 'Concurrents & Part de voix',
          icon: Users,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Surveillance & Paramètres',
      menus: [
        {
          href: '/dashboard',
          label: 'Télémétrie & Sources',
          icon: Activity,
          submenus: [],
        },
        {
          href: '/dashboard',
          label: 'Domaine & Clés API',
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
