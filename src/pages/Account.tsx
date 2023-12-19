import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import React from 'react'

const Account = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold px-3 py-2">Time Flicks</div>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-8 flex flex-col items-center justify-center">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold my-4">user name</h1>
                <Button>UpDate</Button>
            </div>

        </div>)
}

export default Account