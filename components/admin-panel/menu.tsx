import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { LogOut, Ellipsis } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getMenuList } from '@/lib/menu-list'
import { CollapseMenuButton } from '@/components/admin-panel/collapse-menu-button'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

interface MenuProps {
  isOpen: boolean | undefined
}

export function Menu({ isOpen }: MenuProps) {
  const location = useLocation()
  const pathname = location.pathname
  const menuList = getMenuList(pathname)

  return (
    <nav className="mt-4 h-full w-full flex flex-col justify-between select-none">
      <ul className="flex flex-col items-start space-y-1.5 px-2">
        {menuList.map(({ groupLabel, menus }, index) => (
          <li className={cn('w-full', groupLabel ? 'pt-4' : '')} key={index}>
            {isOpen && groupLabel ? (
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#7c7c7c] px-3 pb-2 truncate">
                {groupLabel}
              </p>
            ) : !isOpen && groupLabel ? (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <div className="w-full flex justify-center items-center py-1">
                      <Ellipsis className="h-4 w-4 text-[#7c7c7c]" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{groupLabel}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}

            {menus.map(({ href, label, icon: Icon, active, submenus }, mIdx) => {
              if (submenus && submenus.length > 0) {
                return (
                  <div className="w-full" key={mIdx}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active || false}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  </div>
                )
              }

              const isLinkActive =
                active !== undefined
                  ? active
                  : href === '/dashboard'
                  ? pathname === '/dashboard' || pathname === '/dashboard/'
                  : pathname.startsWith(href)

              return (
                <div className="w-full" key={mIdx}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          to={href}
                          className={cn(
                            'w-full flex items-center h-10 px-3 rounded-[8px] text-[13px] font-medium transition-colors cursor-pointer',
                            isOpen ? 'justify-start' : 'justify-center p-0',
                            isLinkActive
                              ? 'bg-[#1e1e1e] text-[#ffffff] font-semibold'
                              : 'text-[#a7a7a7] hover:bg-[#141414] hover:text-[#ffffff]'
                          )}
                        >
                          <Icon
                            className={cn(
                              'size-4 shrink-0 transition-colors',
                              isOpen ? 'mr-3' : '',
                              isLinkActive ? 'text-[#6798ff]' : 'text-[#a7a7a7]'
                            )}
                          />
                          {isOpen && <span className="truncate">{label}</span>}
                        </Link>
                      </TooltipTrigger>
                      {!isOpen && (
                        <TooltipContent side="right">
                          {label}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )
            })}
          </li>
        ))}
      </ul>

      {/* Bouton de déconnexion au bas */}
      <div className="px-2 pt-6 pb-2 border-t border-[#313131]/60">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="/login"
                className={cn(
                  'w-full flex items-center h-10 px-3 rounded-[8px] text-[13px] font-medium text-[#7c7c7c] hover:text-red-400 hover:bg-[#1e1e1e] transition-colors cursor-pointer',
                  isOpen ? 'justify-start' : 'justify-center p-0'
                )}
              >
                <LogOut className={cn('size-4 shrink-0', isOpen ? 'mr-3' : '')} />
                {isOpen && <span>Se déconnecter</span>}
              </a>
            </TooltipTrigger>
            {!isOpen && (
              <TooltipContent side="right">
                Se déconnecter
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </nav>
  )
}
