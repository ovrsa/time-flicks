import { Button } from '@/components/ui/button';

const GoogleAuth = () => {
    return (
        <div >
            <Button variant="outline" type="button"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Google
            </Button>
        </div>
    )
}

export default GoogleAuth