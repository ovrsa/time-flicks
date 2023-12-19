import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";


const AlbumCreate = () => {
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
        <Input className='mb-8 text-gray-500 py-4' placeholder="登録名を入力" />
        <Textarea className="py-4" placeholder="Type your message here." />
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="grid w-full max-w-sm items-center py-4">
            <Label className="" htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default AlbumCreate;