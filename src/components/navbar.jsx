import React from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b shadow-sm">
      <NavigationMenu className="w-full px-8 py-3">
        <NavigationMenuList className="w-full flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-primary">
                Mst GoMyCode
            </span>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="transition-colors hover:text-blue-600 focus:text-blue-600">Home</NavigationMenuLink>
            </NavigationMenuItem>
          </div>
          <div className="flex items-center gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="transition-colors hover:text-blue-600 focus:text-blue-600">Why GoMyCode</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="transition-colors hover:text-blue-600 focus:text-blue-600">Courses</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="transition-colors hover:text-blue-600 focus:text-blue-600">Contact Us</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Button className="text-white ml-4 ">
                    Login
                </Button>
                <Button className="text-white ml-4 ">
                    Signup
                </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
