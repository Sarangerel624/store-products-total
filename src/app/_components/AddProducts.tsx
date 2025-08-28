import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function AddProducts() {
    
    return (
        <div className="flex justify-center">
        <div className="w-[850px] h-[140px] bg-gray-200 rounded-sm p-4 mt-5 shadow-xl/20">
          <div className="font-bold text-2xl mb-3">Add Product</div>
          <div className="flex gap-6 ">
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Product Name"
              name="productName"
            />
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Price"
              name="price"
            />
            <Input
              className="w-[270px] h-[37px] border-1 border-black"
              placeholder="Stock"
              name="stock"
            />
            <Button
              variant="outline"
              className="bg-blue-400 text-white hover:bg-blue-700 hover:text-white"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    )
}