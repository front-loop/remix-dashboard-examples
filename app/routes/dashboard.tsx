import { Bell, BellOff, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from 'lucide-react'
import { Link } from '@remix-run/react'
import { useState } from 'react'
import { ThemeToggle } from '~/components/theme-toggle'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Badge } from '~/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { cn } from '~/utils/cn'

export default function Dashboard() {
  return (
    <div className="grid min-h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-dvh flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-16 lg:px-6">
            <LeftHeader />
          </div>
          <div className="flex-1">
            <LeftList />
          </div>
          <div className="mt-auto p-4">
            <LeftFooter />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <RightHeader />
        <RightMain />
      </div>
    </div>
  )
}

export function LeftHeader() {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="size-6" />
        <span>Home</span>
      </Link>
      <Button variant="outline" size="icon" className="ml-auto size-8" onClick={() => setOpen(!open)}>
        {open ? <Bell className="size-4" /> : <BellOff className="size-4" />}
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </>
  )
}

export function LeftList() {
  return (
    <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
      <Link to="#" className="nav-link">
        <Home className="size-4" />
        Dashboard
      </Link>
      <Link to="#" className="nav-link">
        <ShoppingCart className="size-4" />
        Orders
        <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">6</Badge>
      </Link>
      <Link to="#" className={cn('nav-link text-primary bg-muted')}>
        <Package className="size-4" />
        Products
      </Link>
      <Link to="#" className="nav-link">
        <Users className="size-4" />
        Customers
      </Link>
      <Link to="#" className="nav-link">
        <LineChart className="size-4" />
        Analytics
      </Link>
    </nav>
  )
}

export function LeftFooter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-2 text-lg">Upgrade to Pro</CardTitle>
        <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" className="w-full">
          Upgrade
        </Button>
      </CardContent>
    </Card>
  )
}

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="mb-2 size-6" />
            <span className="sr-only">Home</span>
          </Link>
          <Link to="#" className="mobile-nav-link">
            <Home className="size-5" />
            Dashboard
          </Link>
          <Link to="#" className="mobile-nav-link">
            <ShoppingCart className="size-5" />
            Orders
            <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">6</Badge>
          </Link>
          <Link to="#" className={cn('mobile-nav-link text-primary bg-muted')}>
            <Package className="size-5" />
            Products
          </Link>
          <Link to="#" className="mobile-nav-link">
            <Users className="size-5" />
            Customers
          </Link>
          <Link to="#" className="mobile-nav-link">
            <LineChart className="size-5" />
            Analytics
          </Link>
        </nav>
        <div className="mt-auto">
          <LeftFooter />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function RightHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-16 lg:px-6">
      <MobileSheet />
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products ..."
            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </div>
      <ThemeToggle />
    </header>
  )
}

export function RightMain() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-2xl font-bold tracking-tight">You have no products</h3>
          <p className="text-sm text-muted-foreground">You can start selling as soon as you add a product.</p>
          <Button className="mt-4">Add Product</Button>
        </div>
      </div>
    </main>
  )
}
