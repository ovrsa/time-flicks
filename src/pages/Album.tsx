import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ImageCard from '@/components/ImageCard';
import { Button } from "@/components/ui/button";

const Album = () => {
    // 仮の画像データ配列
    const images = [
        { id: 1, src: 'path/to/image1.jpg', title: 'Image 1' },
        { id: 2, src: 'path/to/image2.jpg', title: 'Image 2' },
        { id: 3, src: 'path/to/image3.jpg', title: 'Image 3' },
        { id: 4, src: 'path/to/image4.jpg', title: 'Image 4' },
    ];

    return (
        // ナビゲーションバー
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white shadow">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold">Time Flicks</div>
                        <div className="flex">
                            <a href="/account" className="px-3 py-2">Account</a>
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
                    <Button>Upload</Button>
                </div>
                <div className="flex justify-between">
                    <p className='mb-8 text-gray-500'>Family vacation in 2050.</p>
                    <Button variant="link" className="text-base">Edit</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                    {images.map((image) => (
                        <ImageCard
                            linkTo={`/album/${image.id}/detailsample`}
                            src='https://elanomad.ro/wp-content/uploads/2023/03/venetia-murano-burano-itinerariu-elanomad-2-of-67.jpg'
                            title='Venetia'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Album;