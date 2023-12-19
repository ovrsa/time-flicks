import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"



const Detail = () => {
    // 仮の画像データ配列
    const images = [
        { id: 1, src: 'path/to/image1.jpg', title: 'Image 1' },
    ];

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
                    <Button variant="destructive">Delete</Button>
                    {/* 削除しますか？ポップアップ y/n */}
                </div>
                <div className="flex justify-between">
                    <p className='mb-8 text-gray-500'>test.</p>
                    <Button variant="link" className="text-base">Edit</Button>
                </div>
                <div className="grid place-items-center">
                    <img
                        className="
                        object-cover 
                        object-center 
                        transition-transform 
                        duration-600 
                        ease-in-out 
                        max-w-800px 
                        w-full
                                    "
                        src='https://elanomad.ro/wp-content/uploads/2023/03/venetia-murano-burano-itinerariu-elanomad-2-of-67.jpg'
                    >
                    </img>
                </div>

            </div>
        </div>
    );
};

export default Detail;