
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Cart() {
       
    return (
     
     <div>
          <div className="font-bold text-2xl">Cart</div>
          <div className="border-1 border-black rounded-sm shadow-xl">
            <div className="flex gap-40 p-3 justify-between">
              <div>
                <div className="text-2xl"></div>
                <div className="text-gray-500">$ each</div>
              </div>
              <div className="flex flex-row gap-3">
                <Input
                  type="number"
                  className="w-[60px] h-[35px] border-1 border-black"
                  // value={product.count}
                />
                <div className="mt-2">$</div>
              </div>
            </div>
            <div>
              <hr className="border-t border-black mt-2 ml-4 mr-4"></hr>
              <hr className="border-t border-black mt-2 ml-4 mr-4"></hr>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div className="font-bold">Total:</div>
            {/* <div className="font-bold"> ${}</div> */}
          </div>
        </div>
    )
}