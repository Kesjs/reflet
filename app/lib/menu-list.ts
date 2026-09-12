import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Lightbulb,
  History,
  Settings,
  LucideIcon,
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
          label: 'Accueil',
          icon: LayoutDashboard,
          active: pathname === '/dashboard' || pathname === '/dashboard/',
          submenus: [],
        },
        {
          href: '/dashboard/performance',
          label: 'Performance',
          icon: TrendingUp,
          active: pathname.startsWith('/dashboard/performance'),
          submenus: [],
        },
        {
          href: '/dashboard/concurrents',
          label: 'Concurrents',
          icon: Users,
          active: pathname.startsWith('/dashboard/concurrents'),
          submenus: [],
        },
        {
          href: '/dashboard/opportunites',
          label: 'Opportunités',
          icon: Lightbulb,
          active: pathname.startsWith('/dashboard/opportunites'),
          submenus: [],
        },
        {
          href: '/dashboard/historique',
          label: 'Historique',
          icon: History,
          active: pathname.startsWith('/dashboard/historique'),
          submenus: [],
        },
      ],
    },
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard/parametres',
          label: 'Paramètres',
          icon: Settings,
          active: pathname.startsWith('/dashboard/parametres'),
          submenus: [],
        },
      ],
    },
  ]
}
