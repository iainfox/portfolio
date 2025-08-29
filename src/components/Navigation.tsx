import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navigation() {
    return (
        <nav className="fixed m-2 top-0 z-50">
            <Button asChild size="sm">
                <Link to="/">
                    Home
                </Link>
            </Button>
        </nav>
    )
}