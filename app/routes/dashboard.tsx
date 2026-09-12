import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider } from '@/hooks/use-sidebar'
import { AdminPanelLayout } from '@/components/admin-panel/admin-panel-layout'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AdminPanelLayout>
        <Outlet />
      </AdminPanelLayout>
    </SidebarProvider>
  )
}
