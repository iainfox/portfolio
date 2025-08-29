import { ModeToggle } from '@/components/ModeToggle'

export default function Home() {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex flex-col items-center gap-8">
                <ModeToggle />
            </div>
        </div>
    )
}