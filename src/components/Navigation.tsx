import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navigation() {
    return (
        <nav className="fixed left-1/2 m-2 top-0 -translate-x-1/2 z-50">
            <Button asChild size="sm">
                <Link to="/">
                    Home
                </Link>
            </Button>
        </nav>
    )
}