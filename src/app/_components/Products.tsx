
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Products() {
       
    return (
       <div className="w-[400px] h-[110px] border-1 border-gray-800 rounded-sm pt-2 pl-2 mb-4 shadow-xl">
              <div className="flex gap-30">
                <div className="text-2xl"></div>
                <div className="flex gap-3 ">
                  <Button className="text-blue-400 border border-blue-300 bg-white hover:bg-blue-800 hover:text-white">
                    Edit
                  </Button>
                  <Button className="text-red-500 border border-red-500 bg-white hover:bg-red-800 hover:text-white">
                    Delete
                  </Button>
                </div>
              </div>
              <div className="flex ">
                <div className="flex gap-1.5">
                  <div className="text-gray-500">$</div>
                  <div>*</div>
                  <div className="text-gray-500">Stock :</div>
                </div>
              </div>
              <Button className="bg-green-400 hover:bg-green-800">
                Add to Cart
              </Button>
            </div>
    )
}