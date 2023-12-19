import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const PhotoUpload = () => {
    return (
        // ナビゲーションバー
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold">Time Flicks</div>
                        <div className="flex">
                            <a href="/discover" className="px-3 py-2">Account</a>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </nav>

            {/* アルバム画像一覧 */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold mb-4">Venetia</h1>
                </div>
                <div className="flex justify-between">
                    <p className='mb-8 text-gray-500'>test.(空でもok)</p>
                </div>
                <div className="grid place-items-center">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input id="picture" type="file" />
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhotoUpload;