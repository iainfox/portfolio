import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './ModeToggle'

export default function Navigation() {
    return (
        <nav className="fixed m-2 top-0 z-50 w-full flex items-center">
            <Button asChild>
                <Link to="/">
                    Home
                </Link>
            </Button>

            <div className="w-fit ml-auto -translate-x-1/2">
                <ModeToggle />
            </div>
        </nav>
    )
}